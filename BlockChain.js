const Block = require("./Block");

module.exports = class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, new Date().toString(), "Genesis Block", "");
    }

    getBlockChainLength() {
        return this.chain.length;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    getChain() {
        return this.chain;
    }

    addBlock(data) {
        const currLatestBlockHash = this.chain[this.chain.length - 1].getHash();
        const newBlock = new Block(this.chain.length + 1, new Date().toString(), data, currLatestBlockHash);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if(currBlock.hash !== currBlock.calculateHash() || currBlock.previousHash !== prevBlock.hash) {
                return false;
            }

            return true;
        }
    }
}