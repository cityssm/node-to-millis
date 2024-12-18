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
export { daysToMillis, daysToSeconds, hoursToMillis, hoursToSeconds, minutesToMillis, minutesToSeconds, secondsToMillis } from './calculations.js';
export { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
export { type DurationUnit, durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
