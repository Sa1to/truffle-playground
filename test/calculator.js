var Calculator = artifacts.require("./Calculator.sol")
contract('Calculator', function (accounts) {
    it("should assert true", function () {
        var calculator;
        return Calculator.deployed().then(function (instance) {
            calculator = instance;
            return calculator.getResult.call();
        }).then(function (result) {
          assert.equal(result.valueOf(), 10, "Wrong result after initialization");
            calculator.add(10);
            return calculator.getResult.call();
        }).then(function (result) {
            assert.equal(result.valueOf(), 20, "Wrong result after adding");
            calculator.subtract(1);
            return calculator.getResult.call();
        }).then(function (result) {
            assert.equal(result.valueOf(), 19, "Wrong result after subtraction");
        });
    });
});
