const findRegionByState = require("./findRegionByState");
const findStatesInRegion = require("./findStatesInRegion");
const getAllRegions = require("./getAllRegions");
console.log(getAllRegions());
module.exports = {
  getAllRegions,
  findRegionByState,
  findStatesInRegion
};
