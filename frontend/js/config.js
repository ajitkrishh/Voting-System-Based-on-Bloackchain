// let debug = true;

// if (debug){

	const web3 = new Web3("http://localhost:9545");
	
	const abi = [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "CandidateList",
			"outputs": [
				{
					"internalType": "address",
					"name": "C_address",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "votes",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "party",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "v_add",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "cid",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_passw",
					"type": "string"
				}
			],
			"name": "Vote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "v_add",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "partyname",
					"type": "string"
				}
			],
			"name": "addCandidatetoCandidateList",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "address2index",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "ballot",
			"outputs": [
				{
					"internalType": "bool",
					"name": "is_voting_started",
					"type": "bool"
				},
				{
					"internalType": "uint256",
					"name": "totalVotes",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "voter_add",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "aadh",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "_role",
					"type": "uint8"
				},
				{
					"internalType": "string",
					"name": "_passw",
					"type": "string"
				}
			],
			"name": "createVoter",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "admin_add",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "add",
					"type": "address"
				}
			],
			"name": "disable_a_Voter",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "admin_add",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "add",
					"type": "address"
				}
			],
			"name": "enable_a_Voter",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "admin_add",
					"type": "address"
				}
			],
			"name": "finishVoting",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getCandidateList",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "C_address",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "votes",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "party",
							"type": "string"
						}
					],
					"internalType": "struct first.Candidate[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getStats",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "C_address",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "votes",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "party",
							"type": "string"
						}
					],
					"internalType": "struct first.Candidate[]",
					"name": "",
					"type": "tuple[]"
				},
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "admin_add",
					"type": "address"
				}
			],
			"name": "startVoting",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "voterlist",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "voter_address",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "voted",
					"type": "bool"
				},
				{
					"internalType": "uint256",
					"name": "aadhar",
					"type": "uint256"
				},
				{
					"internalType": "enum first.Role",
					"name": "role",
					"type": "uint8"
				},
				{
					"internalType": "bool",
					"name": "is_valid",
					"type": "bool"
				},
				{
					"internalType": "bytes32",
					"name": "passw",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	// 0x222d8E6ACc1a083aFF64fbB9fbB8b464d85d81AC
	const contractAddress = "0x8F1b5EF92Eb5b368313De1DfB014051Cf663d748";
	const myContract = new web3.eth.Contract(abi, contractAddress);
	
	let defaultAccount;
	let Accounts;
	
	web3.eth.getAccounts().then(accounts => {
		Accounts = accounts;
		defaultAccount = accounts[0];
	});
// }
