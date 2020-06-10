# @barnpros/eslint-config

[![npm version](https://badge.fury.io/js/%40barnpros%2Feslint-config.svg)](https://badge.fury.io/js/%40barnpros%2Feslint-config) [![barnpros](https://circleci.com/gh/barnpros/eslint-config-barnpros.svg?style=shield)](https://app.circleci.com/pipelines/github/barnpros/eslint-config-barnpros) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An opinionated, sharable ESlint config used across Barn Pros TypeScript and JavaScript applications.

This config is intended to create consistent, well documented, maintainable, and modern software for Barn Pros. We believe that code should be explicit, preferring a more verbose syntax that favors descriptive variable names instead of using abbreviations, however common they may be. This practice rewards us with code that is easier to understand and reason about, as well as easier to share and explain to fellow developers and non-developers.

## Usage

### JavaScript

Installation

**With NPM:**

`npm i -D @barnpros/eslint-config babel-eslint`

**With Yarn:**

`yarn add -D @barnpros/eslint-config babel-eslint`

Create ESlint configs:
The linting rules are separated into three rulesets: common, development, and production. The base rules are defined in the common set and the development and production overrides are defined in their resepective config files.

**Common Config:**

`touch .eslintrc.common.js`

```js
module.exports = {
  extends: ["@barnpros/eslint-config"],
  parser: "babel-eslint",
};
```

In the common config, then create an overrides section and extend any optional configurations your project needs.

Example:

```js
module.exports = {
  extends: ["@barnpros/eslint-config"],
  parser: "babel-eslint",
  overrides: [
    {
      files: ["tests/**/*"],
      extends: ["@barnpros/eslint-config/jest"],
    },
  ],
};
```

\*Note: You should extend the React override in the root of your ESlint config after the base config.

Example:

```js
module.exports = {
  extends: ["@barnpros/eslint-config", "@barnpros/eslint-config/react"],
};
```

**Development Config:**

`touch .eslintrc.dev.js`

```js
module.exports = {
  extends: ["./.eslintrc.common.js", "@barnpros/eslint-config/development"],
};
```

**Production Config:**

`touch .eslintrc.prod.js`

```js
module.exports = {
  extends: ["./.eslintrc.common.js", "@barnpros/eslint-config/production"],
};
```

### TypeScript

**With NPM:**

`npm i -D @barnpros/eslint-config @typescript-eslint/parser typescript`

**With Yarn:**

`yarn add -D @barnpros/eslint-config @typescript-eslint/parser typescript`

**Common Config:**

```js
module.exports = {
  extends: ["@barnpros/eslint-config", "@barnpros/eslint-config/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```

### Overrides

This config is meant to be highly scoped, so rules are not enforced in places they are not expected to be. Thus there are multiple different rulesets you can extend.

- @barnpros/eslint-config: The base configuration. This should always be extended, and should come before any other configs you extend from this package.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
  };
  ```

- @barnpros/eslint-config/typescript: Base rules for use with TypeScript.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config", "@barnpros/eslint-config/typescript"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
    },
  };
  ```

- @barnpros/eslint-config/react: Additional rules for writing good, accessable React components.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config", "@barnpros/eslint-config/react"],
  };
  ```

- @barnpros/eslint-config/next: Rules for Next.js specific React apps. It should be used as an override for the `pages` folder which specifically requires default exports, which causes conflicts with our preference for named exports. If you are using default exports instead of named exports this config is not required.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config", "@barnpros/eslint-config/react"],
    overrides: [
      {
        files: ["pages/**/*"],
        extends: ["@barnpros/eslint-config/next"],
      },
    ],
  };
  ```

- @barnpros/eslint-config/jest: Rules for linting test files using Jest and @testing-library packages.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
    overrides: [
      {
        files: ["tests/**/*"],
        extends: ["@barnpros/eslint-config/jest"],
      },
    ],
  };
  ```

  OR

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
    overrides: [
      {
        files: ["**/*.test.{js,jsx,ts,tsx}"],
        extends: ["@barnpros/eslint-config/jest"],
      },
    ],
  };
  ```

- @barnpros/eslint-config/cypress: Rules for linting Cypress e2e tests.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
    overrides: [
      {
        files: ["cypress/integration/**/*"],
        extends: ["@barnpros/eslint-config/cypress"],
      },
    ],
  };
  ```

- @barnpros/eslint-config/storybook: Rules for linting Storybook stories.

  - Example:

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
    overrides: [
      {
        files: ["stories/**/*"],
        extends: ["@barnpros/eslint-config/storybook"],
      },
    ],
  };
  ```

  OR

  ```js
  module.exports = {
    extends: ["@barnpros/eslint-config"],
    overrides: [
      {
        files: ["**/*.stories.{js,jsx,ts,tsx}"],
        extends: ["@barnpros/eslint-config/storybook"],
      },
    ],
  };
  ```

## Example Config Files

```js
/* .eslintrc.common.js */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "@barnpros/eslint-config",
    "@barnpros/eslint-config/typescript",
    "@barnpros/eslint-config/react",
  ]
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
  overrides: [
    {
      files: ["pages/**/*"],
      extends: ["@barnpros/eslint-config/next"],
    },
    {
      files: ["tests/**/*"],
      extends: ["@barnpros/eslint-config/jest"],
    },
    {
      files: ["cypress/integration/**/*"],
      extends: ["@barnpros/eslint-config/cypress"],
    },
    {
      files: ["cypress/integration/**/*"],
      extends: ["@barnpros/eslint-config/cypress"],
    },
  ]
};
```

```js
/* .eslintrc.dev.js */

module.exports = {
  extends: ["./.eslintrc.common.js", "@barnpros/eslint-config/development"],
};
```

```js
/* .eslintrc.prod.js */

module.exports = {
  extends: ["./.eslintrc.common.js", "@barnpros/eslint-config/production"],
};
```

## License

Open source [licensed as MIT](https://github.com/barnpros/eslint-config-barnpros/blob/master/LICENSE).
