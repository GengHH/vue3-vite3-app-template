/*
 * @Author: GengHH
 * @Date: 2022-11-30 12:06:43
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-30 12:09:12
 * @Description:在测试环境使用mock，需要使用到此配置文件
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\mockProdServer.ts
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import index from './mock/index';

export function setupProdMockServer() {
	createProdMockServer([...index]);
}
