/*
 * @Author: GengHH
 * @Date: 2023-02-08 14:14:22
 * @LastEditors: GengHH
 * @LastEditTime: 2023-03-01 14:49:05
 * @Description: file content
 * @FilePath: \vue3-vite3-app-template\src\http\index.ts
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import service, { AxiosRequestConfig } from './axios';
export * from './types';

export const request = <U = any>(config: AxiosRequestConfig): Promise<U> => {
	return new Promise((resolve, reject) => {
		service
			.request(config)
			.then((res) => {
				// 一些业务处理
				resolve(res.data);
			})
			.catch((err) => {
				console.log('request fail:', err);
				reject(err);
			});
	});
};

const http = {
	get<T = any>(url: string, params = {}, config?: AxiosRequestConfig): Promise<T> {
		return request({ url, params, ...config, method: 'GET' });
	},
	post<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
		return request({ url, data, ...config, method: 'POST' });
	},
	// put<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
	//   return request({ url, data, ...config, method: 'PUT' });
	// },
	delete<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
		return request({ url, data, ...config, method: 'DELETE' });
	},
	// 上传文件，指定 'Content-Type': 'multipart/form-data'
	upload<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
		return request({
			url,
			data,
			...config,
			method: 'POST',
			headers: { 'Content-Type': 'multipart/form-data' },
		});
	},
};

export default http;
