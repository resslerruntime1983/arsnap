[@pianity/arsnap-adapter](README.md) / Exports

# @pianity/arsnap-adapter

## Table of contents

### Type aliases

- [Permission](modules.md#permission)
- [RpcApi](modules.md#rpcapi)
- [RpcRequest](modules.md#rpcrequest)
- [RpcResponse](modules.md#rpcresponse)

### Functions

- [connect](modules.md#connect)
- [deleteWallet](modules.md#deletewallet)
- [exportWallet](modules.md#exportwallet)
- [getActiveAddress](modules.md#getactiveaddress)
- [getActivePublicKey](modules.md#getactivepublickey)
- [getAllAddresses](modules.md#getalladdresses)
- [getAllPermissions](modules.md#getallpermissions)
- [getPermissions](modules.md#getpermissions)
- [getWalletNames](modules.md#getwalletnames)
- [importWallet](modules.md#importwallet)
- [isEnabled](modules.md#isenabled)
- [renameWallet](modules.md#renamewallet)
- [requestPermissions](modules.md#requestpermissions)
- [revokeDappPermission](modules.md#revokedapppermission)
- [revokePermission](modules.md#revokepermission)
- [sendWinstonTo](modules.md#sendwinstonto)
- [setActiveAddress](modules.md#setactiveaddress)
- [signBytes](modules.md#signbytes)
- [signTx](modules.md#signtx)

## Type aliases

### Permission

Ƭ **Permission**: ``"GET_ACTIVE_ADDRESS"`` \| ``"SET_ACTIVE_ADDRESS"`` \| ``"GET_ACTIVE_PUBLIC_KEY"`` \| ``"GET_ALL_ADDRESSES"`` \| ``"SIGN"`` \| ``"ENCRYPT"`` \| ``"DECRYPT"`` \| ``"GET_DAPPS_PERMISSIONS"`` \| ``"REVOKE_DAPP_PERMISSION"`` \| ``"IMPORT_WALLET"`` \| ``"EXPORT_WALLET"`` \| ``"RENAME_WALLET"`` \| ``"DELETE_WALLET"``

#### Defined in

[types.ts:3](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/types.ts#L3)

___

### RpcApi

Ƭ **RpcApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete_wallet` | (`address`: `string`) => `Promise`<``null``\> |
| `export_wallet` | (`address`: `string`) => `Promise`<{ `address`: `string` ; `jwk`: `JWKInterface` ; `name`: `string`  }\> |
| `get_active_address` | () => `Promise`<`string`\> |
| `get_active_public_key` | () => `Promise`<`string`\> |
| `get_all_addresses` | () => `Promise`<`string`[]\> |
| `get_dapps_permissions` | () => `Promise`<[`string`, [`Permission`](modules.md#permission)[]][]\> |
| `get_permissions` | () => `Promise`<[`Permission`](modules.md#permission)[]\> |
| `get_wallet_names` | () => `Promise`<[`string`, `string`][]\> |
| `import_wallet` | (`wallet`: `JWKInterface`, `name?`: `string`) => `Promise`<{ `address`: `string` ; `name`: `string`  }\> |
| `is_enabled` | () => `Promise`<`boolean`\> |
| `rename_wallet` | (`address`: `string`, `name`: `string`) => `Promise`<``null``\> |
| `request_permissions` | (`permissions`: [`Permission`](modules.md#permission)[]) => `Promise`<`boolean`\> |
| `revoke_dapp_permissions` | (`dapp`: `string`, `permissions`: [`Permission`](modules.md#permission)[]) => `Promise`<``null``\> |
| `revoke_permissions` | (`permissions`: [`Permission`](modules.md#permission)[]) => `Promise`<``null``\> |
| `set_active_address` | (`address`: `string`) => `Promise`<``null``\> |
| `sign_bytes` | (`bytes`: `Uint8Array`, `saltLength`: `number`) => `Promise`<`Uint8Array`\> |

#### Defined in

[types.ts:21](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/types.ts#L21)

___

### RpcRequest

Ƭ **RpcRequest**: { [K in keyof RpcApi]: Object }[keyof [`RpcApi`](modules.md#rpcapi)]

#### Defined in

[types.ts:48](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/types.ts#L48)

___

### RpcResponse

Ƭ **RpcResponse**: { [K in keyof RpcApi]: ReturnType<RpcApi[K]\> }[keyof [`RpcApi`](modules.md#rpcapi)]

#### Defined in

[types.ts:52](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/types.ts#L52)

## Functions

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[metamask.ts:27](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/metamask.ts#L27)

___

### deleteWallet

▸ **deleteWallet**(`address`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<``null``\>

#### Defined in

[api.ts:82](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L82)

___

### exportWallet

▸ **exportWallet**(`address`): `Promise`<{ `address`: `string` ; `jwk`: `JWKInterface` ; `name`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `jwk`: `JWKInterface` ; `name`: `string`  }\>

#### Defined in

[api.ts:78](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L78)

___

### getActiveAddress

▸ **getActiveAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[api.ts:42](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L42)

___

### getActivePublicKey

▸ **getActivePublicKey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[api.ts:46](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L46)

___

### getAllAddresses

▸ **getAllAddresses**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[api.ts:50](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L50)

___

### getAllPermissions

▸ **getAllPermissions**(): `Promise`<[`string`, [`Permission`](modules.md#permission)[]][]\>

Get permisssions granted to all dApps.

#### Returns

`Promise`<[`string`, [`Permission`](modules.md#permission)[]][]\>

#### Defined in

[api.ts:34](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L34)

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`Permission`](modules.md#permission)[]\>

Get the permissions granted to the dApp from which the request is originating from

#### Returns

`Promise`<[`Permission`](modules.md#permission)[]\>

#### Defined in

[api.ts:16](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L16)

___

### getWalletNames

▸ **getWalletNames**(): `Promise`<[`string`, `string`][]\>

Returns an array of all wallets addresses and their attached name in the following form:
`[address: string, name: string][]`

#### Returns

`Promise`<[`string`, `string`][]\>

#### Defined in

[api.ts:58](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L58)

___

### importWallet

▸ **importWallet**(`wallet`, `name?`): `Promise`<{ `address`: `string` ; `name`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `JWKInterface` |
| `name?` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `name`: `string`  }\>

#### Defined in

[api.ts:74](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L74)

___

### isEnabled

▸ **isEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api.ts:5](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L5)

___

### renameWallet

▸ **renameWallet**(`address`, `name`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `name` | `string` |

#### Returns

`Promise`<``null``\>

#### Defined in

[api.ts:86](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L86)

___

### requestPermissions

▸ **requestPermissions**(`permissions`): `Promise`<`boolean`\>

Request permissions to the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permission`](modules.md#permission)[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api.ts:23](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L23)

___

### revokeDappPermission

▸ **revokeDappPermission**(`dapp`, `permissions`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dapp` | `string` |
| `permissions` | [`Permission`](modules.md#permission)[] |

#### Returns

`Promise`<``null``\>

#### Defined in

[api.ts:38](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L38)

___

### revokePermission

▸ **revokePermission**(`permissions`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permission`](modules.md#permission)[] |

#### Returns

`Promise`<``null``\>

#### Defined in

[api.ts:27](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L27)

___

### sendWinstonTo

▸ **sendWinstonTo**(`arweave`, `winston`, `recipient`): `Promise`<`void`\>

Send `winston` winstons using the current active wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arweave` | `default` | Arweave client used to send the transaction |
| `winston` | `string` | Amount of winstons to send (1 winston = 0.000000000001 AR) |
| `recipient` | `string` | Address that should receive the winstons |

#### Returns

`Promise`<`void`\>

#### Defined in

[helpers.ts:46](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/helpers.ts#L46)

___

### setActiveAddress

▸ **setActiveAddress**(`address`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<``null``\>

#### Defined in

[api.ts:70](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L70)

___

### signBytes

▸ **signBytes**(`bytes`, `saltLength`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `saltLength` | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[api.ts:62](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/api.ts#L62)

___

### signTx

▸ **signTx**(`tx`): `Promise`<`void`\>

Sign a transaction with the current active wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `default` | The transaction to sign |

#### Returns

`Promise`<`void`\>

#### Defined in

[helpers.ts:19](https://github.com/pianity/arsnap/blob/3b97c96/packages/adapter/src/helpers.ts#L19)