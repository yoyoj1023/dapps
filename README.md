# dapps

這是一個 dApps 實戰專案集合，內含成熟的全端 dApp 應該要有的完整架構與核心功能，同時包含了 Speedrun eth 的挑戰內容與自己的解題答案。主要使用 Scaffold 全端架構開發。

## 項目列表

目前已上傳的 Dapps 與其簡要說明：

1. 01_MetaMaskConnector：介紹 dApp 的最基本範例。可以連結狐狸錢包並顯示代幣餘額。
2. 02_SpeedrunNTF：關於 NTF 的完整 dApp 架構，從合約部屬到前端演示，以及 NTF 挖礦。 
3. 03_SpeedrunDeFiStakeing：關於 DeFi 的架構，演示如何質押、提款、取款、監聽交易事件。
4. 04-speedrun-token-vendor：關於 ERC20 代幣的販賣機，演示代幣的買賣、監聽交易事件。
5. 05-speedrun-dice-game：擲骰子遊戲賭博，猜中可贏得獎金，同時追蹤每位挑戰者下注的歷史事件。
6. 06-speedrun-dex：建造 DEX，提供 ETH 與 ERC20 代幣的交易所。免訂單簿與對手方，流動性永遠可用。
7. 07-scaffold-prices-getter：提供 get prices 頁面，可以查詢 BTC 和 ETH 的即時價格資訊。
8. 08-au-blockexplorer：自製一個以太坊區塊鏈瀏覽器的全端 dApp。

### 環境要求
- Node.js (>= v18.18)
- Yarn (v1 或 v2+)
- Git

### 建立全端框架
1. Scaffold-Eth-2:
   ```bash
   npx create-eth@latest
   ```
2. Scaffold Alchemy:
   ```bash
   npx create-web3-dapp@latest
   ```