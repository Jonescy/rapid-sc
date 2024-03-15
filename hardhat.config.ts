import "hardhat-deploy";
import "hardhat-watcher";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@openzeppelin/hardhat-upgrades";

const INFURA_API_KEY = "248341ea5db74a47ae14a7209a3378da";
const config = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.20",
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
  networks: {
    hardhat: {},
    mainnet: {
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
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
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
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      heco: process.env.ETHERSCAN_API_KEY,
      bsc: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.ETHERSCAN_API_KEY,
      hecoTestnet: process.env.ETHERSCAN_API_KEY,
      bscTestnet: process.env.ETHERSCAN_API_KEY,
    }
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
        {command: 'compile', params: {quiet: true}},
        {command: 'test', params: {noCompile: true, testFiles: ['./test/*.spec.ts']}},
      ],
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v6",
  }
};

export default config;
