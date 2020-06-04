/* eslint-disable sort-keys -- The keys in this object are in the order in which they are intended to run */
module.exports = {
  "package.json": "yarn format-package-json",
  "**/*.{js,jsx,ts,tsx}": [
    "yarn lint-staged:prettier",
    "yarn lint-staged:eslint",
  ],
  "**/*.{json,md,yml}": ["yarn lint-staged:prettier"],
};
/* eslint-enable sort-keys */
