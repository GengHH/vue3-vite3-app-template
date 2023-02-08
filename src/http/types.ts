/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: GengHH
 * @Date: 2022-09-07 19:27:05
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-25 13:32:43
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\http\types.ts
 */
// 和后端约定好接口返回的数据结构
// 不需要分页---结果
export interface ResponseResult<T = any> {
	data: T;
}
export interface Response<T = any> {
	status: number | string;
	message: string;
	result: T;
}
// 需要分页---结果
export interface PageResult<T = any> {
	pageSize: number | string;
	pageIndex: number | string;
	total: number | string;
	summary: any;
	data: T;
	size: number | string;
	pageCount: number | string;
}
export interface Result<T = PageResult> {
	pageresult: T;
}
export interface PageResponse<T = Result> {
	status: number | string;
	message: string;
	result: T;
}
