module.exports = {
  extends: ["eslint:recommended", "next"],
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    eqeqeq: "error",
    yoda: "error",
    curly: "error",
    "prefer-template": "error",
    "no-undef": "off",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

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
