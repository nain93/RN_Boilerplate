module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 'warn',

    // 'react-native/no-unused-styles': 'warn',
    // 'react/jsx-filename-extension': 'off',
    // 'react/prop-types': 'off',
    // 'comma-dangle': 'off',
    // 'padded-blocks': 'off',
    // 'arrow-body-style': 'off',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'react-native/split-platform-components': 0,
    // 'react-native/no-color-literals': 0,
    // 'react-native/no-single-element-style-arrays': 2,
    // 'prettier/prettier': 0,
    // 'eol-last': 0,
    // quotes: 0,
    // 'no-trailing-spaces': 0,
    // curly: 0,
    // 'no-mixed-spaces-and-tabs': 0,
  },
};
