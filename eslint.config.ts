import json from '@eslint/json';
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig(
  gitignore(),
  {
    extends: [taiymeConfig.configs.typescript, taiymeConfig.configs.stylistic],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.{js,ts}'],
  },
  {
    extends: [json.configs.recommended, taiymeConfig.configs.stylistic],
    language: 'json/json',
    ignores: [
      '.vscode/**/*.json',
    ],
    files: ['**/*.json'],
  },
  {
    extends: [json.configs.recommended, taiymeConfig.configs.stylistic],
    language: 'json/jsonc',
    files: ['**/*.jsonc'],
  },
);
