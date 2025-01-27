// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // '@typescript-eslint/linebreak-style': ['error', 'auto'],
      // '@typescript-eslint/semi': ['error', 'always'],
      // '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      // '@typescript-eslint/max-len': ['error', { 'code': 80 }],
      // '@typescript-eslint/eol-last': ['error', 'always'],
      // '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      // '@typescript-eslint/no-multi-spaces': ['error'],
      // '@typescript-eslint/no-multiple-empty-lines': ['error', { 'max': 1 }],
    },
  },
);