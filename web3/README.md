# Web3 Contract Setup

This folder adds an optional smart-contract layer for the project.

## Contract
- `RewardTaskApp.sol`
  - `grantXP(user, amount, reason)`
  - `setRewardCost(rewardId, cost)`
  - `claimReward(rewardId)`

> `rewardId` should be a `bytes32` value (for example: `keccak256("daily-login-bonus")`).

## Local deploy (Hardhat)
1. `cd web3`
2. `npm install`
3. `npm run compile`
4. In one terminal: `npm run node`
5. In another terminal: `npm run deploy:local`

After deploy, the contract ID (address) is printed to terminal and saved in:
- `web3/deployed-address.json`

## Sepolia deploy
1. `cd web3`
2. `cp .env.example .env`
3. Fill in `SEPOLIA_RPC_URL` and `PRIVATE_KEY`
4. `npm install`
5. `npm run deploy:sepolia`

The deployed contract ID is printed and also stored in `deployed-address.json`.
