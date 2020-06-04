module.exports = {
  arrowParens: "always",
  jsxSingleQuote: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  // eslint-disable-next-line sort-keys -- The overrides key makes more sense to be at the end of the configuration.
  overrides: [
    {
      files: [".huskyrc", ".commitlintrc"],
      options: { parser: "json" },
    },
  ],
};
