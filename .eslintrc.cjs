module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    quotes: 'off',
    'spaced-comment': 'off',
    'import/no-absolute-path': 'off',
    'space-before-function-paren': 'off',
    'no-unused-expressions': 'off',
  },
}
