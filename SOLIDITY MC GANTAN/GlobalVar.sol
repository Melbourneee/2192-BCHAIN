//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract GlobalVariables{
    function globalVars() external view returns  (address, uint,uint, uint, uint) {
        address sender = msg.sender;
        uint timestamp =block.timestamp;
        uint blockNum = block.number;
        uint gas = tx.gasprice;
        uint limit = block.gaslimit;
        return (sender, timestamp, blockNum, gas, limit);
        
    }
}

//these are the variables that you can call and will give you a predefined values and for some global variables it will update as long as you click it like the timestamp