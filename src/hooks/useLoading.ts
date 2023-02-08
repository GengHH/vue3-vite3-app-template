/*
 * @Author: GengHH
 * @Date: 2022-11-22 17:02:15
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-22 17:03:43
 * @Description: file content
 * @FilePath: \vue3-vant-mobilef:\jb2q-ggzp-app\hooks\useLoading.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from 'vant';

export function useLoading() {
	let toast: any = null;

	const startLoading = (msg?: string) => {
		toast = Toast.loading({
			duration: 0,
			forbidClick: true,
			message: msg || '加载中...',
		});
	};
	const stopLoading = () => {
		toast && toast.clear();
	};

	onBeforeUnmount(stopLoading);

	return { startLoading, stopLoading };
}
