// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;  // The owner is set to the address that deploys the contract
  uint public last_completed_migration;  // Tracks the last migration step completed

  // Modifier to restrict certain functions to the contract owner
  modifier restricted() {
    require(
      msg.sender == owner,  // Only allow the contract's owner to call the function
      "This function is restricted to the contract's owner"
    );
    _;  // Placeholder for function execution
  }

  // This function records the migration step completed (helps in tracking which migration was last completed)
  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
