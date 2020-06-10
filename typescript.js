module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
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
        prefix: ["is", "should", "has", "can", "did", "will", "do"],
      },
      /**
       * Function parameters should only be camelCase
       * Example: myFunctionParameter
       */
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
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
            suffix: ["Type", "Map"],
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
