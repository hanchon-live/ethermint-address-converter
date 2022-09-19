/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEthermint: (ethAddress: string) => string;
export declare const ethermintToEth: (ethermintAddress: string) => string;
export declare const EVMOS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEvmos: (ethAddress: string) => string;
export declare const evmosToEth: (evmosAddress: string) => string;
export declare const REBUS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToRebus: (ethAddress: string) => string;
export declare const rebusToEth: (evmosAddress: string) => string;
