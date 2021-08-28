# Ethermint address converter

A simple converter between `ETH` address and `Ethermint` addresses.

## Installation

``` sh
npm install @hanchon/ethermint-address-converter
```

## Usage

### Converter

``` ts
const converter = require("@hanchon/ethermint-address-converter")

let address = converter.ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = converter.ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"
```

### Decoders

``` ts
const converter = require("@hanchon/ethermint-address-converter")
let hex = converter.ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = converter.ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
})
```

### Encoders

``` ts
const converter = require("@hanchon/ethermint-address-converter")
let address = converter.ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = converter.ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"
})
```

## Build locally

``` sh
yarn install
yarn test
yarn build
```

## Reference:

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
