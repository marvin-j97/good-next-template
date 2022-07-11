module.exports = {
  extends: ["eslint:recommended", "next"],
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    eqeqeq: "error",
    yoda: "error",
    curly: "error",
    "prefer-template": "error",
    "no-undef": "off",

    "max-lines-per-function": ["warn", 100],

    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-async-promise-executor": "warn",
    "@typescript-eslint/ban-types": "warn",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "prettier/prettier": "error",
    "no-extra-boolean-cast": "warn",
    "@typescript-eslint/no-explicit-any": "warn",

    "require-jsdoc": [
      "warn",
      {
        require: {
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ],
  },
};
