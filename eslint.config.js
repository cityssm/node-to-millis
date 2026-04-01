import eslintConfigCityssm, { defineConfig } from 'eslint-config-cityssm';
import { cspellWords } from 'eslint-config-cityssm/exports.js';
const config = defineConfig(...eslintConfigCityssm, {
    files: ['**/*.ts'],
    rules: {
        '@cspell/spellchecker': [
            'warn',
            {
                cspell: {
                    words: [...cspellWords, 'milli']
                }
            }
        ],
        '@typescript-eslint/no-magic-numbers': 'off'
    }
});
export default config;
