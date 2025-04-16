import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [{
	files: ["**/*.ts"],

	languageOptions: {
		parser: tsparser,
		sourceType: "module",
	},

	plugins: {
		"@typescript-eslint": tseslint,
		prettier: prettierPlugin,
	},

	rules: {
		...tseslint.configs.recommended.rules,
		...prettierConfig.rules,
		"@typescript-eslint/no-unused-vars": "warn",
		"semi": ["error", "always"],
		"quotes": ["error", "single"],
		"prettier/prettier": ["error", {
			"printWidth": 80,
		}],
		'arrow-spacing': ['warn', {
			before: true,
			after: true
		}],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		indent: ['error', 'tab'],
		'keyword-spacing': 'error',
		'max-nested-callbacks': ['error', {
			max: 4
		}],
		'max-statements-per-line': ['error', {
			max: 2
		}],
		'no-console': 'off',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', {
			max: 2,
			maxEOF: 1,
			maxBOF: 0
		}],
		'no-shadow': ['error', {
			allow: ['err', 'resolve', 'reject']
		}],
		'no-trailing-spaces': ['error'],
		'no-var': 'error',
		'no-undef': 'off',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		yoda: 'error',
	},
}, ];