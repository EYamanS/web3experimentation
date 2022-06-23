const HDWalletProvider = require('@truffle/hdwallet-provider');
const contractName = "ymntest.sol"
const Web3 = require('web3');
const compiled = require("./compile");
const abi = compiled.contracts[contractName].YmnContract.abi;
const bytecode = compiled.contracts[contractName].YmnContract.evm.bytecode.object


const provider = new HDWalletProvider(
    'vocal quality gaze violin design spider travel arm toe narrow child clarify',
    'https://rinkeby.infura.io/v3/af31216fb0614152901cdc8d7e384b32'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);

    const result = await new web3.eth.Contract(abi)
    .deploy({data: bytecode, arguments: [306]})
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);


    provider.engine.stop();
};
deploy();