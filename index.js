/* eslint-disable sort-keys -- Eslint config files are more easily parsed if keys are in a specific order, not alphabetical */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "eslint-comments", "promise", "unicorn"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
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
     ** Typescript-Eslint Rules
     */
    /**
     * Indentaion is handled by prettier.
     */
    "@typescript-eslint/indent": "off",
    /**
     * Consistent naming conventions should be enforced, and different conventions should be allowed in different use cases.
     */
    "@typescript-eslint/naming-convention": [
      "error",
      /**
       * Variables containing a boolean must require a prefix to help indicate what the value is representing.
       * Example: canHazCheeseburger
       */
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      /**
       * Function parameters should only be camelCase
       * Example: myFunctionParameter
       */
      {
        selector: "parameter",
        format: ["camelCase"],
      },
    ],
    /**
     * Unused variables should throw an error,
     * however if underscores or a leading underscore is used it is to indicate that variable is intentionally unused.
     */
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_?([^_]+)?$",
      },
    ],
    "@typescript-eslint/quotes": "off",
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
  overrides: [
    /**
     * Specific rules for the Store folder
     */
    {
      files: ["store/**/*"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          /**
           * TypeScript types defined in the store should be in PascalCase and be followed by the word Type.
           * Example: SomeCustomType
           */
          {
            selector: "typeLike",
            format: ["PascalCase"],
            suffix: ["Type"],
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
          /**
           * TypeScript interfaces defined in the store should be in PascalCase prefixed by a capital I.
           * Example: ISomeCustomObject
           */
          {
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
        ],
      },
    },
  ],
};
/* eslint-enable sort-keys */
