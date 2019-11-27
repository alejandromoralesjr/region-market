const regions = require("./_regions.json");
function findStatesInRegion(r) {
  const region = r.toUpperCase();

  // Defining both keys and full names to be checked.
  const mainKeys = Object.keys(regions);
  const fullNames = mainKeys.map(main => ({ [regions[main].fullName]: main }));
  if (region.length <= 4) {
    // Assuming the region provided is the key
    if (regions[region]) {
      const found = regions[region].states;
      return found ? found : region;
    } else {
      return "Region not found";
    }
  } else {
    const foundKey = fullNames.find(obj => Object.keys(obj)[0] === region);
    if (foundKey) {
      return regions[foundKey[region]].states;
    } else {
      return "Region not found";
    }
  }
}
module.exports = findStatesInRegion;
