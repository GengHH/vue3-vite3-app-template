/*
 * @Author: GengHH
 * @Date: 2022-09-05 10:54:35
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-10-03 21:38:55
 * @Description: file content
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_APP_API_BASE_URL: string;
	readonly VITE_BUILD_SOURCEMAP: string;
	readonly VITE_BUILD_DROP_CONSOLE: string;
	readonly VITE_BUILD_VCONSOLE: string;
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
