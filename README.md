# node-to-millis

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
