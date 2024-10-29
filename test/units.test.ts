import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  durationUnitsDays,
  durationUnitsHours,
  durationUnitsMilliseconds,
  durationUnitsMinutes,
  durationUnitsSeconds
} from '../index.js'

await describe('to-millis/units', async () => {
  await it('Declares all units in lower case', () => {
    const units = [
      ...durationUnitsDays,
      ...durationUnitsHours,
      ...durationUnitsMinutes,
      ...durationUnitsSeconds,
      ...durationUnitsMilliseconds
    ]

    for (const unit of units) {
      assert.strictEqual(unit.toLowerCase(), unit)
    }
  })
})
