/*
 * @Author: GengHH
 * @Date: 2022-11-22 15:40:11
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-25 14:11:34
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\store\modules\user\index.ts
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	// id: 'user', // id必填，且需要唯一。两种写法
	state: () => {
		return {
			shbxdjm: '88888888888',
			cid: '6666666666',
			dwmc: '测试用户',
			ssq: '',
			jydz: '',
			lxr: '',
			lxdh: '',
			dwxz: '',
			isInit: '',
			login: false,
		};
	},
	getters: {
		nameLength: (state) => state.dwmc.length,
	},
	actions: {
		updateName(name: string) {
			this.dwmc = name;
		},
	},
});
