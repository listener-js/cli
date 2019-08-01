> **[cli](README.md)**

[Globals](globals.md) /

# @listener-js/cli

![cli](media/cli.gif)

## Install

```bash
npm install -g @listener-js/cli
```

## Syntax

```bash
listener EVENT [ARGS...] [--OPTIONS]
```

## Example

Let's run [`@listener-js/spawn`](https://github.com/listener-js/spawn) from the CLI:

```bash
npm install -g @listener-js/cli @listener-js/spawn
listener @listener-js/spawn --command=ls
```