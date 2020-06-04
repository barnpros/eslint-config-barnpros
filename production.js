/* eslint-disable sort-keys -- Eslint config files are more easily parsed if keys are in a specific order, not alphabetical */
module.exports = {
  rules: {
    /**
     * We must maintain a clean console in production.
     * `no-console` is set to `warn` so build with console logs will fail.
     */
    "no-console": "error",
    /**
     * Unresolved `todos` should not be allowed into prodouction.
     */
    "no-warning-comments": [
      "error",
      {
        terms: ["todo"],
        location: "anywhere",
      },
    ],
  },
};
/* eslint-enable sort-keys */
