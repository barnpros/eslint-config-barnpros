module.exports = {
  env: {
    node: true,
  },
  extends: ["./index", "./development"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "sort-keys": "off",
  },
};
