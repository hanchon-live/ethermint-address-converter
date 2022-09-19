import { ETH, ETHERMINT, EVMOS, ethToEthermint, ethermintToEth, evmosToEth, ethToEvmos, ethToRebus, rebusToEth } from '../src/converter';

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

  // EVMOS
  address = evmosToEth("evmos1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw");
  expect(address).toBe("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652");
  // ETH to EVMOS 
  address = ethToEvmos("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652");
  expect(address).toBe("evmos1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw");

  // Rebus
  address = rebusToEth("rebus1z3t55m0l9h0eupuz3dp5t5cypyv674jjdss3us");
  expect(address).toBe("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652");
  // ETH to EVMOS 
  address = ethToRebus("0x14574a6DFF2Ddf9e07828b4345d3040919AF5652");
  expect(address).toBe("rebus1z3t55m0l9h0eupuz3dp5t5cypyv674jjdss3us");
})
