import { ETH, ETHERMINT, ethToEthermint, ethermintToEth } from '../src/converter';

test('test decoders', () => {
  // ETH
  let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
  expect(hex.toString('hex')).toBe("e2d61e49ff8a9d724cc54d338d8076f878ac6b71");
  // ETHERMINT
  hex = ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
  expect(hex.toString('hex')).toBe("e2d61e49ff8a9d724cc54d338d8076f878ac6b71");
})

test('test encoders', () => {
  // ETH
  let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
  expect(address).toBe("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71");
  // ETHERMINT
  address = ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
  expect(address).toBe("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048");
})

test('test converters', () => {
  // ETH
  let address = ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
  expect(address).toBe("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048");

  // ETHERMINT
  address = ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
  expect(address).toBe("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71");
})




