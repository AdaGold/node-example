import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "plugin:jest/recommended", 
    "plugin:react/recommended",
    "eslint:recommended"
  ),
  { 
    ignores: ["test", "src/demo", "*.config.*"] },
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
        ecmaFeatures: {
            jsx: true
        }
      }
    },

    rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "no-unused-vars": "warn",
      "no-console": "off",
      "comma-dangle": ["warn", "only-multiline"],
      "semi": ["warn", "always"],

      quotes: [
        2,
        "single",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],

      camelcase: "error",
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
];
