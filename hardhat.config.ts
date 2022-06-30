import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-deploy'

const INFURA_API_KEY = '248341ea5db74a47ae14a7209a3378da'
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  typechain: {
    outDir: './src/config/contracts/types',
    target: 'ethers-v5'
  },
  networks: {
    hardhat: {},
    ethmain: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 1,
      accounts: [`0x${process.env.PVK}`]
    },

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 4,
      accounts: [`0x${process.env.PVK}`]
    },
    hecotest: {
      url: 'https://http-testnet.hecochain.com',
      chainId: 256,
      accounts: [`0x${process.env.PVK}`],
      gas: 2100000,
      gasPrice: 8000000000
    },
    hecomain: {
      url: 'https://http-mainnet.hecochain.com',
      chainId: 128,
      accounts: [`0x${process.env.PVK}`]
    },
    bsctest: {
      url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
      accounts: [`0x${process.env.PVK}`]
    },
    bscmain: {
      url: 'https://bsc-dataseed4.ninicoin.io/',
      chainId: 56,
      accounts: [`0x${process.env.PVK2}`]
    }
  },
  namedAccounts: {
    deployer: 0
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
    deployments: './deployments'
  },
  mocha: {
    timeout: 0
  },
  etherscan: {
    apiKey: {
      hecotest: 'IXJE5M8T1Q8TKTHR8DPV6R7D1FNVSUYRID',
      hecomain: 'IXJE5M8T1Q8TKTHR8DPV6R7D1FNVSUYRID',
      bscmain: 'J5YQDEZWE4RDNF66F4SDX6V7RATP7SWS4V',
      bsctest: 'J5YQDEZWE4RDNF66F4SDX6V7RATP7SWS4V'
    },
    customChains: [
      {
        network: 'hecotest',
        chainId: 256,
        urls: {
          apiURL: 'https://api-testnet.hecoinfo.com/api',
          browserURL: 'https://testnet.hecoinfo.com'
        }
      },
      {
        network: 'hecomain',
        chainId: 128,
        urls: {
          apiURL: 'https://api.hecoinfo.com/api',
          browserURL: 'https://hecoinfo.com'
        }
      },
      {
        network: 'bscmain',
        chainId: 56,
        urls: {
          apiURL: 'https://api.bscscan.com/api',
          browserURL: 'https://bscscan.com'
        }
      },
      {
        network: 'bsctest',
        chainId: 97,
        urls: {
          apiURL: 'https://api-testnet.bscscan.com/api',
          browserURL: 'https://testnet.bscscan.com'
        }
      }
    ]
  }
}

export default config
