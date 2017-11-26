const Reverter = require('./helpers/reverter');
const Asserts = require('./helpers/asserts');
const SimpleTockenCoin = artifacts.require('./SimpleTokenCoin.sol');

contract('MintableToken', function(accounts) {
  const reverter = new Reverter(web3);
  afterEach('revert', reverter.revert);

  const asserts = Asserts(assert);
  const OWNER = accounts[0];
  let token;

  before('setup', () => {
    return SimpleTockenCoin.deployed()
    .then(instance => token = instance)
    .then(reverter.snapshot);
  });

  it('should check name', () => {
    return Promise.resolve()
    .then(() => token.name())
    .then(asserts.equal("Simple Coint Token"));
  });

});
