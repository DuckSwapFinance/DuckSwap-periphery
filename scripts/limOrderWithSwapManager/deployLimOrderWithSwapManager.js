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
    const LimitOrderWithSwapManager = await ethers.getContractFactory("LimitOrderWithSwapManager");
    const DuckSwapFactory = deployed[net].DuckSwapFactory;
    const manager = await LimitOrderWithSwapManager.deploy(DuckSwapFactory, weth);
    console.log("LimitOrderWithSwapManager: ", manager.address);
    await manager.deployed();
}

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})