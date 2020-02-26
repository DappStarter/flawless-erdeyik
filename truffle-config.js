require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain purity good cloth fog story'; 
let testAccounts = [
"0x5a8c2051702f5f2682da2d6fb581f5bb076280599071774932df43542f141a0b",
"0xfd16eb70a3e186f00dff966d401b8642cb3e9deffd0c60beedd7bb3b38c52acb",
"0xf62dceeced525ff2b763685c1e9f989cf67cd7aeb16f6b18f1fc0be5c39d07e5",
"0xa335e6b75430432462511b3089843f8db6f54c713e804c8891c1087497a6a56d",
"0xc551b4e2e1e48b9dccb8dd2b1860fb0e71b1d84a5206800260857a9d4e25687b",
"0x1ea1f05eb7fa654718d0f551019c1a3bd0452fd9cfd7c570da158d6fde5d2aff",
"0x10c7419afff9ab28bdc9095a5e659ff2fc210ccbb8fcbbb5e2171a9b4f873a88",
"0x40ec45419a11c09163bfc48e691e0ec1616aa124318a1a30f4e67c2211ebb860",
"0xccedc4cf65c139097bb4495461a9532a470ea2ca59e8902392067fc3f4e54b6f",
"0xef17849556463557c935432da904dba89d39d8c45fd85f9a1c257407cc8c5561"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
