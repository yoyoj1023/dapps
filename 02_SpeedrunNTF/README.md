# 02_SpeedrunNTF

## 專案說明
這個專案是我在挑戰 Challenge #0: 🎟 Simple NFT Example 中所開發的，採用 Scaffold eth 2 全端架構。專案整合了鏈上 (Hardhat) 與前端 (React + Next.js) 技術，特色包含錢包連結、連接至 sepolia 測試網路，以及對已部署的 NFT 合約進行挖礦並將 NFT 發送到錢包地址以供預覽。

## 主要功能
- 錢包連結與管理（支援 MetaMask 與燒錢包）
- sepolia 測試網路支援
- NFT 挖礦與轉帳：調用智能合約 mint 功能生成 NFT
- NFT 預覽與展示於前端應用

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
   若要部署至預覽 URL（或正式 URL，加上 --prod），請參照 Vercel 部署步驟。

### 三方服務配置
記得配置您自己的 API 金鑰，避免使用預設值：
- 在 `.env` 或 `.env.local` 文件中設定 `ALCHEMY_API_KEY` 與 `ETHERSCAN_API_KEY`。

