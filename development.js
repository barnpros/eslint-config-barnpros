/* eslint-disable sort-keys -- Eslint config files are more easily parsed if keys are in a specific order, not alphabetical */
module.exports = {
  rules: {
    /**
     * Unresolved `todos` are allowed in development, but will return a warning so they do not get lost or forgotten.
     */
    "no-warning-comments": [
      "warn",
      {
        terms: ["todo"],
        location: "anywhere",
      },
    ],
  },
};
/* eslint-enable sort-keys */
