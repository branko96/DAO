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
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const PROYECT_ID = process.env.PROYECT_ID;
const PRIVATE_KEY = "c78e50829f548fe24eddef4af74ee0dcee3c7c77221eb9010f11448807f6cfa3";
console.log(PROYECT_ID, PRIVATE_KEY);

let networks = {};
if (NETWORK == TEST_NETWORK) {
  networks = {
/*    test_network: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },*/
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 5,
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
