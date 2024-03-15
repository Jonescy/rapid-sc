//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GreeterUpgradeableV2 is UUPSUpgradeable, OwnableUpgradeable{
    string public greeting;
    // add a new state variable
    string public name;

    function initialize(string memory _greeting, string memory _name) public initializer{
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        name = _name;
    }
    // must implement the _authorizeUpgrade function
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function setName(string memory _name)public {
        console.log("Changing name from '%s' to '%s'", name, _name);
        name = _name;
    }
}
