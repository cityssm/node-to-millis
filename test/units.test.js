import assert from 'node:assert';
import { describe, it } from 'node:test';
import { durationUnitsDays, durationUnitsHours, durationUnitsMilliseconds, durationUnitsMinutes, durationUnitsSeconds } from '../index.js';
await describe('to-millis/units', async () => {
    const allUnits = [
        ...durationUnitsDays,
        ...durationUnitsHours,
        ...durationUnitsMinutes,
        ...durationUnitsSeconds,
        ...durationUnitsMilliseconds
    ];
    await it('Declares all units in lower case', () => {
        for (const unit of allUnits) {
            assert.strictEqual(unit.toLowerCase(), unit);
        }
    });
    await it('Has no duplicated units', () => {
        assert.strictEqual(allUnits.length, new Set(allUnits).size);
    });
});
