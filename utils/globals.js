export const ABI = [
  {
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "usersActiveX3Levels",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balances",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "LAST_LEVEL",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "idToAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastUserId",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "userIds",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "user", type: "address" }],
    name: "isUserExists",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "REGISTRATION_FEE",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "referrerAddress", type: "address" }],
    name: "registrationExt",
    outputs: [{ name: "", type: "string" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "usersX3Matrix",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "address[]" },
      { name: "", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "usersX6Matrix",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "address[]" },
      { name: "", type: "address[]" },
      { name: "", type: "bool" },
      { name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "contractDeployTime",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "users",
    outputs: [
      { name: "id", type: "uint256" },
      { name: "referrer", type: "address" },
      { name: "partnersCount", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "usersActiveX6Levels",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "matrix", type: "uint8" },
      { name: "level", type: "uint8" },
    ],
    name: "buyNewLevel",
    outputs: [{ name: "", type: "string" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "findFreeX6Referrer",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint8" }],
    name: "levelPrice",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "level", type: "uint8" },
    ],
    name: "findFreeX3Referrer",
    outputs: [{ name: "", type: "address" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "user", type: "address" }],
    name: "viewLevels",
    outputs: [
      { name: "x3Levels", type: "bool[12]" },
      { name: "x6Levels", type: "bool[12]" },
      { name: "x3LastTrue", type: "uint8" },
      { name: "x6LastTrue", type: "uint8" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "donerAddress", type: "address" },
      { name: "referalActivatorAddress", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: true, name: "referrer", type: "address" },
      { indexed: true, name: "userId", type: "uint256" },
      { indexed: false, name: "referrerId", type: "uint256" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "Registration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: true, name: "currentReferrer", type: "address" },
      { indexed: true, name: "caller", type: "address" },
      { indexed: false, name: "matrix", type: "uint8" },
      { indexed: false, name: "level", type: "uint8" },
    ],
    name: "Reinvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: true, name: "referrer", type: "address" },
      { indexed: false, name: "matrix", type: "uint8" },
      { indexed: false, name: "level", type: "uint8" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: true, name: "referrer", type: "address" },
      { indexed: false, name: "matrix", type: "uint8" },
      { indexed: false, name: "level", type: "uint8" },
      { indexed: false, name: "place", type: "uint8" },
    ],
    name: "NewUserPlace",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "receiver", type: "address" },
      { indexed: true, name: "from", type: "address" },
      { indexed: false, name: "matrix", type: "uint8" },
      { indexed: false, name: "level", type: "uint8" },
    ],
    name: "MissedEthReceive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "receiver", type: "address" },
      { indexed: false, name: "matrix", type: "uint8" },
      { indexed: false, name: "level", type: "uint8" },
    ],
    name: "SentExtraEthDividends",
    type: "event",
  },
];

export const ADDRESS = "TKvPgLfBPn7bMVU6zh6G3FbeC6NqVJu4sJ";

export const OWNER = "TX35eDYTBPbWqbJmZxvtj3VC7NRKbM39rp";

export const BASE_URL = "https://us1.autoxify.com/";

// const utils = {
//     tronWeb: false,
//     contract: false,
// TSf1qpac1ZBChozR5Hd1Cx15GkS5zUMoNR
//     async setTronWeb(tronWeb) {
//         this.tronWeb = tronWeb;
//         this.contract = await tronWeb.contract().at(contractAddress)
//     },

// };

// export default utils;
