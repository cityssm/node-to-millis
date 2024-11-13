import {
  millisecondsInOneDay,
  millisecondsInOneHour,
  millisecondsInOneMinute,
  millisecondsInOneSecond,
  secondsInOneDay,
  secondsInOneHour,
  secondsInOneMinute
} from './multipliers.js'
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

/**
 * Converts seconds to milliseconds.
 * @param durationSeconds - Duration seconds.
 * @returns Total number of milliseconds.
 */
export function secondsToMillis(durationSeconds: number): number {
  return durationSeconds * millisecondsInOneSecond
}

/**
 * Converts minutes to milliseconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of milliseconds.
 */
export function minutesToMillis(durationMinutes: number): number {
  return durationMinutes * millisecondsInOneMinute
}

/**
 * Converts minutes to seconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of seconds.
 */
export function minutesToSeconds(durationMinutes: number): number {
  return durationMinutes * secondsInOneMinute
}

/**
 * Converts hours to milliseconds.
 * @param durationHours - Duration hours.
 * @returns Total number of milliseconds.
 */
export function hoursToMillis(durationHours: number): number {
  return durationHours * millisecondsInOneHour
}

/**
 * Converts hours to seconds.
 * @param durationHours - Duration hours.
 * @returns Total number of seconds.
 */
export function hoursToSeconds(durationHours: number): number {
  return durationHours * secondsInOneHour
}

/**
 * Converts days to milliseconds.
 * @param durationDays - Duration days.
 * @returns Total number of milliseconds.
 */
export function daysToMillis(durationDays: number): number {
  return durationDays * millisecondsInOneDay
}

/**
 * Converts days to seconds.
 * @param durationDays - Duration days.
 * @returns Total number of seconds.
 */
export function daysToSeconds(durationDays: number): number {
  return durationDays * secondsInOneDay
}

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
