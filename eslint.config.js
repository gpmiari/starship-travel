const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/**', 'coverage/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-vars': ['error', { args: 'after-used' }],
      eqeqeq: ['error', 'always'],
    },
  },
];
