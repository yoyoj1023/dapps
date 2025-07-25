import { GenericContractsDeclaration } from "~~/utils/scaffold-alchemy/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  1: {
    DAI: {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chainId_",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "src",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "guy",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: true,
          inputs: [
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: true,
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "arg1",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "arg2",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "LogNote",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "src",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "dst",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "guy",
              type: "address",
            },
          ],
          name: "deny",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "src",
              type: "address",
            },
            {
              internalType: "address",
              name: "dst",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "move",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "holder",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expiry",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "allowed",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "pull",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "usr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "push",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "guy",
              type: "address",
            },
          ],
          name: "rely",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "dst",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "src",
              type: "address",
            },
            {
              internalType: "address",
              name: "dst",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wad",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "version",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "wards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
