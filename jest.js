/**
 * Specific rules for Jest unit testing files
 */
module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: ["plugin:jest/all"],
  plugins: ["jest", "eslint-plugin-testing-library"],
  rules: {
    /**
     ** Jest Rules
     */
    /**
     * This rule is disabled because it introduces unneccessary boilerplate in test files.
     */
    "jest/prefer-expect-assertions": "off",
  },
};
