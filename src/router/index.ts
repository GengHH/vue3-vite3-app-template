/*
 * @Author: GengHH
 * @Date: 2022-11-22 14:43:54
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-02 13:56:10
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'app',
		meta: {
			title: 'app',
		},
		component: () => import('@/components/HelloWorld.vue'),
	},
	// {
	// 	path: '/layout',
	// 	name: 'layout',
	// 	redirect: '/index',
	// 	meta: {
	// 		title: 'layout',
	// 	},
	// 	component: () => import('@/view/layout/index.vue'),
	// 	children: layoutRoutes,
	// },
	// 替代vue2中的'*'通配符路径
	{ path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
export default router;
