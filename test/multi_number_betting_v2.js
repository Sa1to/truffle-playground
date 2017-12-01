var MultiNumberBettingV2 = artifacts.require("./MultiNumberBettingV2.sol");
contract('MultiNumberBettingV2', function(accounts) {
  it("should assert true", function() {
    var multi_number_betting_v2;
    return MultiNumberBettingV2.deployed().then(function(instance) {
        multi_number_betting_v2 = instance;
        return multi_number_betting_v2.guess.sendTransaction(1, "szymon");
      })
      .then(function(tx) {
        console.log(tx);
        return multi_number_betting_v2.getLastWinner.call();
      })
      .then(function(winner) {
        console.log(winner);
        assert.equal(winner.valueOf(), "szy", "err");
      })
      .then(function(){
        return multi_number_betting_v2.guess.sendTransaction(2, "s");
      })
      .then(function(tx2){
        console.log(tx2);
        return multi_number_betting_v2.getLastWinner.call();
      })
      .then(function(winner2){
        console.log(winner2);
        assert.equal(winner2.valueOf(), "s**", "err");
      });
  });
});
