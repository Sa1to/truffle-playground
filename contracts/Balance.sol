pragma solidity ^0.4.11;

contract Balance {
  mapping (address => uint256) private balances;

  function Balance() {
    // constructor
  }


    modifier costs(uint256 money) {
      require(money == msg.value);
      _;
    }

    function deposit(uint256 inputMoney) payable costs(inputMoney) {
        balances[msg.sender] += inputMoney;
        assert(inputMoney > 10);
    }

    function withdraw(uint amount) returns(uint256) {
      if(balances[msg.sender] >= amount){
        balances[msg.sender] -= amount;
        msg.sender.transfer(amount);
        return amount;
      }
      return 0;
    }

  function chceckBalance() constant returns(uint256){
    return balances[msg.sender];
  }

    function() payable{
      selfdestruct(msg.sender);
      balances[msg.sender] += msg.value;
    }
}
