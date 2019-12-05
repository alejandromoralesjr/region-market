const rawRegions = require("./_regions.json");
const regions = Object.keys(rawRegions).map(function(key) {
  return rawRegions[key];
});
function getAllRegions() {
  return regions.map((region, index) => ({
    region: region.fullName,
    regionKey: region.key,
    states: region.states
      ? region.states.map(s => `${s.short}`).join(", ")
      : region.fullName
  }));
}

module.exports = getAllRegions;
