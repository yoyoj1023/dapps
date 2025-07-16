# dapps

This is a collection of practical dApps projects, containing complete architecture and core functionalities that mature full-stack dApps should have, including Speedrun Ethereum challenge content and my own solutions. Primarily developed using the Scaffold full-stack architecture.

## Project List

Currently uploaded dApps and their brief descriptions:

1. 01_MetaMaskConnector: The most basic dApp example introduction. Can connect to MetaMask wallet and display token balance.
2. 02_SpeedrunNTF: Complete NFT dApp architecture, from contract deployment to frontend demonstration, and NFT minting.
3. 03_SpeedrunDeFiStaking: DeFi architecture demonstration, showing how to stake, deposit, withdraw, and listen to transaction events.
4. 04-speedrun-token-vendor: ERC20 token vending machine, demonstrating token buying/selling and listening to transaction events.
5. 05-speedrun-dice-game: Dice rolling gambling game, players can win prizes by guessing correctly, while tracking betting history events for each challenger.
6. 06-speedrun-dex: Build a DEX providing exchange between ETH and ERC20 tokens. Order-book free and counterparty-free, with always available liquidity.
7. 07-scaffold-prices-getter: Provides a get prices page where you can query real-time price information for BTC and ETH.
8. 08-au-blockexplorer: Self-built full-stack dApp Ethereum blockchain explorer.
9. 09-sa-ens-searcher: ENS (Ethereum Name Service) searcher tool built with Scaffold-Alchemy. Features ENS name resolution, reverse address lookup, user information display, and ENS avatar loading.

### Environment Requirements
- Node.js (>= v18.18)
- Yarn (v1 or v2+)
- Git

### Setup Full-Stack Framework
1. Scaffold-Eth-2:
   ```bash
   npx create-eth@latest
   ```
2. Scaffold Alchemy:
   ```bash
   npx create-web3-dapp@latest
   ```