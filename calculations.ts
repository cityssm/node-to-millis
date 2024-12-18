import {
  millisecondsInOneDay,
  millisecondsInOneHour,
  millisecondsInOneMinute,
  millisecondsInOneSecond,
  secondsInOneDay,
  secondsInOneHour,
  secondsInOneMinute
} from './multipliers.js'

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
