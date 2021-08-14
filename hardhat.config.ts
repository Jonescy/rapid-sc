import {HardhatUserConfig, task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
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
                    }
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
        ]
    },
    networks: {
        hardhat: {},
        ethmain: {
            url: `wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}`,
        },

        rinkeby: {
            url: `wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}`,
            chainId: 4,
            // accounts: [process.env.PVK.toString()],
        },
        hecotest: {
            url: "wss://ws-testnet.huobichain.com",
            chainId: 256,
            accounts: {
                mnemonic: process.env.MNO2,
            },
        },
        hecomain: {
            url: "wss://ws-mainnet-node.huobichain.com",
            chainId: 128,
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
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./abis"
    },
    mocha: {
        timeout: 20000,
    }
};
export default config;
