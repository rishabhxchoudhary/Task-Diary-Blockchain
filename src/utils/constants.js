export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			}
		],
		"name": "removeTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "task",
				"type": "string"
			}
		],
		"name": "setTasks",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTasks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "times",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "tasks",
						"type": "string[]"
					}
				],
				"internalType": "struct TaskDiary.data",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const contractAddress = "0xd658A015A01ABC165500186502048A6EdCA737fF";