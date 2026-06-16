import js from '@eslint/js';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        console: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly',
      },
    },
  },
];