/**
 * Specific rules for Cypress e2e tests
 */
module.exports = {
  env: {
    "cypress/globals": true,
  },
  extends: ["plugin:cypress/recommended"],
  plugins: ["cypress"],
  parserOptions: {
    project: "./cypress/tsconfig.json",
  },
  rules: {
    /**
     ** Unicorn Rules
     */
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          snakeCase: true,
        },
      },
    ],
    /**
     ** Cypress Rules
     */
    /**
     * Data selectors are desired because it allows us to test the application
     * by accurately targeting individual components of the application in order to
     * execute an end-to-end (e2e) spec.
     */
    "cypress/require-data-selectors": "warn",
    /**
     * Filenames for Cypress tests follow the snake_case pattern.
     */
  },
};
