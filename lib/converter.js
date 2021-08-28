import { isValidChecksumAddress, stripHexPrefix, toChecksumAddress } from 'crypto-addr-codec';
import { decode, encode, fromWords, toWords, } from 'bech32';
function makeChecksummedHexEncoder(chainId) {
    return function (data) { return toChecksumAddress(data.toString('hex'), chainId || null); };
}
function makeChecksummedHexDecoder(chainId) {
    return function (data) {
        var stripped = stripHexPrefix(data);
        if (!isValidChecksumAddress(data, chainId || null) &&
            stripped !== stripped.toLowerCase() &&
            stripped !== stripped.toUpperCase()) {
            throw Error('Invalid address checksum');
        }
        return Buffer.from(stripHexPrefix(data), 'hex');
    };
}
var hexChecksumChain = function (name, chainId) { return ({
    decoder: makeChecksummedHexDecoder(chainId),
    encoder: makeChecksummedHexEncoder(chainId),
    name: name,
}); };
export var ETH = hexChecksumChain('ETH');
function makeBech32Encoder(prefix) {
    return function (data) { return encode(prefix, toWords(data)); };
}
function makeBech32Decoder(currentPrefix) {
    return function (data) {
        var _a = decode(data), prefix = _a.prefix, words = _a.words;
        if (prefix !== currentPrefix) {
            throw Error('Unrecognised address format');
        }
        return Buffer.from(fromWords(words));
    };
}
var bech32Chain = function (name, prefix) { return ({
    decoder: makeBech32Decoder(prefix),
    encoder: makeBech32Encoder(prefix),
    name: name,
}); };
export var ETHERMINT = bech32Chain('ETHERMINT', 'ethm');
export var ethToEthermint = function (ethAddress) {
    var data = ETH.decoder(ethAddress);
    return ETHERMINT.encoder(data);
};
export var ethermintToEth = function (ethermintAddress) {
    var data = ETHERMINT.decoder(ethermintAddress);
    return ETH.encoder(data);
};
