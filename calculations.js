import { millisecondsInOneDay, millisecondsInOneHour, millisecondsInOneMinute, millisecondsInOneSecond, secondsInOneDay, secondsInOneHour, secondsInOneMinute } from './multipliers.js';
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
