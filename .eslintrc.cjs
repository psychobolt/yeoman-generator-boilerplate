module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: ['airbnb-base', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'jest'],
  rules: {
    'import/no-webpack-loader-syntax': 0,
    'import/extensions': ['error', 'ignorePackages'],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-restricted-exports': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': ['error', { consistent: true }],
    'no-bitwise': ['error', { int32Hint: true }],
    'no-mixed-operators': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
  env: {
    'jest/globals': true,
  },
};
