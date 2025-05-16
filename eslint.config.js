import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from "eslint-plugin-import"

export default tseslint.config(
  {
      ignores: ['dist'],
      settings: {
          "import/resolver": {
              "node": {
                  "extensions": [
                      ".ts",
                      ".tsx"
                  ]
              }
          }
      }
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'import': importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "import/no-restricted-paths": [
        "error", {
          basePath: "./src",
          zones: [
              {
                  target: "./domain",
                  from: "./",
                  except: ["./domain"],
                  message: "Domain должен быть независимым"
              },
              {
                  target: "./data",
                  from: "./app",
                  message: "Data должен быть независимым"
              }
          ]
        }
      ]
    },
  },
)
