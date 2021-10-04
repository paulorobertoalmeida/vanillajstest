module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': [2, 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-unused-vars': [0, 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-undef': 0,
    'no-eval': 0,
    'class-methods-use-this': 0

  }
};
