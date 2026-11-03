import eslintConfigCityssm, {
  defineConfig,
  type Config
} from 'eslint-config-cityssm'

const config = defineConfig(...eslintConfigCityssm, {
  files: ['**/*.ts'],
  rules: {
    '@typescript-eslint/no-magic-numbers': 'off'
  }
}) as Config

export default config
