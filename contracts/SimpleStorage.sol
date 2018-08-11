pragma solidity ^0.4.17;

contract SimpleStorage {
  uint myVariable;

  constructor(uint _startingValue) public{
    myVariable = _startingValue;
  }

  function set(uint _x) public {
    myVariable = _x;
  }

  function get() constant public returns (uint) {
    return myVariable;
  }
}