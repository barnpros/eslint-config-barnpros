/**
 * Specific rules for Storybook Stories
 */
module.exports = {
  extends: ["@storybook/eslint-config-storybook"],
  rules: {
    /**
     ** Stock Eslint Rules
     */
    "no-use-before-define": "off",
    /**
     ** Typescript-Eslint Rules (set in eslint-config-storybook)
     */
    "@typescript-eslint/explicit-module-boundary-types": "off",
    /**
     ** React Rules
     */
    "react/prop-types": "off",
  },
};
