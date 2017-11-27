pragma solidity ^0.4.11;

contract MultiNumberBettingV1 {
  uint8[] arr;
  uint loserCount;
  uint winnerCount;

  function MultiNumberBettingV1(uint8 first, uint8 second, uint8 third) {
    require((first >=1 && first <=10) && (second >=1 && second <=10) && (third >=1 && third <=10));
      arr.push(first);
      arr.push(second);
      arr.push(third);
      loserCount = 0;
      winnerCount = 0;
    // constructor
  }

  function guess(uint8 g) returns (bool){
    for(uint8 i = 0; i < arr.length; i++ ) {
      if(g == arr[i]) {
        winnerCount = winnerCount + 1;
        return true;
      }

    }
      loserCount = loserCount +1;
    return false;
  }

  function getWin() constant returns (uint) {
    return winnerCount;
  }

  function getLose() constant returns (uint) {
    return loserCount;
  }

  function totalGuesses() constant returns (uint) {
    return loserCount + winnerCount;
  }

}
