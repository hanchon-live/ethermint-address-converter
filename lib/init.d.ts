/// <reference types="node" />
export declare const ETH: {
    coinType: number;
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    coinType: number;
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
