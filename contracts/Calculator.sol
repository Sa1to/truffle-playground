pragma solidity ^0.4.4;


contract Calculator {
    uint result;

    function Calculator(uint initial) {
        result = initial;
        // constructor
    }

    function getResult() constant returns (uint){
        return result;
    }

    function add(uint toAdd) returns (uint){
        result += toAdd;
    }

    function subtract(uint toSubtract) returns (uint){
        result -= toSubtract;
    }
}
