import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import globals from "globals";
import js from "@eslint/js";


export default [
  js.configs.recommended,
  { ignores: ["test", "src/demo", "*.config.*"] },
  {
    plugins: {
      jest,
      react
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",   
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },

    rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "no-unused-vars": "warn",
      "no-console": "off",
      "comma-dangle": ["warn", "only-multiline"],
      "semi": ["warn", "always"],
      quotes: [2, "single",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      camelcase: "error",
    },

    "settings": {
      "react": { "version": "detect" }
    }
  },
];
