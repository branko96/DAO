/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// Possible network values
const TEST_NETWORK = "TEST_NETWORK";
const LOCAL_NETWORK = "LOCAL_NETWORK";

// By default network is set to local, change it to TEST_NETWORK to make a switch
const NETWORK = TEST_NETWORK;

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const PROYECT_ID = process.env.PROYECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log(PROYECT_ID, PRIVATE_KEY);

let networks = {};
if (NETWORK == TEST_NETWORK) {
  networks = {
/*    test_network: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },*/
    goerli: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
      networkId: 3,
      chainId: 3,
      gas: 6612388, // Gas limit used for deploys
      gasPrice: 2700000000000,
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 3,
    },
  };
}

module.exports = {
  solidity: "0.8.13",
  networks: networks,
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
