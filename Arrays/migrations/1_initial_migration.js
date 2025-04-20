const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  // Deploy the Migrations contract to the blockchain
  deployer.deploy(Migrations);
};
