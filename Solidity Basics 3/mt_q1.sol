// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract mt_q1 {
address owner;
uint256 public age;
uint256 public hrsWrk;
uint256 public hrsRte;
uint256 public totSal;

modifier onlyOwner(){
    require(msg.sender == owner, "Only Owner");
    _;
}

modifier valRate(uint256 valRte){
    require(valRte > 0, "The set rate should be greater than 0" );
    _;
}

modifier valHours(uint256 valHrs){
    require(valHrs > 0, "The specified hours must be greater than 0");
    _;
}

constructor () {
    owner = msg.sender;
}

function setAge(uint256 age_i) external {
    age = age_i;
}

function setHrsWrk(uint256 hours_i) external onlyOwner {
    hrsWrk = hours_i;
}

function setRate(uint256 rate_i) external onlyOwner {
    hrsRte = rate_i;
}

function calculateTotSal () external  onlyOwner {
    require(hrsRte > 0 && hrsWrk > 0, "if either the hourly rate or hours worked is 0");
    totSal = hrsWrk * hrsRte;
}































}