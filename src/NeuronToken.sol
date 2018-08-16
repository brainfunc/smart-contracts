pragma solidity ^0.4.24;

import "./ERC721BasicToken.sol";

contract NeuronToken is ERC721BasicToken {

  struct Neuron {
    // Keep dna based on timestamp
    string dna;
    string category;
    string subCategory;
    // If we introduce these, also modify the CreateNeuron function
    /* string uri;
    string image; */
  }

  Neuron[] public neurons;
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function createNeuron(
    string birthTimeStamp, string category, string subCategory, address to_) public {
    require(owner == msg.sender);
    uint id = neurons.length;
    neurons.push(Neuron(birthTimeStamp, category, subCategory));
    _mint(to_, id);
  }

}
