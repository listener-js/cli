[@listener-js/cli](../README.md) › [Globals](../globals.md) › ["cli"](../modules/_cli_.md) › [Cli](_cli_.cli.md)

# Class: Cli

## Hierarchy

* **Cli**

## Index

### Methods

* [cli](_cli_.cli.md#cli)
* [deepMerge](_cli_.cli.md#private-deepmerge)
* [extractListenerInstance](_cli_.cli.md#private-extractlistenerinstance)
* [findComposerPath](_cli_.cli.md#private-findcomposerpath)
* [globPaths](_cli_.cli.md#private-globpaths)
* [updateFromConfig](_cli_.cli.md#private-updatefromconfig)

## Methods

###  cli

▸ **cli**(`lid`: string[]): *Promise‹any›*

Defined in cli.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |

**Returns:** *Promise‹any›*

___

### `Private` deepMerge

▸ **deepMerge**(`argv`: object, `config`: object): *void*

Defined in cli.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`argv` | object |
`config` | object |

**Returns:** *void*

___

### `Private` extractListenerInstance

▸ **extractListenerInstance**(`lib`: Promise‹any›): *Promise‹any›*

Defined in cli.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`lib` | Promise‹any› |

**Returns:** *Promise‹any›*

___

### `Private` findComposerPath

▸ **findComposerPath**(`configPath`: string, `instanceId`: string): *Promise‹string›*

Defined in cli.ts:81

**Parameters:**

Name | Type |
------ | ------ |
`configPath` | string |
`instanceId` | string |

**Returns:** *Promise‹string›*

___

### `Private` globPaths

▸ **globPaths**(`argv`: ParsedOptions): *Promise‹string[]›*

Defined in cli.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`argv` | ParsedOptions |

**Returns:** *Promise‹string[]›*

___

### `Private` updateFromConfig

▸ **updateFromConfig**(`argv`: ParsedOptions, `cwd`: string | undefined, `listenerId`: string): *Promise‹string[]›*

Defined in cli.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`argv` | ParsedOptions |
`cwd` | string &#124; undefined |
`listenerId` | string |

**Returns:** *Promise‹string[]›*
