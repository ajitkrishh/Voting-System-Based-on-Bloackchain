const ballot = artifacts.require("ballot");

module.exports = function (deployer) {
  deployer.deploy(ballot);
};
