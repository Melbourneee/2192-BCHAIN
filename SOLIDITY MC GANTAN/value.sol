//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract value{
    bool public b = true;
    uint public u = 123;


    int public i = -123;

    int public minInt = type(int).min;
    int public maxInt = type(int).max;
    address public addr = 0x093583D2b5A82367C4C54DDB9402A57b61eCF0FF;
}