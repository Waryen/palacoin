import { Block, Blockchain } from './blockchain';

const palacoin = new Blockchain();

palacoin.addBlock(
  new Block(palacoin.chain.length, new Date().toISOString(), {
    amount: 4,
  }),
);
palacoin.addBlock(
  new Block(palacoin.chain.length, new Date().toISOString(), {
    amount: 10,
  }),
);

console.log(JSON.stringify(palacoin, null, 2)); // print the blockchain
console.log('Is blockchain valid?', palacoin.isChainValid()); // check if the blockchain is valid
