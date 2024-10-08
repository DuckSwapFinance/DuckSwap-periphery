const { ethers } = require("hardhat");
const deployed = require('../deployed.js');

/*

example: 

HARDHAT_NETWORK='duckTest' node scripts/nfLimOrderManager/deployNfLimOrder.js

*/

const net = process.env.HARDHAT_NETWORK
const v = process.argv
const weth = v[2]

async function main() {
    // deploy nft
    const LimitOrderManager = await ethers.getContractFactory("LimitOrderManager");
    const DuckSwapFactory = deployed[net].DuckSwapFactory;
    const nflom = await LimitOrderManager.deploy(DuckSwapFactory, weth);
    console.log("LimitOrderManager: ", nflom.address);
    await nflom.deployed();
}

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})