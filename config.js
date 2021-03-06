export default config = {
  meta: {
    "creator": "0xe0e8ae3c99784bdaac966ae0a0f1e0ac87d43384",
    "network": "Rinkeby"
  },
  contract: {
    neuron: {
      address: "0x54899a3ef414f4f07dc646d4d637078de4bfec9d",
      abi: [{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "_interfaceId",
      				"type": "bytes4"
      			}
      		],
      		"name": "supportsInterface",
      		"outputs": [
      			{
      				"name": "",
      				"type": "bool"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "getApproved",
      		"outputs": [
      			{
      				"name": "",
      				"type": "address"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "approve",
      		"outputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [],
      		"name": "InterfaceId_ERC165",
      		"outputs": [
      			{
      				"name": "",
      				"type": "bytes4"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "_from",
      				"type": "address"
      			},
      			{
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "transferFrom",
      		"outputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "_from",
      				"type": "address"
      			},
      			{
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "safeTransferFrom",
      		"outputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "",
      				"type": "uint256"
      			}
      		],
      		"name": "neurons",
      		"outputs": [
      			{
      				"name": "dna",
      				"type": "string"
      			},
      			{
      				"name": "category",
      				"type": "string"
      			},
      			{
      				"name": "subCategory",
      				"type": "string"
      			},
      			{
      				"name": "uri",
      				"type": "string"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "ownerOf",
      		"outputs": [
      			{
      				"name": "",
      				"type": "address"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "_owner",
      				"type": "address"
      			}
      		],
      		"name": "balanceOf",
      		"outputs": [
      			{
      				"name": "",
      				"type": "uint256"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [],
      		"name": "owner",
      		"outputs": [
      			{
      				"name": "",
      				"type": "address"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"name": "_approved",
      				"type": "bool"
      			}
      		],
      		"name": "setApprovalForAll",
      		"outputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "_from",
      				"type": "address"
      			},
      			{
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"name": "_tokenId",
      				"type": "uint256"
      			},
      			{
      				"name": "_data",
      				"type": "bytes"
      			}
      		],
      		"name": "safeTransferFrom",
      		"outputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "_owner",
      				"type": "address"
      			},
      			{
      				"name": "_operator",
      				"type": "address"
      			}
      		],
      		"name": "isApprovedForAll",
      		"outputs": [
      			{
      				"name": "",
      				"type": "bool"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"constant": false,
      		"inputs": [
      			{
      				"name": "birthTimeStamp",
      				"type": "string"
      			},
      			{
      				"name": "category",
      				"type": "string"
      			},
      			{
      				"name": "subCategory",
      				"type": "string"
      			},
      			{
      				"name": "uri",
      				"type": "string"
      			},
      			{
      				"name": "to_",
      				"type": "address"
      			}
      		],
      		"name": "createNeuron",
      		"outputs": [],
      		"payable": true,
      		"stateMutability": "payable",
      		"type": "function"
      	},
      	{
      		"constant": true,
      		"inputs": [
      			{
      				"name": "id",
      				"type": "uint256"
      			}
      		],
      		"name": "getJSONUriForNeuron",
      		"outputs": [
      			{
      				"name": "",
      				"type": "string"
      			}
      		],
      		"payable": false,
      		"stateMutability": "view",
      		"type": "function"
      	},
      	{
      		"inputs": [],
      		"payable": false,
      		"stateMutability": "nonpayable",
      		"type": "constructor"
      	},
      	{
      		"anonymous": false,
      		"inputs": [
      			{
      				"indexed": true,
      				"name": "_from",
      				"type": "address"
      			},
      			{
      				"indexed": true,
      				"name": "_to",
      				"type": "address"
      			},
      			{
      				"indexed": true,
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "Transfer",
      		"type": "event"
      	},
      	{
      		"anonymous": false,
      		"inputs": [
      			{
      				"indexed": true,
      				"name": "_owner",
      				"type": "address"
      			},
      			{
      				"indexed": true,
      				"name": "_approved",
      				"type": "address"
      			},
      			{
      				"indexed": true,
      				"name": "_tokenId",
      				"type": "uint256"
      			}
      		],
      		"name": "Approval",
      		"type": "event"
      	},
      	{
      		"anonymous": false,
      		"inputs": [
      			{
      				"indexed": true,
      				"name": "_owner",
      				"type": "address"
      			},
      			{
      				"indexed": true,
      				"name": "_operator",
      				"type": "address"
      			},
      			{
      				"indexed": false,
      				"name": "_approved",
      				"type": "bool"
      			}
      		],
      		"name": "ApprovalForAll",
      		"type": "event"
      	}]
    } // end of neuron object
  } // end of contract object
} // end of config object
