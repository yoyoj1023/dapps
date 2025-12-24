# 🏗 Scaffold-ETH Challenge 12: Zero-Knowledge Voting System (ZK Voting)

## 🚩 Challenge Overview

In this challenge, we built an anonymous voting system based on zero-knowledge proofs, allowing users to vote while completely protecting their privacy without revealing their identity or voting choices.

![Sample Image](https://github.com/yoyoj1023/dapps/blob/main/12-speedrun-zk-voting/sample1.png)

![Sample Image](https://github.com/yoyoj1023/dapps/blob/main/12-speedrun-zk-voting/sample2.png)

- Deployed Site: [Website Link](https://165-speedrun-zk-voting.vercel.app/)
- Deployed Contract: [Verified Contract Address](https://sepolia.etherscan.io/address/0x3F449913872AE2142cDf30e35Cd684c9AA8fa3bd)


## ⚔️ Implementation Guide

### 1. Understanding Zero-Knowledge Proof Concepts

First, you need to understand the core concepts of Zero-Knowledge Proof:
- **Prover**: The party who wants to prove that a statement is true
- **Verifier**: The party who verifies the proof
- **Zero-Knowledge**: Reveals nothing other than the truth of the statement

### 2. Understanding the Noir Circuit

This project uses the Noir language to write zero-knowledge circuits, primarily verifying:
- **Nullifier Verification**: Ensures each vote can only be used once
- **Commitment Verification**: Verifies the voter's identity commitment
- **Merkle Tree Verification**: Proves the voter is in the registered voter tree
- **Vote Binding**: Ensures the voting choice (yes/no) is correctly recorded

### 3. Understanding the Voting Contract

Core functions of the `Voting.sol` contract:
- **Register**: Adds commitments to the Merkle Tree
- **Vote**: Performs anonymous voting using zero-knowledge proofs
- **Allowlist Management (addVoters)**: Manages addresses with voting rights
- **Statistics Query (getVotingData)**: Views voting results

### 4. Frontend Integration

Integrates zero-knowledge proof generation with on-chain verification, providing a user-friendly experience:
- Generate private information (nullifier and secret)
- Generate zero-knowledge proofs locally
- Submit proofs to the chain for verification

## 🔍 Key Solutions

### 1. **Poseidon Hash Function**
   - A hash function optimized for zero-knowledge proofs
   - Used to generate commitment: `hash(nullifier, secret)`
   - Used to generate nullifierHash: `hash(nullifier)`

### 2. **Incremental Merkle Tree (LeanIMT)**
   - Stores commitments of all registered voters
   - Proves that a commitment exists in the tree
   - The tree root serves as a public input for verification

### 3. **Nullifier Mechanism**
   - Derives nullifierHash from the private nullifier
   - Records all used nullifierHashes on-chain
   - Prevents double voting while protecting privacy

### 4. **Zero-Knowledge Circuit Logic**
   ```
   Private inputs: nullifier, secret, index, siblings
   Public inputs: nullifierHash, root, vote, depth
   
   Verification flow:
   1. hash(nullifier) == nullifierHash
   2. commitment = hash(nullifier, secret)
   3. merkle_verify(commitment, index, siblings) == root
   4. vote ∈ {0, 1}
   ```

### 5. **Security Considerations**
   - Each nullifierHash can only be used once
   - Merkle root must match the current tree's root
   - Failed proof verification will revert the transaction

## 💡 Main Features

### 1. Allowlist Registration
- Contract owner can batch add addresses with voting rights
- Only allowed addresses can register

### 2. Commitment Registration
- Users generate random nullifier and secret
- Calculate commitment = hash(nullifier, secret)
- Add commitment to Merkle Tree
- **Important**: nullifier and secret must be securely stored locally

### 3. Zero-Knowledge Proof Generation
- Generate proofs locally in the browser
- Uses Noir circuits and Barretenberg proof system
- The proving process does not leak any private information

### 4. Anonymous Voting
- Submit zero-knowledge proofs to the chain
- Contract verifies proof validity
- Records nullifierHash to prevent double voting
- Voting results are public, but voter identity remains private

### 5. Statistics Query
- View total votes (yes/no)
- View Merkle Tree status
- Cannot track specific addresses' voting choices

## 📝 Usage Instructions

### Environment Setup

```bash
# Install dependencies
yarn install

# Start local chain in one terminal
yarn chain

# Deploy contracts in another terminal
yarn deploy

# Start frontend
yarn start
```

### Voting Process

#### Step 1: Obtain Voting Rights
1. Ensure your address is on the allowlist (added by contract owner)
2. Connect your wallet to the application

#### Step 2: Registration
1. Click "Generate Secrets" to generate nullifier and secret
2. **Important**: Back up the displayed private information to a secure place
3. The system will automatically calculate and display the commitment
4. Click "Register" button to add commitment to Merkle Tree
5. Wait for transaction confirmation

#### Step 3: Generate Zero-Knowledge Proof
1. Confirm your nullifier and secret are correctly loaded
2. Select your voting choice (Yes/No)
3. Click "Generate Proof" button
4. Wait for proof generation (may take a few seconds)
5. Proof will be automatically saved locally

#### Step 4: Submit Vote
1. Confirm proof has been successfully generated
2. Click "Submit Vote" button
3. Confirm transaction
4. Wait for on-chain verification to complete

#### Step 5: View Results
1. View voting results in the statistics area
2. Your voting choice remains completely private
3. Only total vote counts are public

### Admin Functions

#### Add Voters
```bash
# Use contract interaction functionality on Debug page
# Call addVoters function
# Parameters:
# - voters: address array
# - statuses: boolean array (true = allowed to vote)
```

## 📚 Learning Points

### Zero-Knowledge Proof Concepts
- What zero-knowledge proofs are and why they're important
- Differences between ZK-SNARK and ZK-STARK
- Noir language and circuit design

### Cryptographic Principles
- Advantages of Poseidon hash function
- Applications of Merkle Trees in blockchain
- How the nullifier mechanism prevents duplication

### Privacy Protection
- How to achieve privacy on a transparent blockchain
- Trade-offs between on-chain verification and off-chain computation
- Balance between anonymity and auditability

### Noir Circuit Development
- Concept of circuit constraints
- Public inputs vs private inputs
- Proof generation and verification flow

### Smart Contract Integration
- How to verify ZK proofs in Solidity
- Gas optimization considerations
- Security best practices

## 🧪 Testing

```bash
cd packages/hardhat
yarn test
```

Tests cover:
- Registration process
- Proof generation and verification
- Preventing double voting
- Merkle Tree updates
- Permission control

## 🔧 Tech Stack

- **Frontend**: Next.js, TypeScript, RainbowKit, Wagmi
- **Smart Contracts**: Solidity, Hardhat
- **Zero-Knowledge Proofs**: Noir, Barretenberg
- **Cryptography**: Poseidon Hash, LeanIMT (Incremental Merkle Tree)
- **Testing**: Mocha, Chai

## 🛠 Advanced Development

### Custom Circuits

Edit `packages/circuits/src/main.nr` to modify proof logic:

```rust
// Add more constraints
// Modify public/private inputs
// Adjust Merkle Tree depth
```

Recompile the circuit:
```bash
cd packages/circuits
nargo compile
```

### Modify Voting Options

The current system supports binary choice (Yes/No), which can be expanded to multiple choices:
1. Modify the circuit to support more options
2. Update contract's vote counting logic
3. Adjust frontend UI

### Add Voting Deadline

Add timestamp check in the contract:
```solidity
uint256 public votingDeadline;
modifier beforeDeadline() {
    require(block.timestamp < votingDeadline, "Voting ended");
    _;
}
```

## 🐛 FAQ

### Q: What happens if I lose my nullifier and secret?
A: You will not be able to vote. This information must be securely stored locally and cannot be recovered from the chain.

### Q: Why does proof generation take so long?
A: Zero-knowledge proof generation is computationally intensive. Larger circuits and deeper Merkle Trees require more time.

### Q: Can I change my vote after casting it?
A: No. Once a nullifierHash is used, that nullifier cannot be used to vote again.

### Q: Can the contract owner see my voting choice?
A: No. Zero-knowledge proofs ensure that no one except yourself knows your voting choice.

### Q: How many voters can the system support?
A: Theoretically, it can support 2^16 (65536) voters, limited by the Merkle Tree depth setting.

## 💬 Support

If you have any questions or suggestions about this zero-knowledge voting system, please ask in the [Speedrun Ethereum Discord](https://discord.gg/N7JMnYGu).

---

This challenge is provided by [Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth) and [SpeedRunEthereum.com](https://speedrunethereum.com).

## 📖 References

- [Noir Documentation](https://noir-lang.org/)
- [ZK-Kit Libraries](https://github.com/privacy-scaling-explorations/zk-kit)
- [Introduction to Zero-Knowledge Proofs](https://z.cash/technology/zksnarks/)
- [Poseidon Hash](https://www.poseidon-hash.info/)
- [LeanIMT](https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/lean-imt)

