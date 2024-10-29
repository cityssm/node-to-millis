import { type DurationUnit } from './units.js';
/**
 * Converts a duration amount and duration unit into milliseconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of milliseconds.
 */
export default function toMillis(durationAmount: number, durationUnit: DurationUnit | Uppercase<DurationUnit> | Capitalize<DurationUnit>): number;
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
 * Converts hours to milliseconds.
 * @param durationHours - Duration hours.
 * @returns Total number of milliseconds.
 */
export declare function hoursToMillis(durationHours: number): number;
/**
 * Converts days to milliseconds.
 * @param durationDays - Duration days.
 * @returns Total number of milliseconds.
 */
export declare function daysToMillis(durationDays: number): number;
export { durationMultiplierDays, durationMultiplierHours, durationMultiplierMinutes, durationMultiplierSeconds } from './multipliers.js';
export { type DurationUnit, durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
