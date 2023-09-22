// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Drop.sol";

interface ChainlinkPriceOracle {
  function latestAnswer() external view returns (int256);
}

contract ChainlinkTestNFT is ERC721Drop {
  // base mainnet
  // address constant CHAINLINK_PRICE = 0x17CAb8FE31E32f08326e5E27412894e49B0f9D65;
  // goerli testnet
  address constant CHAINLINK_PRICE = 0x48731cF7e84dc94C5f84577882c14Be11a5B7456;
  
  constructor(
    address _defaultAdmin,
    string memory _name,
    string memory _symbol,
    address _royaltyRecipient,
    uint128 _royaltyBps,
    address _primarySaleRecipient
  )
    ERC721Drop(
      _defaultAdmin,
      _name,
      _symbol,
      _royaltyRecipient,
      _royaltyBps,
      _primarySaleRecipient
    )
  {}

  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    uint256 price = uint256(ChainlinkPriceOracle(CHAINLINK_PRICE).latestAnswer());
    if (price > 700000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/0";
    }
    if (price > 690000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/1";
    }
    if (price > 680000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/2";
    }
    if (price > 670000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/3";
    }
    if (price > 660000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/4";
    }
    if (price > 650000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/5";
    }
    if (price > 640000000) {
      return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/6";
    }
    return "ipfs://QmZ1i3AqaL48AhwZLwKcm8C7ByKCUa9WfEroPyrFmGTx6a/7";
  }
  
}