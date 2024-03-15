//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GreeterUpgradeable is UUPSUpgradeable, OwnableUpgradeable{
    string public greeting;

    function initialize(string memory _greeting) public initializer{
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
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
}
