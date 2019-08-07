import { listener } from "@listener-js/listener"
import * as findUp from "find-up"
import { readJson } from "fs-extra"
import * as getopts from "getopts"
import * as globWithCallback from "glob"
import { dirname, join } from "path"
import { promisify } from "util"

const glob = promisify(globWithCallback)

export class Cli {
  public listeners = ["cli"]

  public async cli(id: string[]): Promise<any> {
    const argv = getopts(process.argv.slice(2))

    let [listenerId, ...args] = argv._
    delete argv._

    let [instanceId, fnId, configPath] =
      await this.updateFromConfig(
        argv, undefined, listenerId
      )

    const composerPath = argv.path ||
      await this.findComposerPath(configPath, instanceId)

    const instance =
      await this.extractListenerInstance(
        import(composerPath)
      )

    listener({ [instanceId]: instance })

    const hasArgv = Object.keys(argv).length
    const paths = await this.globPaths(argv)

    return Promise.all(
      paths.map(async (cwd): Promise<any> =>
        instance[fnId](
          [...id, ...(hasArgv && argv.id ? argv.id : [])],
          ...args,
          ...(hasArgv ?
            [{ ...argv, cwd }] :
            []
          )
        )
      )
    )
  }

  private deepMerge(argv: object, config: object): void {
    for (const key in config) {
      const a = argv[key]
      const c = config[key]
      if (a && Array.isArray(c)) {
        argv[key] = c.concat(a)
      } else {
        argv[key] = c
      }
    }
  }

  private async extractListenerInstance(
    lib: Promise<any>
  ): Promise<any> {
    const imp = await lib

    for (const key in imp) {
      if (imp[key].listeners) {
        return imp[key]
      }
    }
  }

  private async findComposerPath(
    configPath: string,
    instanceId: string
  ): Promise<string> {
    const root = configPath
      ? dirname(configPath)
      : process.cwd()

    const pattern = `${root}/**/dist/${instanceId}.js`

    const paths = await glob(pattern, {
      ignore: "**/node_modules/**"
    })

    let path =
      paths.find((path): boolean => path.indexOf("/dist/") > -1) ||
      paths[0]

    if (!path) {
      path = require.resolve(instanceId)
    }

    return path
  }

  private async globPaths(
    argv: getopts.ParsedOptions
  ): Promise<string[]> {
    if (!argv.paths) {
      return [process.cwd()]
    }
    return await glob(argv.paths, {
      ignore: "**/node_modules/**"
    })
  }

  private async updateFromConfig(
    argv: getopts.ParsedOptions,
    cwd: string | undefined,
    listenerId: string
  ): Promise<string[]> {
    const configPath = await findUp("listener.cli.json", { cwd })

    if (configPath) {
      const { defaultArgs, events } = await readJson(
        configPath
      )

      const config = events[listenerId]

      if (config) {
        if (config.listenerId) {
          listenerId = config.listenerId
          delete config.listenerId
        }

        this.deepMerge(argv, config)

        if (defaultArgs) {
          if (typeof defaultArgs.paths === "string") {
            defaultArgs.paths = join(
              dirname(configPath), defaultArgs.paths
            )
          }
          Object.assign(argv, { ...defaultArgs, ...argv })
        }
      }
    }

    return [...listenerId.split(/\./).slice(0, 2), configPath]
  }
}

export const cli = new Cli()
