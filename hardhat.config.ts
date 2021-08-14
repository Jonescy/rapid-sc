import {HardhatUserConfig} from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";


const INFURA_API_KEY = "248341ea5db74a47ae14a7209a3378da";
const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {

        compilers: [
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                },

            },
            {
                version: "0.7.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                },
            },
            {
                version: "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                },
            }
        ],

    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
    networks: {
        hardhat: {},
        ethmain: {
            url: `https://mainnet.infura.io/ws/v3/${INFURA_API_KEY}`,
        },

        rinkeby: {
            url: `https://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}`,
            chainId: 4,
            accounts: [`0x${process.env.PVK}`],
        },
        hecotest: {
            url: "https://http-testnet.hecochain.com",
            chainId: 256,
            accounts: [`0x${process.env.PVK}`],
            gas: 2100000,
            gasPrice: 8000000000
        },
        hecomain: {
            url: "https://http-mainnet.hecochain.com",
            // chainId: 128,
            accounts: {
                mnemonic: process.env.MNO2,
            },
        },
        bsctest: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            chainId: 97,
            accounts: {
                mnemonic: process.env.MNO2,
            },
        },
        bscmain: {
            url: "https://bsc-dataseed4.binance.org",
            chainId: 56,
            accounts: {
                mnemonic: process.env.MNO2,
            },
        },
    },
    namedAccounts:{
        deployer:0,
        tokenOwner:1,
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 0,
    }
};

export default config;
