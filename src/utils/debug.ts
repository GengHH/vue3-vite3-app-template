/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-07 01:34:41
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-09-12 23:32:54
 * @FilePath: \vue3-vant-mobilee:\AllCorpWorkspace\jb2q-ggzp-app\src\utils\debug.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { storage } from './storage';

// MODE，即env[MODE]文件的环境名称(应用运行的模式)
const { MODE, VITE_BUILD_VCONSOLE } = import.meta.env;

// 传入debug参数，将debug存入/移除localStorage
const config = (debug: any) => {
	if (debug === '1') {
		storage.setItem('debug', debug);
	} else {
		storage.removeItem('debug');
	}
	init();
};

// 初始化 vconsole，控制隐藏/显示
const init = () => {
	const vc = <HTMLElement>document.querySelector('#__vconsole');
	const debug = storage.getItem('debug');
	console.log('%c 🍇 debug', 'color:#b03734', debug);
	if (VITE_BUILD_VCONSOLE === 'true' && MODE === 'test' && vc) {
		vc.style.display = debug === '1' ? '' : 'none';
	}
};

export default { init, config };
