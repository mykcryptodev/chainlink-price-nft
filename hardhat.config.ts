import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const etherscanKey = process.env.ETHERSCAN_KEY;
const polygonscanKey = process.env.POLYGONSCAN_KEY;
const bscscanKey = process.env.BSCSCAN_KEY;
const baseKey = process.env.BASE_KEY;

const config: HardhatUserConfig = {
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${privateKey}`],
      chainId: 5,
    },
    base: {
      url: 'https://base.rpc.thirdweb.com',
      chainId: 8453,
      accounts: [`${privateKey}`],
      gasPrice: 1000000000,
    },
    baseGoerli: {
      url: "https://goerli.base.org",
      chainId: 84531,
      accounts: [`${privateKey}`],
      gasPrice: 1000000000,
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  etherscan: {
    apiKey: {
      goerli: etherscanKey || "",
      mainnet: etherscanKey || "",
      polygonMumbai: polygonscanKey || "",
      bscTestnet: bscscanKey || "",
      bsc: bscscanKey || "",
      base: baseKey || "",
      ['base-goerli']: baseKey || "",
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      }
    ]
  },
};

export default config;
