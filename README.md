# @barnpros/eslint-config

[![npm version](https://badge.fury.io/js/%40barnpros%2Feslint-config.svg)](https://badge.fury.io/js/%40barnpros%2Feslint-config) [![barnpros](https://circleci.com/gh/barnpros/eslint-config-barnpros.svg?style=shield)](https://app.circleci.com/pipelines/github/barnpros/eslint-config-barnpros) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An opinionated, sharable ESlint config used across Barn Pros TypeScript and JavaScript applications.

This config is intended to create consistent, well documented, maintainable, and modern software for Barn Pros. We believe that code should be explicit, preferring a more verbose syntax that favors descriptive variable names instead of using abbreviations, however common they may be. This practice rewards us with code that is easier to understand and reason about, as well as easier to share and explain to fellow developers and non-developers.

## Usage

Installation

**With NPM:**

`npm i -D @barnpros/eslint-config`

**With Yarn:**

`yarn add -D @barnpros/eslint-config`

Create ESlint configs:
The linting rules are separated into three rulesets: common, development, and production. The base rules are defined in the common set and the development and production overrides are defined in their resepective config files.

**Common Config:**

`touch .eslintrc.common.js`

```js
module.exports = {
  extends: ["@barnpros/eslint-config"],
  parserOptions: {
    project: "./tsconfig.js",
  },
};
```

In the common config, then create an overrides section and extend any optional configurations your project needs.

Example:

```js
module.exports = {
  extends: ["@barnpros/eslint-config"],
  parserOptions: {
    project: "./tsconfig.js",
  },
  overrides: [
    {
      files: ["tests/**/*"],
      extends: ["@barnpros/eslint-config/override/jest"],
    },
  ],
};
```

\*Note: You should extend the React override in the root of your ESlint config after the base config.

Example:

```js
module.exports = {
  extends: [
    "@barnpros/eslint-config",
    "@barnpros/eslint-config/override/react",
  ],
  parserOptions: {
    project: "./tsconfig.js",
  },
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

## License

Open source [licensed as MIT](https://github.com/barnpros/eslint-config-barnpros/blob/master/LICENSE).
