module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-named-as-default': 'off',
    'no-restricted-exports': 'off',
    'react/forbid-prop-types': 'off',
    'linebreak-style': 0,
  },
};
