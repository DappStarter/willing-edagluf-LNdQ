require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note night method guess glove flower gather'; 
let testAccounts = [
"0x27528422c0ff2421f9d7b43a19b72c9c302fa18f99a69f7cef233360f212bde7",
"0x6745c25519c405ecbf420fe765ee2d514e2f45107856642b6ca471380cfd2dc7",
"0xf4917c349e019114ef32a08949b3931a56f9f9211ca16415b90f60309421a38c",
"0xeaf86c474b1ef8ab5ffaab34b104cd1b42c7f7b38b30e4b79a2df344fdfc1f4c",
"0xfef0d07ec2aac33f4b0f0c369ed1f0ce485cd217ca49614328ab45b4acbbfe00",
"0x28f4ecc0208821793cd0dffe0108c80a4e77cc2253ec5e9a037036c63213423a",
"0x969451be5f801210157dfb564c666d54382e2515440b1ff092b1eb295bc4b8d9",
"0x7a9cb89ee811fafae49e5a67578aae74ccda73548a6ee06868943fc0777964c7",
"0x5ea341ef36b3b6586eb4aaf8e2ea80aedc7c2fd0c2d2cfa019705992049820cf",
"0xc7c38c251fe5a7d1cb58cd219da27b3d12d643c40d9cb36192d6f3d6021281f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


