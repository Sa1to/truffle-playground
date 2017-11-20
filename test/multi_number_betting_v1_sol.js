var MultiNumberBettingV1 = artifacts.require("./MultiNumberBettingV1.sol");
contract('MultiNumberBettingV1', function(accounts) {
  it("should assert true", function() {
    var betting;
    return MultiNumberBettingV1.deployed().then(function(instance){
      betting = instance;
      return betting.guess.call(1);
   }).then(function(correct){
      assert.isTrue(correct);
      return betting.guess.sendTransaction(1);
    }).then(function(){
      return betting.getWin.call();
    }).then(function(wins){
        assert.equal(wins.valueOf(), 1, "Wrong wins count");
    });
  });
});
