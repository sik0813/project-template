module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.css', '*.scss', '*.json'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
