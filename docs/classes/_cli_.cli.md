> **[cli](../README.md)**

[Globals](../globals.md) / ["cli"](../modules/_cli_.md) / [Cli](_cli_.cli.md) /

# Class: Cli

## Hierarchy

* **Cli**

## Index

### Properties

* [listeners](_cli_.cli.md#listeners)

### Methods

* [cli](_cli_.cli.md#cli)
* [deepMerge](_cli_.cli.md#private-deepmerge)
* [extractListenerInstance](_cli_.cli.md#private-extractlistenerinstance)
* [findComposerPath](_cli_.cli.md#private-findcomposerpath)
* [globPaths](_cli_.cli.md#private-globpaths)
* [updateFromConfig](_cli_.cli.md#private-updatefromconfig)

## Properties

###  listeners

• **listeners**: *string[]* =  ["cli"]

*Defined in [cli.ts:12](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L12)*

## Methods

###  cli

▸ **cli**(`id`: string[]): *`Promise<any>`*

*Defined in [cli.ts:14](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *`Promise<any>`*

___

### `Private` deepMerge

▸ **deepMerge**(`argv`: object, `config`: object): *void*

*Defined in [cli.ts:53](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`argv` | object |
`config` | object |

**Returns:** *void*

___

### `Private` extractListenerInstance

▸ **extractListenerInstance**(`lib`: `Promise<any>`): *`Promise<any>`*

*Defined in [cli.ts:65](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`lib` | `Promise<any>` |

**Returns:** *`Promise<any>`*

___

### `Private` findComposerPath

▸ **findComposerPath**(`configPath`: string, `eventName`: string): *`Promise<string>`*

*Defined in [cli.ts:76](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`configPath` | string |
`eventName` | string |

**Returns:** *`Promise<string>`*

___

### `Private` globPaths

▸ **globPaths**(`argv`: `ParsedOptions`): *`Promise<string[]>`*

*Defined in [cli.ts:101](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`argv` | `ParsedOptions` |

**Returns:** *`Promise<string[]>`*

___

### `Private` updateFromConfig

▸ **updateFromConfig**(`argv`: `ParsedOptions`, `cwd`: string | undefined, `eventName`: string): *`Promise<[string, string]>`*

*Defined in [cli.ts:112](https://github.com/listener-js/cli/blob/f3d6edb/src/cli.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`argv` | `ParsedOptions` |
`cwd` | string \| undefined |
`eventName` | string |

**Returns:** *`Promise<[string, string]>`*