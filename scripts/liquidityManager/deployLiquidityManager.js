const { ethers } = require("hardhat");
const deployed = require('../deployed.js');

/*

example: 

HARDHAT_NETWORK='duckTest' node scripts/nftLiquidityManager/deployNFLM.js

*/

const net = process.env.HARDHAT_NETWORK
const v = process.argv
const weth = v[2]

async function main() {
    // deploy nft
    const LiquidityManager = await ethers.getContractFactory("LiquidityManager");
    const DuckSwapFactory = deployed[net].DuckSwapFactory;
    nflm = await LiquidityManager.deploy(DuckSwapFactory, weth);
    console.log("LiquidityManager: ", nflm.address);
    await nflm.deployed();
}

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})