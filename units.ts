/**
 * Acceptable "day" unit values
 */
export const durationUnitsDays = ['days', 'day', 'd'] as const

/**
 * Acceptable "hour" unit values
 */
export const durationUnitsHours = ['hours', 'hour', 'h'] as const

/**
 * Acceptable "minute" unit values
 */
export const durationUnitsMinutes = ['minutes', 'minute', 'min', 'm'] as const

/**
 * Acceptable "second" unit values
 */
export const durationUnitsSeconds = ['seconds', 'second', 'sec', 's'] as const

/**
 * Acceptable "millisecond" unit values
 */
export const durationUnitsMilliseconds = [
  'milliseconds',
  'millisecond',
  'millis',
  'milli',
  'ms'
] as const

export type DurationUnit =
  | (typeof durationUnitsDays)[number]
  | (typeof durationUnitsHours)[number]
  | (typeof durationUnitsMinutes)[number]
  | (typeof durationUnitsSeconds)[number]
  | (typeof durationUnitsMilliseconds)[number]
