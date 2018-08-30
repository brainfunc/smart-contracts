pragma solidity ^0.4.24;

import "./ERC721BasicToken.sol";

contract NeuronToken is ERC721BasicToken {

  struct Neuron {
    // Keep dna based on timestamp
    string dna;
    string category;
    string subCategory;
    string uri;
  }

  Neuron[] public neurons;
  address public owner;

  constructor() public {
      owner = msg.sender;
  }

  function totalSupply()
  public view returns(uint256) {
    return neurons.length;
  }

  function createNeuron(
    string birthTimeStamp, string category,
    string subCategory, string uri, address to_)
    public onlyOwner payable {
    // Making sure we are being paid apt amount
    // uint256 price = getPrice("category");
    //require(msg.value >= price);
    // Adding collectible to contract set
    uint id = neurons.length;
    neurons.push(Neuron(birthTimeStamp, category, subCategory, uri));
    // Minting a crypto collectible
    _mint(to_, id);
    // Transferring excess back to sender
    // if (msg.value > price) {
    //   uint256 priceExcess = msg.value - price;
    //   msg.sender.transfer(priceExcess);
    // }
  }

  // Get Neuron uri for neuron of a particular id
  function getNeuron(uint256 id)
  public view returns(string) {
    return neurons[id].uri;
  }

  function withdraw(uint256 amount) onlyOwner
  public returns(bool){
    address contractAddress = this;
    require(amount <= contractAddress.balance);
    owner.transfer(amount);
    return true;
  }

 // Makes sure only owner has access
  modifier onlyOwner() {
      require(msg.sender == owner);
      _;
  }

  // Utility function to get price according to category
  function getPrice(string category) private pure returns (uint256) {
      if(keccak256(abi.encodePacked(category)) == keccak256("cerebrum")) {
        return 0.04 ether;
      } else if(keccak256(abi.encodePacked(category)) ==
      keccak256(abi.encodePacked("cerebellum"))) {
        return 0.03 ether;
      } else if(keccak256(abi.encodePacked(category)) ==
      keccak256(abi.encodePacked("brainstem"))) {
        return 0.02 ether;
      } else if(keccak256(abi.encodePacked(category)) ==
      keccak256(abi.encodePacked("arterial"))) {
        return 0.01 ether;
      }
      return 0.00 ether;
  }
}
