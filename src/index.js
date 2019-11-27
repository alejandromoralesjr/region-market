const regions = require("./_regions.json");

// TODO:
// @todo Write findRegionByState
// @body This method should receive a state in full name or XX format and return it's region.
const findRegionByState = require("./findRegionByState");
// TODO:
// @todo Write findStatesInRegion
// @body This method should recieve a region name and return the states in region.
const findStatesInRegion = require("./findStatesInRegion");

console.log("> Starting region-market package");
module.exports = {
  findRegionByState,
  findStatesInRegion
};
