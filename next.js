/**
 * Specific rules for the Pages folder required by Next.js
 */
module.exports = {
  extends: ["./react"],
  rules: {
    /**
     ** Import Rules (included in Airbnb-Typescript)
     */
    /**
     * Next.js uses default exports found in the `pages` dir to generate the app's pages.
     * The default export rules defined in the main rules block must be overwritten to allow and prefer
     * default exports for files found in this folder as well as its subfolders.
     */
    "import/prefer-default-export": "error",
    "import/no-default-export": "off",
  },
};
