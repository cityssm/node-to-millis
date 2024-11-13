import { type DurationUnit } from './units.js';
/**
 * Converts a duration amount and duration unit into milliseconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of milliseconds.
 */
export default function toMillis(durationAmount: number, durationUnit: DurationUnit | Uppercase<DurationUnit> | Capitalize<DurationUnit>): number;
/**
 * Converts a duration amount and duration unit into seconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of seconds.
 */
export declare function toSeconds(durationAmount: number, durationUnit: DurationUnit | Uppercase<DurationUnit> | Capitalize<DurationUnit>): number;
/**
 * Converts seconds to milliseconds.
 * @param durationSeconds - Duration seconds.
 * @returns Total number of milliseconds.
 */
export declare function secondsToMillis(durationSeconds: number): number;
/**
 * Converts minutes to milliseconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of milliseconds.
 */
export declare function minutesToMillis(durationMinutes: number): number;
/**
 * Converts minutes to seconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of seconds.
 */
export declare function minutesToSeconds(durationMinutes: number): number;
/**
 * Converts hours to milliseconds.
 * @param durationHours - Duration hours.
 * @returns Total number of milliseconds.
 */
export declare function hoursToMillis(durationHours: number): number;
/**
 * Converts hours to seconds.
 * @param durationHours - Duration hours.
 * @returns Total number of seconds.
 */
export declare function hoursToSeconds(durationHours: number): number;
/**
 * Converts days to milliseconds.
 * @param durationDays - Duration days.
 * @returns Total number of milliseconds.
 */
export declare function daysToMillis(durationDays: number): number;
/**
 * Converts days to seconds.
 * @param durationDays - Duration days.
 * @returns Total number of seconds.
 */
export declare function daysToSeconds(durationDays: number): number;
export { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
export { type DurationUnit, durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
