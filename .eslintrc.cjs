module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": "error",
  },
};
