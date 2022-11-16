# Ethermint address converter

NOTE: THIS REPO IS ARCHIVED, IT WAS MOVED TO [EVMOSJS](https://github.com/evmos/evmosjs/tree/main/packages/address-converter)

A simple converter between `ETH` address and `Ethermint` addresses.

## Installation

``` sh
npm install @hanchon/ethermint-address-converter
```

## Usage

### Converter

``` ts
import {ethToEthermint, ethermintToEth} from "@hanchon/ethermint-address-converter"

let address = ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"
```

### Decoders

``` ts
import {ETH, ETHERMINT} from "@hanchon/ethermint-address-converter"
let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```

### Encoders

``` ts
import {ETH, ETHERMINT} from "@hanchon/ethermint-address-converter"
let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"
```

### EVMOS support
```ts
import {ethToEvmos, evmosToEth} from "@hanchon/ethermint-address-converter"

let address = ethToEvmos("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652")
// "evmos1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw"

let address = evmosToEth("evmos1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw")
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"
```

### REBUS support
```ts
import {ethToRebus, rebusToEth} from "@hanchon/ethermint-address-converter"

let address = ethToRebus("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652")
// "rebus1z3t55m0l9h0eupuz3dp5t5cypyv674jjdss3us"

let address = rebusToEth("rebus1z3t55m0l9h0eupuz3dp5t5cypyv674jjdss3us")
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"
```


## Build locally

``` sh
yarn install
yarn test
yarn build
```

## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
