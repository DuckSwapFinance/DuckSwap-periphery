const { ethers } = require("hardhat");
const deployed = require('../deployed.js');


const net = process.env.HARDHAT_NETWORK
const v = process.argv

const para = {
    classicFactory: v[2],
}

async function main() {

    const DuckSwapFactory = deployed[net].DuckSwapFactory;
    console.log("Paramters: ");
    console.log('DuckSwapFactory: ', DuckSwapFactory)
    for ( var i in para) { console.log("    " + i + ": " + para[i]); }
  
    console.log('=====================');
    // deploy swap
    const Quoter = await ethers.getContractFactory("UniversalQuoter");
    const quoter = await Quoter.deploy(
        DuckSwapFactory,
        para.classicFactory,
    );
    await quoter.deployed();
    console.log("quoter: ", quoter.address);
}

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
})