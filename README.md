# region-market

A package to provide region market information based on a particular state or to provide states information for a particular region.

## Methods

### `findRegionByState(arg)`

- Argument: **Full name** or **2-letter format** for state.
- Returns an `object` with region information

```javascript
const region1 = findRegionByState("TX");
// Returns { region: "CEN", fullName: "CENTRAL" }
const region2 = findRegionByState("Florida");
// Returns { region: "SE", fullName: "SOUTHEAST" }
```

### `findStatesInRegion(arg)`

- Argument: **Full name** or **short name** for region.
- Returns an `array` with states information

```javascript
const region1 = findStatesInRegion("CEN");
// Returns [
// { short: 'IA', full: 'Iowa' },
// { short: 'KS', full: 'Kansas' },
// { short: 'MN', full: 'Minnesota' },
// { short: 'ND', full: 'North Dakota' },
// { short: 'NE', full: 'Nebraska' },
// { short: 'OK', full: 'Oklahoma' },
// { short: 'SD', full: 'South Dakota' },
// { short: 'TX', full: 'Texas' }
// ]

const region2 = findStatesInRegion("SOUTHEAST");
// Returns [
// { short: 'AL', full: 'Alabama' },
// { short: 'AR', full: 'Arkansas' },
// { short: 'FL', full: 'Florida' },
// { short: 'GA', full: 'Georgia' },
// { short: 'KY', full: 'Kentucky' },
// { short: 'LA', full: 'Louisiana' },
// { short: 'MS', full: 'Mississippi' },
// { short: 'TN', full: 'Tennessee' }
// ]
```
