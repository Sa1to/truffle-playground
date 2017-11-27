var MultiNumberBettingV1 = artifacts.require("./MultiNumberBettingV1.sol");
contract('MultiNumberBettingV1', function(accounts) {
  it("should assert true", function() {
    var betting;
    return MultiNumberBettingV1.deployed().then(function(instance) {
        betting = instance;
        console.log('1');
        return betting.totalGuesses.call();
      })
      .then(function(guesses) {
        console.log('2');
        assert.equal(guesses.valueOf(), 0, "err");
        return betting.guess.call(1);
      })
      .then(function(correct) {
        console.log('3');
        assert.isTrue(correct);
        return betting.totalGuesses.call();
      })
      .then(function(guesses) {
        console.log('4');
        assert.equal(guesses.valueOf(), 0, "err");
        return betting.guess.sendTransaction(1);
      })
      .then(function(tx) {
        console.log('5');
        return betting.getWin.call();
      })
      .then(function(wins) {
        console.log('6');
        assert.equal(wins.valueOf(), 1, "Wrong wins count");
        return betting.totalGuesses.call();
      })
      .then(function(guesses) {
        console.log('7');
        assert.equal(guesses.valueOf(), 1, "err");
      });
  });
});
