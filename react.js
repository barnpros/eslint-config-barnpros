/**
 * Specific rules for React projects
 */
module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
  ],
  plugins: ["react"],
  globals: {
    React: "writable",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     ** React Rules
     */
    /**
     * Prop spreading is desired.
     */
    "react/jsx-props-no-spreading": "off",
    /**
     * Parenthesis wrapping is determined by prettier.
     */
    "react/jsx-wrap-multilines": "off",
    /**
     * Prop-Types are disabled because TypeScript is a more capable type-checking system.
     */
    "react/prop-types": "off",
    /**
     * Next.js does not require the React library to be in scope to use JSX so the rule can be safely disabled.
     */
    "react/react-in-jsx-scope": "off",
  },
};
