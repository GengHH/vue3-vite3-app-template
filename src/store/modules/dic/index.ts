/*
 * @Author: GengHH
 * @Date: 2022-11-22 15:40:11
 * @LastEditors: GengHH
 * @LastEditTime: 2023-02-08 14:43:19
 * @Description: file content
 * @FilePath: \vue3-vite3-template\src\store\modules\dic\index.ts
 */
import { DicMetaType } from '@/utils';
import { defineStore } from 'pinia';
const dicData: Record<string, Array<DicMetaType>> = {
	//是 or 否
	YESNO: [
		// { value: '0', label: '否' },
		// { value: '1', label: '是' },
	],
};
export const useDicStore = defineStore('dic', {
	// id: 'dic', // id必填，且需要唯一。两种写法
	state: () => {
		return dicData;
	},
	getters: {
		// yesno: (state) => state.YESNO,
		// common_startext: (state) => state.COMMON_STARTEXT,
	},
});
