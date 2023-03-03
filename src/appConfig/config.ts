/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-12 12:06:14
 * @LastEditors: GengHH
 * @LastEditTime: 2023-02-27 17:03:41
 * @FilePath: \vue3-vite3-app-template\src\appConfig\config.ts
 * @Description: app全局的功能配置项
 */
//app 中所有的分页查询的公用入参
export const pageParams = {
	pageParam: {
		pageIndex: 0,
		// total: 0,
		pageSize: 50,
	},
};
// app 中用于配置某些后台请求不使用axios中添加的loading hooks
export const dontUseDefaultLoading = <Array<string>>[];
