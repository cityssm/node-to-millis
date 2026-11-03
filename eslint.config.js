import eslintConfigCityssm, { defineConfig } from 'eslint-config-cityssm';
const config = defineConfig(...eslintConfigCityssm, {
    files: ['**/*.ts'],
    rules: {
        '@typescript-eslint/no-magic-numbers': 'off'
    }
});
export default config;
