module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended", // 在最后面新增extends
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
