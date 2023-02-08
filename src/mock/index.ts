/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import dic from './dataDictionary';
//http请求的基本路径（开发环境为“/api-dev”）
// const basePath = import.meta.env.VITE_APP_API_BASE_URL;
//? 该文件中使用import.meta.env报错，后续再优化 (采用自行判断环境的方式:此法也行不通，原因是启动时process.env.NODE_ENV的值读不到：均为undefined，没发区分是什么环境)
const basePath = '/api-dev';

// 通用的操作成功返回数据（不包含实际返回值），只判断是不是返回成功
const successData = {
	status: 200,
	message: '',
	result: {},
};

//模拟字典表数据(post)
const dicMockDataPost = (req: any) => {
	const { code } = JSON.parse(req.body);
	//const code = req.body;
	// console.log('mock 拦截 dic参数', code);
	// console.log('%c 🍓 code', 'color:#33a5ff', code);
	if (code) {
		const objArray = code.split('@');
		const key = code.includes('@') ? objArray[0] + '_' + objArray[1] : objArray[0];
		console.log('%c 🍐', 'color:#465975', JSON.stringify(dic[key]));
		return {
			//dicData: dic[code]
			status: 200,
			message: '',
			result: {
				data: JSON.stringify(dic[key]),
			},
		};
	}
	return {
		status: 500,
		message: '',
		result: {
			data: '',
		},
	};
};

// 配置所有的请求
const allData = [
	{
		// 自行测试的数据
		url: basePath + '/test/getTestInfo',
		method: 'post',
		response: () => {
			return {
				status: 200,
				message: '',
				result: Mock.mock({
					pid: '@id',
					zjlx: '@id',
					zjhm: '@id',
					xm: '@cname',
					// uid: '@id',
					// nickname: '@cname',
					// age: '@integer(10-100)',
					// url: '@image',
					// city: '@city',
					// country: '@county(true)',
					// province: '@province',
					// mobile_phone: '@phone',
					// email: '@email',
					// region: '@region',
				}),
			};
		},
	},
	{
		//按需获取需要的字典表
		url: basePath + '/original/dic/getDicJson',
		method: 'post',
		response: (req: any) => {
			const { code } = req.body;
			if (code) {
				const objArray = code.split('@');
				const key = code.includes('@') ? objArray[0] + '_' + objArray[1] : objArray[0];
				// return {
				// 	//dicData: dic[code]
				// 	status: 200,
				// 	message: '',
				// 	result: {
				// 		data: JSON.stringify(dic[key]),
				// 	},
				// };
				return {
					msg: '',
					result: true,
					data: JSON.parse(JSON.stringify(dic[key])),
				};
			}
			return {
				status: 500,
				message: '',
				result: {
					data: '',
				},
			};
		},
	},
] as MockMethod[];

export default allData;
