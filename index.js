import { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
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
        return durationAmount / millisecondsInOneSecond;
    }
    /*
     * Unknown unit, throw error
     */
    throw new Error(`Unknown durationUnit: ${durationUnit}`);
}
/**
 * Converts seconds to milliseconds.
 * @param durationSeconds - Duration seconds.
 * @returns Total number of milliseconds.
 */
export function secondsToMillis(durationSeconds) {
    return durationSeconds * millisecondsInOneSecond;
}
/**
 * Converts minutes to milliseconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of milliseconds.
 */
export function minutesToMillis(durationMinutes) {
    return durationMinutes * millisecondsInOneMinute;
}
/**
 * Converts minutes to seconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of seconds.
 */
export function minutesToSeconds(durationMinutes) {
    return durationMinutes * secondsInOneMinute;
}
/**
 * Converts hours to milliseconds.
 * @param durationHours - Duration hours.
 * @returns Total number of milliseconds.
 */
export function hoursToMillis(durationHours) {
    return durationHours * millisecondsInOneHour;
}
/**
 * Converts hours to seconds.
 * @param durationHours - Duration hours.
 * @returns Total number of seconds.
 */
export function hoursToSeconds(durationHours) {
    return durationHours * secondsInOneHour;
}
/**
 * Converts days to milliseconds.
 * @param durationDays - Duration days.
 * @returns Total number of milliseconds.
 */
export function daysToMillis(durationDays) {
    return durationDays * millisecondsInOneDay;
}
/**
 * Converts days to seconds.
 * @param durationDays - Duration days.
 * @returns Total number of seconds.
 */
export function daysToSeconds(durationDays) {
    return durationDays * secondsInOneDay;
}
export { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
export { durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
