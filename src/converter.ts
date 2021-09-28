import {
  isValidChecksumAddress,
  stripHexPrefix,
  toChecksumAddress
} from 'crypto-addr-codec';

import {
  decode,
  encode,
  fromWords,
  toWords,
} from 'bech32';

function makeChecksummedHexEncoder(chainId?: number) {
  return (data: Buffer) => toChecksumAddress(data.toString('hex'), chainId || null);
}

function makeChecksummedHexDecoder(chainId?: number) {
  return (data: string) => {
    const stripped = stripHexPrefix(data);
    if (
      !isValidChecksumAddress(data, chainId || null) &&
      stripped !== stripped.toLowerCase() &&
      stripped !== stripped.toUpperCase()
    ) {
      throw Error('Invalid address checksum');
    }
    return Buffer.from(stripHexPrefix(data), 'hex');
  };
}

const hexChecksumChain = (name: string, chainId?: number) => ({
  decoder: makeChecksummedHexDecoder(chainId),
  encoder: makeChecksummedHexEncoder(chainId),
  name,
});

export const ETH = hexChecksumChain('ETH');

function makeBech32Encoder(prefix: string) {
  return (data: Buffer) => encode(prefix, toWords(data));
}

function makeBech32Decoder(currentPrefix: string) {
  return (data: string) => {
    const { prefix, words } = decode(data);
    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format');
    }
    return Buffer.from(fromWords(words));
  };
}


const bech32Chain = (name: string, prefix: string) => ({
  decoder: makeBech32Decoder(prefix),
  encoder: makeBech32Encoder(prefix),
  name,
});

export const ETHERMINT = bech32Chain('ETHERMINT', 'ethm');

export const ethToEthermint = (ethAddress: string) => {
  let data = ETH.decoder(ethAddress);
  return ETHERMINT.encoder(data);
};

export const ethermintToEth = (ethermintAddress: string) => {
  let data = ETHERMINT.decoder(ethermintAddress);
  return ETH.encoder(data);
};


export const EVMOS = bech32Chain('EVMOS', 'evmos');

export const ethToEvmos = (ethAddress:string) => {
  let data = ETH.decoder(ethAddress);
  return EVMOS.encoder(data);
}

export const evmosToEth = (evmosAddress: string) => {
  let data = EVMOS.decoder(evmosAddress);
  return ETH.encoder(data);
};
