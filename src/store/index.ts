/*
 * @Author: GengHH
 * @Date: 2022-11-22 15:40:11
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-22 15:41:03
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\store\index.ts
 */
import { createPinia } from 'pinia';

const pinia = createPinia();

//导出pinia
export default pinia;

//导出所有store
import { useDicStore } from './modules/dic';
import { useUserStore } from './modules/user';

export { useDicStore, useUserStore };
