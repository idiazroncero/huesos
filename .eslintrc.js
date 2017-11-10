module.exports = {
  root: true, // IMPORTANT!! This is to avoid eslint for travelling all parents
  env:{
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends : 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules:{
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
  },
};