const whatisthis = require("./compile");

console.log(whatisthis.contracts["ymntest.sol"].YmnContract.evm.bytecode.object);