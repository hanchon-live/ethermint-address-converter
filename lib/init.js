import { isValidChecksumAddress as rskIsValidChecksumAddress, stripHexPrefix as rskStripHexPrefix, toChecksumAddress as rskToChecksumAddress, } from 'crypto-addr-codec';
import { decode as bech32Decode, encode as bech32Encode, fromWords as bech32FromWords, toWords as bech32ToWords, } from 'bech32';
// module.exports = function tiny(string) {
//     if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//     return string.replace(/\s/g, "");
//   };
function makeChecksummedHexEncoder(chainId) {
    return function (data) { return rskToChecksumAddress(data.toString('hex'), chainId || null); };
}
function makeChecksummedHexDecoder(chainId) {
    return function (data) {
        var stripped = rskStripHexPrefix(data);
        if (!rskIsValidChecksumAddress(data, chainId || null) &&
            stripped !== stripped.toLowerCase() &&
            stripped !== stripped.toUpperCase()) {
            throw Error('Invalid address checksum');
        }
        return Buffer.from(rskStripHexPrefix(data), 'hex');
    };
}
var hexChecksumChain = function (name, coinType, chainId) { return ({
    coinType: coinType,
    decoder: makeChecksummedHexDecoder(chainId),
    encoder: makeChecksummedHexEncoder(chainId),
    name: name,
}); };
export var ETH = hexChecksumChain('ETH', 1);
// { text: '0x314159265dD8dbb310642f98f50C066173C1259b', hex: '314159265dd8dbb310642f98f50c066173c1259b' },
function makeBech32Encoder(prefix) {
    return function (data) { return bech32Encode(prefix, bech32ToWords(data)); };
}
function makeBech32Decoder(currentPrefix) {
    return function (data) {
        var _a = bech32Decode(data), prefix = _a.prefix, words = _a.words;
        if (prefix !== currentPrefix) {
            throw Error('Unrecognised address format');
        }
        return Buffer.from(bech32FromWords(words));
    };
}
var bech32Chain = function (name, coinType, prefix) { return ({
    coinType: coinType,
    decoder: makeBech32Decoder(prefix),
    encoder: makeBech32Encoder(prefix),
    name: name,
}); };
export var ETHERMINT = bech32Chain('ETHERMINT', 2, 'ethm');
