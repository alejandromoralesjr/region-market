const regions = require("./_regions.json");
Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

function findRegionByState(s) {
  const tt = Object.keys(regions)
    .map(k => {
      return regions[k].states
        ? regions[k].states
            .map(s => ({ ...s, region: k, regionFull: regions[k].fullName }))
            .flat()
        : false;
    })
    .flat()
    .filter(f => f);
  const found = tt.find(t => t.short === s || t.full === s);
  return found
    ? { region: found.region, fullName: found.regionFull }
    : "State not found";
}
module.exports = findRegionByState;
