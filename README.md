# To Millis

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/to-millis)](https://www.npmjs.com/package/@cityssm/to-millis)
[![Maintainability](https://api.codeclimate.com/v1/badges/f54c62ed55fd7808d702/maintainability)](https://codeclimate.com/github/cityssm/node-to-millis/maintainability)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-to-millis.svg/?label=active+issues&show_trend=true&token=vdC-xiKDTyi_oc8iVTIQMGG3)](https://app.deepsource.com/gh/cityssm/node-to-millis/)
[![codecov](https://codecov.io/gh/cityssm/node-to-millis/graph/badge.svg?token=TT03DLHCEQ)](https://codecov.io/gh/cityssm/node-to-millis)
[![Coverage Testing](https://github.com/cityssm/node-to-millis/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/node-to-millis/actions/workflows/coverage.yml)

Increases the readability of millisecond values in JavaScript.

Handy when used with functions like `setTimeout()` and `setInterval()` to provide easy-to-read durations,
or when adding to times represented in milliseconds.

## Installation

```sh
npm install @cityssm/to-millis
```

## Basic Usage

```javascript
import toMillis from '@cityssm/to-millis'

/*
 * With toMillis 👍
 */

setInterval(dailyTask, toMillis(1, 'day'))

const twoHoursFromNow = Date.now() + toMillis(2, 'hours')

/*
 * Without toMillis,
 * you may expand the calculation to make the amount more readable. 😕
 */

setInterval(dailyTask, 1 * 24 * 60 * 60 * 1000)

const twoHoursFromNow = Date.now() + 2 * 60 * 60 * 1000
```

## More Exports

Functions without units:

- `daysToMillis(durationDays)`
- `hoursToMillis(durationHours)`
- `minutesToMillis(durationMinutes)`
- `secondsToMillis(durationSeconds)`

Arrays of acceptable units:

- `durationUnitsDays`
- `durationUnitsHours`
- `durationUnitsMinutes`
- `durationUnitsSeconds`
- `durationUnitsMilliseconds`

Multipliers used for calculations:

- `durationMultiplierDays`
- `durationMultiplierHours`
- `durationMultiplierMinutes`
- `durationMultiplierSeconds`
