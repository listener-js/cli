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

Defined in cli.ts:12

## Methods

###  cli

▸ **cli**(`id`: string[]): *`Promise<any>`*

Defined in cli.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *`Promise<any>`*

___

### `Private` deepMerge

▸ **deepMerge**(`argv`: object, `config`: object): *void*

Defined in cli.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`argv` | object |
`config` | object |

**Returns:** *void*

___

### `Private` extractListenerInstance

▸ **extractListenerInstance**(`lib`: `Promise<any>`): *`Promise<any>`*

Defined in cli.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`lib` | `Promise<any>` |

**Returns:** *`Promise<any>`*

___

### `Private` findComposerPath

▸ **findComposerPath**(`configPath`: string, `eventName`: string): *`Promise<string>`*

Defined in cli.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`configPath` | string |
`eventName` | string |

**Returns:** *`Promise<string>`*

___

### `Private` globPaths

▸ **globPaths**(`argv`: `ParsedOptions`): *`Promise<string[]>`*

Defined in cli.ts:98

**Parameters:**

Name | Type |
------ | ------ |
`argv` | `ParsedOptions` |

**Returns:** *`Promise<string[]>`*

___

### `Private` updateFromConfig

▸ **updateFromConfig**(`argv`: `ParsedOptions`, `cwd`: string | undefined, `eventName`: string): *`Promise<[string, string]>`*

Defined in cli.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`argv` | `ParsedOptions` |
`cwd` | string \| undefined |
`eventName` | string |

**Returns:** *`Promise<[string, string]>`*