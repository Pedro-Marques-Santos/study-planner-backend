import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import jsonPlugin from "@eslint/json";

// Config ESLint com Prettier e TypeScript adaptado
export default defineConfig([
  { ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"] },

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json: jsonPlugin },
    language: "json",
    extends: ["plugin:json/recommended"]
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/strict-boolean-expressions": "warn"
    },
    settings: {},
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },

  // Prettier only
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error"
    }
  },

  // Add Prettier config separately
  prettierConfig
]);
