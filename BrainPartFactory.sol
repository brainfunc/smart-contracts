pragma solidity ^0.4.19;

contract BrainPartFactory {

    // BrainPartType here is one of the 13 BrainPartTypes of brain BrainParts
    event NewBrainPart(uint brainPartId, string brainPartType, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct BrainPart {
        string brainPartType;
        uint dna;
    }

    BrainPart[] public brainParts;

    function _constructBrainPart(string _brainPartType, uint _dna) private {
        uint id = brainParts.push(BrainPart(_brainPartType, _dna)) - 1;
        // and fire it here
        NewBrainPart(id, _brainPartType, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

    function createRandomBrainPart(string _brainPartType) public {
        uint randDna = _generateRandomDna(_brainPartType);
        _constructBrainPart(_brainPartType, randDna);
    }

}
