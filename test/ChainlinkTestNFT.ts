import { expect } from "chai";
import { ethers } from "hardhat";

describe("ChainlinkTestNFT", function () {
  it("should deploy NFT contract", async function () {
    const [deployer] = await ethers.getSigners();
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

    // Add your assertions here
    expect(await nft.getAddress()).to.not.equal(0);
  });
});