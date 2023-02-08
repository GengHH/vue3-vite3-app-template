import { DicMetaType } from './../utils/utils';
/*
 * @Author: GengHH
 * @Date: 2020-11-05 11:38:28
 * @LastEditors: GengHH
 * @LastEditTime: 2023-02-08 14:28:49
 * @Description: 全局公用的字典表
 */
const dic: Record<string, Array<DicMetaType>> = {
	//是否
	YESNO: [
		{ value: '0', label: '否' },
		{ value: '1', label: '是' },
	],
};

export default dic;
