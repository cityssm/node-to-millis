import {
  daysToMillis,
  daysToSeconds,
  hoursToMillis,
  hoursToSeconds,
  minutesToMillis,
  minutesToSeconds,
  secondsToMillis
} from './calculations.js'
import { millisecondsInOneSecond } from './multipliers.js'
import {
  type DurationUnit,
  durationUnitsDays,
  durationUnitsHours,
  durationUnitsMilliseconds,
  durationUnitsMinutes,
  durationUnitsSeconds
} from './units.js'

/**
 * Converts a duration amount and duration unit into milliseconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of milliseconds.
 */
export default function toMillis(
  durationAmount: number,
  durationUnit:
    | DurationUnit
    | Uppercase<DurationUnit>
    | Capitalize<DurationUnit>
): number {
  const durationUnitLowerCase = durationUnit.toLowerCase() as DurationUnit

  /*
   * Days
   */

  if (
    (durationUnitsDays as unknown as string[]).includes(durationUnitLowerCase)
  ) {
    return daysToMillis(durationAmount)
  }

  /*
   * Hours
   */

  if (
    (durationUnitsHours as unknown as string[]).includes(durationUnitLowerCase)
  ) {
    return hoursToMillis(durationAmount)
  }

  /*
   * Minutes
   */

  if (
    (durationUnitsMinutes as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return minutesToMillis(durationAmount)
  }

  /*
   * Seconds
   */

  if (
    (durationUnitsSeconds as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return secondsToMillis(durationAmount)
  }

  /*
   * Milliseconds
   */

  if (
    (durationUnitsMilliseconds as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return durationAmount
  }

  /*
   * Unknown unit, throw error
   */

  throw new Error(`Unknown durationUnit: ${durationUnit}`)
}

/**
 * Converts a duration amount and duration unit into seconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of seconds.
 */
export function toSeconds(
  durationAmount: number,
  durationUnit:
    | DurationUnit
    | Uppercase<DurationUnit>
    | Capitalize<DurationUnit>
): number {
  const durationUnitLowerCase = durationUnit.toLowerCase() as DurationUnit

  /*
   * Days
   */

  if (
    (durationUnitsDays as unknown as string[]).includes(durationUnitLowerCase)
  ) {
    return daysToSeconds(durationAmount)
  }

  /*
   * Hours
   */

  if (
    (durationUnitsHours as unknown as string[]).includes(durationUnitLowerCase)
  ) {
    return hoursToSeconds(durationAmount)
  }

  /*
   * Minutes
   */

  if (
    (durationUnitsMinutes as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return minutesToSeconds(durationAmount)
  }

  /*
   * Seconds
   */

  if (
    (durationUnitsSeconds as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return durationAmount
  }

  /*
   * Milliseconds
   */

  if (
    (durationUnitsMilliseconds as unknown as string[]).includes(
      durationUnitLowerCase
    )
  ) {
    return durationAmount / millisecondsInOneSecond
  }

  /*
   * Unknown unit, throw error
   */

  throw new Error(`Unknown durationUnit: ${durationUnit}`)
}

export {
  daysToMillis,
  daysToSeconds,
  hoursToMillis,
  hoursToSeconds,
  minutesToMillis,
  minutesToSeconds,
  secondsToMillis
} from './calculations.js'

export {
  millisecondsInOneDay,
  millisecondsInOneHour,
  millisecondsInOneMinute,
  millisecondsInOneSecond,
  secondsInOneDay,
  secondsInOneHour,
  secondsInOneMinute
} from './multipliers.js'

export {
  type DurationUnit,
  durationUnitsDays,
  durationUnitsHours,
  durationUnitsMilliseconds,
  durationUnitsMinutes,
  durationUnitsSeconds
} from './units.js'
