import {HardhatUserConfig} from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "hardhat-watcher";


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
            accounts: [`0x${process.env.PVK}`],
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
    },
    etherscan: {
        apiKey: "J5YQDEZWE4RDNF66F4SDX6V7RATP7SWS4V",
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
        gasPriceApi: "https://api.bscscan.com/api?module=stats&action=eth_gasPrice",
    },
    watcher: {
        compilation: {
            tasks: ["compile"],
            files: ["contracts/**/*.sol"],
            verbose: true,
        },
        ci: {
            tasks: [
                'clean',
                { command: 'compile', params: { quiet: true } },
                { command: 'test', params: { noCompile: true, testFiles: ['./test/*.spec.ts'] } },
            ],
        },
    },
};

export default config;
