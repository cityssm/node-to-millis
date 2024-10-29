/**
 * Acceptable "day" unit values
 */
export declare const durationUnitsDays: readonly ["days", "day", "d"];
/**
 * Acceptable "hour" unit values
 */
export declare const durationUnitsHours: readonly ["hours", "hour", "hr", "h"];
/**
 * Acceptable "minute" unit values
 */
export declare const durationUnitsMinutes: readonly ["minutes", "minute", "min", "m"];
/**
 * Acceptable "second" unit values
 */
export declare const durationUnitsSeconds: readonly ["seconds", "second", "sec", "s"];
/**
 * Acceptable "millisecond" unit values
 */
export declare const durationUnitsMilliseconds: readonly ["milliseconds", "millisecond", "millis", "milli", "ms"];
export type DurationUnit = (typeof durationUnitsDays)[number] | (typeof durationUnitsHours)[number] | (typeof durationUnitsMinutes)[number] | (typeof durationUnitsSeconds)[number] | (typeof durationUnitsMilliseconds)[number];
