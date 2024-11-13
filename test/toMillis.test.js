import assert from 'node:assert';
import { describe, it } from 'node:test';
import toMillis, { toSeconds } from '../index.js';
await describe('to-millis', async () => {
    await it('Converts milliseconds to milliseconds', () => {
        const milliseconds = 1234;
        assert.strictEqual(toMillis(milliseconds, 'ms'), milliseconds);
    });
    await it('Converts seconds to milliseconds', () => {
        const seconds = 10;
        const expectedMillis = 10_000;
        assert.strictEqual(toMillis(seconds, 's'), expectedMillis);
    });
    await it('Converts minutes to milliseconds', () => {
        const minutes = 3;
        const expectedMillis = 180_000;
        assert.strictEqual(toMillis(minutes, 'm'), expectedMillis);
    });
    await it('Converts hours to milliseconds', () => {
        const hours = 2;
        const expectedMillis = 7_200_000;
        assert.strictEqual(toMillis(hours, 'h'), expectedMillis);
    });
    await it('Converts days to milliseconds', () => {
        const days = 1;
        const expectedMillis = 86_400_000;
        assert.strictEqual(toMillis(days, 'd'), expectedMillis);
    });
    await it('Handles unknown units', () => {
        try {
            toMillis(1, 'mississippi');
            assert.fail('Mississippi is not a proper unit');
        }
        catch { }
    });
});
await describe('to-millis/toSeconds', async () => {
    await it('Converts milliseconds to seconds', () => {
        const milliseconds = 1000;
        const expectedSeconds = 1;
        assert.strictEqual(toSeconds(milliseconds, 'ms'), expectedSeconds);
    });
    await it('Converts seconds to seconds', () => {
        const seconds = 10;
        assert.strictEqual(toSeconds(seconds, 's'), seconds);
    });
    await it('Converts minutes to seconds', () => {
        const minutes = 3;
        const expectedSeconds = 180;
        assert.strictEqual(toSeconds(minutes, 'm'), expectedSeconds);
    });
    await it('Converts hours to seconds', () => {
        const hours = 2;
        const expectedSeconds = 7200;
        assert.strictEqual(toSeconds(hours, 'h'), expectedSeconds);
    });
    await it('Converts days to seconds', () => {
        const days = 1;
        const expectedSeconds = 86_400;
        assert.strictEqual(toSeconds(days, 'd'), expectedSeconds);
    });
    await it('Handles unknown units', () => {
        try {
            toSeconds(1, 'mississippi');
            assert.fail('Mississippi is not a proper unit');
        }
        catch { }
    });
});
