import { daysToMillis, daysToSeconds, hoursToMillis, hoursToSeconds, millisToSeconds, minutesToMillis, minutesToSeconds, secondsToMillis } from './calculations.js';
import { durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
/**
 * Converts a duration amount and duration unit into milliseconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of milliseconds.
 */
export default function toMillis(durationAmount, durationUnit) {
    const durationUnitLowerCase = durationUnit.toLowerCase();
    /*
     * Days
     */
    if (durationUnitsDays.includes(durationUnitLowerCase)) {
        return daysToMillis(durationAmount);
    }
    /*
     * Hours
     */
    if (durationUnitsHours.includes(durationUnitLowerCase)) {
        return hoursToMillis(durationAmount);
    }
    /*
     * Minutes
     */
    if (durationUnitsMinutes.includes(durationUnitLowerCase)) {
        return minutesToMillis(durationAmount);
    }
    /*
     * Seconds
     */
    if (durationUnitsSeconds.includes(durationUnitLowerCase)) {
        return secondsToMillis(durationAmount);
    }
    /*
     * Milliseconds
     */
    if (durationUnitsMilliseconds.includes(durationUnitLowerCase)) {
        return durationAmount;
    }
    /*
     * Unknown unit, throw error
     */
    throw new Error(`Unknown durationUnit: ${durationUnit}`);
}
/**
 * Converts a duration amount and duration unit into seconds.
 * @param durationAmount - Duration amount.
 * @param durationUnit - Duration unit.
 * @returns Total number of seconds.
 */
export function toSeconds(durationAmount, durationUnit) {
    const durationUnitLowerCase = durationUnit.toLowerCase();
    /*
     * Days
     */
    if (durationUnitsDays.includes(durationUnitLowerCase)) {
        return daysToSeconds(durationAmount);
    }
    /*
     * Hours
     */
    if (durationUnitsHours.includes(durationUnitLowerCase)) {
        return hoursToSeconds(durationAmount);
    }
    /*
     * Minutes
     */
    if (durationUnitsMinutes.includes(durationUnitLowerCase)) {
        return minutesToSeconds(durationAmount);
    }
    /*
     * Seconds
     */
    if (durationUnitsSeconds.includes(durationUnitLowerCase)) {
        return durationAmount;
    }
    /*
     * Milliseconds
     */
    if (durationUnitsMilliseconds.includes(durationUnitLowerCase)) {
        return millisToSeconds(durationAmount);
    }
    /*
     * Unknown unit, throw error
     */
    throw new Error(`Unknown durationUnit: ${durationUnit}`);
}
export { daysToMillis, daysToSeconds, hoursToMillis, hoursToSeconds, minutesToMillis, minutesToSeconds, millisToSeconds, secondsToMillis } from './calculations.js';
export { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
export { durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
