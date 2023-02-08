/*
 * @Author: GengHH
 * @Date: 2022-11-22 16:34:27
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-06 15:56:59
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\api\dismissalApi.ts
 */
import http, { Response, ResponseResult } from '@/http';
import { AxiosRequestConfig } from 'axios';

export default {
	// 获取字典表信息 TODO
	async getDicJson(param: { codes: string[] }) {
		return await http.post<Response<ResponseResult>>('/qyy/ldlzy/tgtzjf/getCodes', param);
	},

	//获取单位信息
	async queryCorpInfo() {
		return await http.get<Response<any>>('/qyy/ldlzy/tgtzjf/queryCorpInfo');
	},
	//校验人员信息
	async checkPerInfo(param: {
		zjhm: string;
		xm: string;
		bllx: string;
		cid: string;
		shbxdjm: string;
	}) {
		return await http.post<Response<any>>('/qyy/ldlzy/tgtzjf/checkPerInfo', param);
	},
	//获取缴费截止年月
	async findJFZZNY(param: { pid: string; jyzzrq: string; shbxdjm: string }) {
		return await http.get<Response<any>>('/qyy/ldlzy/tgtzjf/findJFZZNY', param);
	},
	//校验就业终止日期
	async checkStatusByJyzzrq(param: { jyzzrq: string; pid: string; jyqsrq: string; cid: string }) {
		return await http.get<Response<any>>('/qyy/ldlzy/tgtzjf/checkStatusByJyzzrq', param);
	},
	//获取所有证件类型
	async findZjlx() {
		return await http.get<Response<any>>('/qyy/ldlzy/tgtzjf/findZjlx');
	},
	//保存申请
	async qyyCompelte(param: any, config: AxiosRequestConfig) {
		return await http.post<any>('/qyy/ldlzy/tgtzjf/qyyCompelte', param, config);
	},
};
