import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    tseslint.configs.recommended,
    {
        ignores: [
            "node_modules/",
            "dist/",
            "src/public/js/map.js",
            "src/public/js/form-map.js",
            "src/__tests__/",
            ".env",
            "init-mongo.js",
            "jest.config.js",
        ],
    },
]);
