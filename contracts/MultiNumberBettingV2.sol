pragma solidity ^0.4.11;

contract MultiNumberBettingV2 {
  uint8[] arr;
  uint loserCount;
  uint winnerCount;
  string winner;

  function MultiNumberBettingV2(uint8 first, uint8 second, uint8 third) {
    require((first >=1 && first <=10) && (second >=1 && second <=10) && (third >=1 && third <=10));
      arr.push(first);
      arr.push(second);
      arr.push(third);
      loserCount = 0;
      winnerCount = 0;
      winner = "***";
    // constructor
  }


  function getLastWinner() constant returns(string){
    bytes memory b = bytes(winner);
    bytes memory winnerBytes = new bytes(3);
    for(uint8 i = 0; i < 3; i++){
      winnerBytes[i] = b[i];
    }
    return string(winnerBytes);
    /*string memory winnerInitials = string(winnerBytes);*/
  }

  function guess(uint8 g, string name) returns (bool){
    for(uint8 i = 0; i < arr.length; i++ ) {
      if(g == arr[i]) {
        winnerCount = winnerCount + 1;
        if(bytes(name).length < 3){
          bytes memory nameExtended = new bytes(3);
          bytes memory byteName = bytes(name);

          for(uint8 j = 0; j <= byteName.length-1; j++){
            nameExtended[j] = byteName[j];
          }

          for(uint8 k = uint8(byteName.length);  k< 3; k++){
            nameExtended[k] = '*';
          }
          winner = string(nameExtended);
        }
        else {
          winner = name;
        }
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
