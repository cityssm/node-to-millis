import eslintConfigCityssm, {
  type Config,
  cspellWords,
  tseslint
} from 'eslint-config-cityssm'

const config = tseslint.config(...eslintConfigCityssm, {
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
}) as Config

export default config
