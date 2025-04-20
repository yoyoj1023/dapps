# 02_TokenVendor

## 專案說明
這個專案是我在挑戰 Speedrun Ethereum 第2關: 🏵 Challenge #2: Token Vendor 中所開發的，採用 Scaffold eth 2 全端架構。專案整合了鏈上 (Hardhat) 與前端 (React + Next.js) 技術，特色包含錢包連結、連接至 sepolia 測試網路，以及與已部署的 Token Vendor 合約互動，使用者可以購買/出售代幣，並監聽相關交易事件。

![示例圖片](https://github.com/yoyoj1023/dapps/blob/main/04-speedrun-token-vendor/sample.png)

- 部署網址： [網站連結](https://51-token-vendor.vercel.app/)
- 部署合約： [已驗證合約地址](https://sepolia-optimism.etherscan.io/address/0x202837b4dbc23941ff96784133e3245bc232172d#code)

## 主要功能
- 購買代幣 (Buy)
- 出售代幣 (Sell)
- 提款合約餘額 (Withdraw)
- 代幣餘額查詢
- 交易事件監聽與顯示

## 使用說明

### 環境要求
- Node.js (>= v18.18)
- Yarn (v1 或 v2+)
- Git

### 開發流程
1. 啟動本地區塊鏈：
   ```bash
   yarn chain
   ```
2. 在另一個終端部署智能合約：
   ```bash
   yarn deploy
   ```
3. 啟動前端應用：
   ```bash
   yarn start
   ```
4. 瀏覽器打開 [http://localhost:3000](http://localhost:3000) 以預覽應用效果。

### 測試網部署與配置
- 將 Hardhat 的 `defaultNetwork` 設置為 `sepolia`（參見 `packages/hardhat/hardhat.config.ts`）。
- 生成 deployer address 並檢查錢包餘額：
  ```bash
  yarn generate
  yarn account
  ```
- 部署到 sepolia 網路：
  ```bash
  yarn deploy --network sepolia
  ```
- 前端配置更新（參見 `packages/nextjs/scaffold.config.ts`）：
  - 修改 `targetNetworks` 為 `chains.sepolia`。
  - 若需要在非本地域啟用 Burner Wallet，將 `onlyLocalBurnerWallet` 設置為 `false`。

### 部署至生產環境
1. 登錄 Vercel：
   ```bash
   yarn vercel:login
   ```
2. 部署前端：
   ```bash
   yarn vercel
   ```
   若要部署至正式環境，請加上 `--prod` 參數。

### 三方服務配置
記得配置您自己的 API 金鑰，避免使用預設值：
- 在 `.env` 或 `.env.local` 文件中設定 `ALCHEMY_API_KEY` 與 `ETHERSCAN_API_KEY`。
