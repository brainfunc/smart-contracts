# Smart Contracts
Smart Contract code for BrainFunc, built on the Ethereum Blockchain & ERC-721 protocol

# Contents

## Smart Contracts
These are available inside the [src](src) folder
- #### BrainpartTokenContract.sol


  NFT contract based on ERC721 standard for Brainpart collectible.
  Represents either of the 13 brain brainparts
  of 4 categories. Details of categories and sub categories available [here](https://github.com/brainfunc/web-app/blob/master/docs/gameplay.md)

- #### NeuronTokenContract.sol


  NFT contract on ERC721 standard for Neuron collectible. Has a fixed strenght of 1.
  Similar to Brainparts, this can be either of the 13 sub categories and 4 categories.
  Details [here](https://github.com/brainfunc/web-app/blob/master/docs/gameplay.md)

- #### Others


  [Open-zeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity) based smart contracts.

## Configuration

config.js contains contract abi's deployment, address and details about contract creator as well as deployment network. We have currently deployed the contracts on the Rinkeby Test Network.

[config.js](config.js) can be directly included in **ReactJS** based projects.

# Author
- Tejas Nikumbh
  - Email: tejnikumbh@gmail.com
  - Skype: tjnikumbh
