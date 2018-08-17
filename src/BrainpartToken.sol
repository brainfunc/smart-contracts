// TODO:- Needs refactoring
pragma solidity^0.4.24;

import "./ERC721BasicToken.sol";

contract BrainpartToken is ERC721BasicToken {

  struct Brainpart {
    // Keep dna based on timestamp
    string dna;
    string category;
    string subCategory;
    uint256 strength;
    // If we introduce these, also modify the createBrainPart function
    /* string uri;
    string image; */
  }

  Brainpart[] public brainparts;
  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function createBrainpart(
    string birthTimeStamp, string category, string subCategory, uint256 strength, address to_) public {
    require(owner == msg.sender);
    uint id = brainparts.length;
    brainparts.push(Brainpart(birthTimeStamp, category, subCategory, strength));
    _mint(to_, id);
  }

}
