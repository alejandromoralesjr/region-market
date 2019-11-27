const findRegionByState = require("./findRegionByState");
const findStatesInRegion = require("./findStatesInRegion");
console.log(findStatesInRegion("SOUTHEAST"));
module.exports = {
  findRegionByState,
  findStatesInRegion
};
