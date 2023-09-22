import hre, { ethers } from "hardhat";

async function verify(address: any, args: any, options?: any) {
  try {
    // verify the token contract code
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: args,
      ...(options || {}),
    });
  } catch (e) {
      console.log("error verifying contract", e);
  }
}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer balance before:", (await ethers.provider.getBalance(
    deployer.address
  )).toString());
  const NFT = await ethers.getContractFactory("ChainlinkTestNFT");
  const nft = await NFT.deploy(
    deployer.address,
    "Test NFT",
    "TNFT",
    deployer.address,
    100,
    deployer.address,
  );

  await nft.deploymentTransaction()?.wait();
  // sleep for 10 seconds
  console.log('going sweepy bye...')
  let startTime = Date.now();
  while (Date.now() - startTime < 3 * 60 * 1000) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`${elapsedTime} seconds later...`);
  }
  const nftAddress = await nft.getAddress();
  await verify(nftAddress, [
    deployer.address,
    "Test NFT",
    "TNFT",
    deployer.address,
    100,
    deployer.address,
  ], {
    contract: "contracts/ChainlinkTestNFT.sol:ChainlinkTestNFT",
  });
  console.log({
    nft: nftAddress,
  });
  console.log("deployer balance after:", (await ethers.provider.getBalance(
    deployer.address
  )).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
