/* eslint-disable sort-keys -- Eslint config files are more easily parsed if keys are in a specific order, not alphabetical */
module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  plugins: ["eslint-comments", "promise", "unicorn"],
  /**
   * Rules are grouped together by the package they are defined in
   * (following the order in which they are extended in the above `extends` property),
   * and then in alphabetical order.
   */
  rules: {
    /**
     ** Stock Eslint Rules
     */
    /**
     * Files should have consistent whitespace.
     */
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    /**
     * The plusplus operator is useful for increasing for-loops interations and should be allowed there.
     */
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    /**
     * Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": "off",
    /**
     * Disabling this rule allows for more modern JS syntax to be used.
     * Reference: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v20.1.0/docs/rules/no-for-loop.md
     */
    "no-restricted-syntax": "off",
    /**
     * The stock eslint `no-unused-vars` rule is disabled in order to differ to `@typescript-eslint/no-unused-vars` configured below.
     */
    "no-unused-vars": "off",
    /**
     * Keys in objects should be in a predictable and consistent order.
     */
    "sort-keys": [
      "error",
      // Enforce properties to be in ascending order
      "asc",
      {
        caseSensitive: true,
        natural: true,
        minKeys: 2,
      },
    ],
    /**
     ** Import Rules (included in Airbnb-Typescript)
     */
    /**
     * Using named exports makes imports more reliable and provides better intelisense within the ide.
     * Reference: https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
     */
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    /**
     ** Eslint Comments Rules
     */
    /**
     * Disabling of eslint rules must include a description
     * as to why that rule must be modified for that scope.
     */
    "eslint-comments/require-description": [
      "error",
      {
        ignore: ["eslint-enable"],
      },
    ],
    /**
     ** Unicorn Rules
     */
    /**
     * Filenames should only be in `camelCase` or `PascalCase`.
     */
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    /**
     * Use of the `null` keyword is an acceptable pattern.
     */
    "unicorn/no-null": "off",
    /**
     * Abbreviations can result in unclear code, they should be disabled by default.
     * However commonly used and understood abbreviations should be allowed and can
     * be configured in the `whitelist` object below.
     */
    "unicorn/prevent-abbreviations": [
      "error",
      {
        checkShorthandImports: false,
        whitelist: {
          props: true,
        },
      },
    ],
  },
};
/* eslint-enable sort-keys */
