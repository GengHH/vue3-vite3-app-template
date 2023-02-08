/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-05 23:29:38
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-21 17:31:10
 * @FilePath: \vue3-vant-mobilef:\jb2q-ggzp-app\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'./.eslintrc-auto-import.json',
	],
	parser: 'vue-eslint-parser',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		BMapGL: 'readonly',
		eshimin: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
