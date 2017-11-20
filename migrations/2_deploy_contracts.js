var Calculator = artifacts.require("./Calculator.sol");
var Szymon = artifacts.require("./Szymon.sol");
var MultiNumberBettingV1 = artifacts.require("./MultiNumberBettingV1.sol");
module.exports = function(deployer) {
  deployer.deploy(MultiNumberBettingV1,1 ,2 ,3);
  deployer.deploy(Calculator, 10);
  deployer.deploy(Szymon);
};
