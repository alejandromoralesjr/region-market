# region-market

A package to provide region market information based on a particular state or to provide states information for a particular region.

#### Installing

```bash
npm install region-market
```

#### Usage

```javascript
const regionMarket = require("region-market");
import {
  findRegionByState,
  findStatesInRegion,
  getAllRegions
} from "region-market";
```

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

### `getAllRegions()`

- Argument: none
- Returns an `array` with all regions

```javascript
const regions = getAllRegions();
// Returns [
  // {
  //   region: 'USA ALL',
  //   regionKey: 'USA',
  //   states: 'USA ALL'
  // },
  // {
  //   region: 'CANADA ALL',
  //   regionKey: 'CAN',
  //   states: 'CANADA ALL'
  // },
  // {
  //   region: 'MEXICO ALL',
  //   regionKey: 'MEX',
  //   states: 'MEXICO ALL'
  // },
  // {
  //   region: 'NORTHEAST',
  //   regionKey: 'NE',
  //   states: 'CT, DE, MA, ME, NH, NJ, NY, PA, VT'
  // },
  // {
  //   region: 'SOUTHEAST',
  //   regionKey: 'SE',
  //   states: 'AL, AR, FL, GA, KY, LA, MS, TN'
  // },
  // {
  //   region: 'MID-ATLANTIC',
  //   regionKey: 'MATL',
  //   states: 'MD, NC, SC, VA, WV'
  // },
  // {
  //   region: 'CENTRAL',
  //   regionKey: 'CEN',
  //   states: 'IA, KS, MN, ND, NE, OK, SD, TX'
  // },
  // {
  //   region: 'MIDWEST',
  //   regionKey: 'MDW',
  //   states: 'IL, IN, MI, MO, OH, WI'
  // },
  // {
  //   region: 'SOUTHWEST',
  //   regionKey: 'SW',
  //   states: 'AZ, NM'
  // },
  // {
  //   region: 'MOUNTAIN WEST',
  //   regionKey: 'MTW',
  //   states: 'CO, ID, MT, UT, WV'
  // },
  // {
  //   region: 'PACIFIC COAST',
  //   regionKey: 'PAC',
  //   states: 'CA, NV, OR, WA'
  // }
]
```
