// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract YmnContract {
    uint16 secret;

    constructor(uint16 initialSecret) {
        secret = initialSecret;
    }

    function getSecret() public view returns(uint16) {
        return secret;
    }

    function setSecret(uint16 newsecret) public {
        secret = newsecret;
    }
}