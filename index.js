const BlockChain = require("./BlockChain");

init = () => {

    const myBlockChain = new BlockChain();
    myBlockChain.addBlock("Block 1");
    myBlockChain.addBlock("Block 2");
    myBlockChain.addBlock("Block 3");
    myBlockChain.addBlock("Block 4");

    console.log("is chain Valid? ", myBlockChain.isChainValid());

    // console.log(JSON.stringify(myBlockChain, null, 4));

    myBlockChain.chain[3].data = "frengegbege";
    myBlockChain.chain[3].calculateHash();
    
    console.log("is chain Valid? ", myBlockChain.isChainValid());

    // console.log(JSON.stringify(myBlockChain, null, 4));
    
}

init();