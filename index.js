import { durationMultiplierDays, durationMultiplierHours, durationMultiplierMinutes, durationMultiplierSeconds } from './multipliers.js';
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
 * Converts seconds to milliseconds.
 * @param durationSeconds - Duration seconds.
 * @returns Total number of milliseconds.
 */
export function secondsToMillis(durationSeconds) {
    return durationSeconds * durationMultiplierSeconds;
}
/**
 * Converts minutes to milliseconds.
 * @param durationMinutes - Duration minutes.
 * @returns Total number of milliseconds.
 */
export function minutesToMillis(durationMinutes) {
    return durationMinutes * durationMultiplierMinutes;
}
/**
 * Converts hours to milliseconds.
 * @param durationHours - Duration hours.
 * @returns Total number of milliseconds.
 */
export function hoursToMillis(durationHours) {
    return durationHours * durationMultiplierHours;
}
/**
 * Converts days to milliseconds.
 * @param durationDays - Duration days.
 * @returns Total number of milliseconds.
 */
export function daysToMillis(durationDays) {
    return durationDays * durationMultiplierDays;
}
export { durationMultiplierDays, durationMultiplierHours, durationMultiplierMinutes, durationMultiplierSeconds } from './multipliers.js';
export { durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from './units.js';
