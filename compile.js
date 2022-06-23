const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname,'contracts','ymntest.sol');
const source = fs.readFileSync(contractPath, 'utf8');


const input = {
  language: 'Solidity',
  sources: {
    'ymntest.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};
 
module.exports = JSON.parse(solc.compile(JSON.stringify(input)));