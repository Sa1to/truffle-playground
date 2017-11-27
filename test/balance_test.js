var Balance = artifacts.require("./Balance.sol");
contract('Balance', function(accounts) {
  it("should assert true", function() {
    var bal;
    return Balance.deployed().then(function(instance) {
      bal = instance;
      //  THIS WILL CAUSE EXCEPTION
      var tx = {
        value: 11
      }
      console.log(tx);
      return bal.deposit.sendTransaction(11, tx);
    }).then(function(transaction) {
      console.log("==========TRANSACTION=============")
      console.log(transaction);
      return bal.chceckBalance.call();
    }).then(function(balance) {
      console.log("==========BALANCE=================");
      console.log(balance);
      console.log("==========REAL BALANCE=================");
      console.log(web3.eth.getBalance(bal.address));

      assert.equal(balance.valueOf(), 11, "err");

      console.log("==========account=================");
      console.log(web3.eth.getBalance(accounts[0]));
      return bal.withdraw.sendTransaction(10);
    }).then(function(tx) {
      console.log("==========tx=================");
      console.log(tx);
      console.log("==========account=================");
      console.log(web3.eth.getBalance(accounts[0]));
      console.log("==========REAL BALANCE=================");
      console.log(web3.eth.getBalance(bal.address));
    });
  });
});
