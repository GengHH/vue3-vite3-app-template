/*
 * @Author: GengHH
 * @Date: 2022-10-21 16:58:15
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-21 17:11:47
 * @Description: file content
 * @FilePath: \vue3-vant-mobilef:\jb2q-ggzp-app\commitlint.config.js
 */
// module.exports = {
// 	extends: ['@commitlint/config-conventional'],
// 	rules: {
// 		'type-enum': [
// 			2,
// 			'always',
// 			['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'],
// 		],
// 		'type-case': [0],
// 		'type-empty': [0],
// 		'scope-empty': [0],
// 		'scope-case': [0],
// 		'subject-full-stop': [0, 'never'],
// 		'subject-case': [0, 'never'],
// 		'header-max-length': [0, 'always', 72],
// 	},
// };
module.exports = {
	// 采用cz 自定义提交规范，请查看 .cz-config.js
	extends: ['cz'],
	rules: {},
};
