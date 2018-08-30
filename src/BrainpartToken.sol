pragma solidity ^0.4.24;

import "./ERC721BasicToken.sol";

contract BrainpartToken is ERC721BasicToken {

  struct Brainpart {
    // Keep dna based on timestamp
    string dna;
    string category;
    string subCategory;
    string strength;
    string uri;
  }

  Brainpart[] public brainparts;
  address public owner;

  constructor() public {
      owner = msg.sender;
  }

  function totalSupply()
  public view returns(uint256) {
    return brainparts.length;
  }

  function createBrainpart(
    string birthTimeStamp, string category,
    string subCategory,string strength, string uri, address to_)
    public onlyOwner payable {
    // Making sure we are being paid apt amount
    // uint256 price = getPrice("category");
    //require(msg.value >= price);
    // Adding collectible to contract set
    uint id = brainparts.length;
    brainparts.push(Brainpart(birthTimeStamp, category, subCategory, strength, uri));
    // Minting a crypto collectible
    _mint(to_, id);
    // Transferring excess back to sender
    // if (msg.value > price) {
    //   uint256 priceExcess = msg.value - price;
    //   msg.sender.transfer(priceExcess);
    // }
  }



  // Get brainpart uri for brainpart of a particular id
  function getBrainpartUri(uint256 id)
  public view returns(string) {
    return brainparts[id].uri;
  }

  function getBrainpartStrength(uint256 id)
  public view returns(string) {
    return brainparts[id].strength;
  }

  function setStrength(string newStrength, uint256 id)
  public onlyOwner {
      brainparts[id].strength = newStrength;
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
