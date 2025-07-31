import { type DurationUnit } from './units.js';
/**
 * Converts a duration amount and duration unit into milliseconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of milliseconds.
 * @throws {Error} If the duration unit is unknown.
 */
export default function toMillis(durationAmount: number, durationUnit: Capitalize<DurationUnit> | DurationUnit | Uppercase<DurationUnit>): number;
/**
 * Converts a duration amount and duration unit into seconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of seconds.
 * @throws {Error} If the duration unit is unknown.
 */
export declare function toSeconds(durationAmount: number, durationUnit: Capitalize<DurationUnit> | DurationUnit | Uppercase<DurationUnit>): number;
export { daysToMillis, daysToSeconds, hoursToMillis, hoursToSeconds, millisToSeconds, minutesToMillis, minutesToSeconds, secondsToMillis } from './calculations.js';
export { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
export { type DurationUnit, durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
