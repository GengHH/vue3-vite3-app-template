/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-07 22:56:41
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-02 21:19:44
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\http\axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Response } from './types';
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import router from '@/router';
import { Toast } from 'vant';
import { dontUseDefaultLoading } from '@/appConfig/config';
import { useLoading } from '@/hooks/index';
const { startLoading, stopLoading } = useLoading();

axios.defaults.timeout = 1000 * 60;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //该配置不生效，会被axiso覆盖掉，可使用如下：auth的方式来配置
axios.defaults.headers.common['Access-Coxntrol-Allow-Headers'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST';

// 创建axios实例
const service = axios.create({
	// 根据不同env设置不同的baseURL
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});
// const auth = {
// 	headers: () => {
// 		return {
// 			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
// 		};
// 	},
// };
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		console.log(config.url);
		config.headers = {
			...config.headers,
			//...auth.headers(), // 你的自定义headers，如token等
		};
		// 开始显示模态框
		if (!dontUseDefaultLoading?.length || !dontUseDefaultLoading.includes(config?.url as any)) {
			if (/save|^do[A-Z]|delete/.test(config.url as string) || config.method === 'delete') {
				startLoading('执行中...');
			} else {
				startLoading();
			}
		}
		console.log('%c Line:51 🥚 config', 'color:#465975', config);
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// axios实例拦截响应
service.interceptors.response.use(
	(response: AxiosResponse<Response>) => {
		const _data = response.data as any;
		let errMessage = '';
		console.log('%c Line:64 🥤 _data', 'color:#b03734', _data);
		if (_data && typeof _data === 'string' && _data.includes('!DOCTYPE')) {
			//系统抛出异常返回的是html格式
			if (_data.includes('操作失败')) {
				//去掉原始样式
				//去除所有空格
				const newData = _data.replace(/\s*/g, '');
				//截取出提示信息
				// eslint-disable-next-line no-useless-escape
				const __data = newData.match(/left\">(\S*)<\/td/);
				if (__data) {
					errMessage = __data[1];
				} else {
					errMessage = '操作失败';
				}
				// Toast.fail(errMessage);
				console.log('%c 🍎 errMessage', 'color:#ffdd4d', errMessage);
			} else {
				errMessage = '系统异常';
			}
		} else {
			const { status, message } = response.data;
			switch (status) {
				case 0:
					break;
				case 202: // token过期
					errMessage = 'Token expired';
					router.push('/');
					break;
				case 203: // 无权限
					errMessage = 'No permission';
					break;
				default:
					errMessage = message;
					break;
			}
		}
		// 停止显示模态框
		stopLoading();
		if (errMessage) Toast.fail(errMessage);
		console.log('%c Line:103 🍢 response', 'color:#4fff4B', response);
		return response;
	},
	// 非2xx时触发
	(error: AxiosError) => {
		// Toast.fail('Network Error...');
		console.log('%c Line:110 🍩 error', 'color:#93c0a4', error);
		Toast.fail('请求异常...');
		return Promise.reject(error);
	}
);
export type { AxiosResponse, AxiosRequestConfig };

export default service;
