import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
export default [
  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended"),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react
    },
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto"
        }
      ],
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ["**/.eslintrc.{js,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      ecmaVersion: 5,
      sourceType: "commonjs"
    }
  }
];
