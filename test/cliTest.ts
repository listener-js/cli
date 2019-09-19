import { listener } from "@listener-js/listener"
import * as getopts from "getopts"
import { cli } from "../"
import { join } from "path"

const root = join(__dirname, "../")

listener([], { cli })

test("can't find composer", async (): Promise<void> => {
  await expect(
    cli["findComposerPath"](root, "does-not-exist")
  ).rejects.toThrow()
})

test("find composer", async (): Promise<void> => {
  expect(await cli["findComposerPath"](root, "cli")).toBe(
    join(root, "dist/cli.js")
  )
})

test("update from config without event", async (): Promise<
  void
> => {
  const argv: getopts.ParsedOptions = { _: [] }

  expect(
    await cli["updateFromConfig"](
      argv,
      join(root, "test"),
      "does-not-exist"
    )
  ).toEqual([
    "does-not-exist",
    join(root, "test/listener.cli.json"),
  ])

  expect(argv).toEqual({ _: [] })
})

test("update from config with event", async (): Promise<
  void
> => {
  const argv: getopts.ParsedOptions = { _: [] }

  expect(
    await cli["updateFromConfig"](
      argv,
      `${root}test`,
      "test"
    )
  ).toEqual([
    "override",
    join(root, "test/listener.cli.json"),
  ])

  expect(argv).toEqual({
    _: [],
    default: true,
    extra: true,
  })
})
