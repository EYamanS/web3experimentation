const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


// create a web3 instance on local provider via ganache (ganache.provider() is a local eth test network basically.)
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {

    // Get a list of all accounts
    accounts =  await web3.eth.getAccounts();


    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Initial Message'] })
        .send({from: accounts[0], gas: '1000000'});
});


describe('Inbox Test', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has initial message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,'Initial Message');
    });

    it('can update message', async () => {
        await inbox.methods.setMessage('new message').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message,'new message');
    });
});