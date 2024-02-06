//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LocalVariables {
    uint public i;
    bool public b;
    address public myAddress;

    function foo() external {
        uint x = 123;
        bool f = false;

        x += 456;
        f = true;
        i = 256;
        b = true;
        myAddress = address(1);
    }

}

//when you click the foo it doesnt return some value but it changes the value of ohters from true to false to zero to 256