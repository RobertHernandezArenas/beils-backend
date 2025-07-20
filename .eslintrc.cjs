module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',         // Soporta ES2021+
    sourceType: 'module',          // Para usar import/export
    project: './tsconfig.json',    // Si tienes tsconfig en la raíz
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',                     // si usas Prettier
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',                     // debe ir **después** de los extend de TS
  ],
  rules: {
    // ----------------------------------------
    // Ajustes generales
    // ----------------------------------------
    'prettier/prettier': 'error',         // si usas Prettier
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',              // delegamos a TS
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // ----------------------------------------
    // Import plugin
    // ----------------------------------------
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin', 
          'external', 
          'internal', 
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-default-export': 'off',

    // ----------------------------------------
    // @typescript-eslint
    // ----------------------------------------
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
}
