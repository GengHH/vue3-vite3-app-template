<template>
	<router-view />
</template>

<script lang="ts">
	export default {
		name: 'App',
	};
</script>

<script setup lang="ts">
	// import Api from '@/api/testApi';
	// import { useDicStore } from '@/store';
	// import { DicMetaType } from './utils';

	// const dicStore = useDicStore();

	/**
	 * 进入页面入口，加载字典表数据
	 */
	// const getDicData = async (params: { codes: string[] }) => {
	// 	// 入参为空 or 字典数据已经存在，不再请求后台
	// 	if (!params.codes) {
	// 		return;
	// 	}

	// 	const { result } = await Api.getDicJson(params);
	// 	let dataAray: Array<DicMetaType> = [];
	// 	let dataObject: Record<string, Array<DicMetaType>> = {};
	// 	if (!result.data) {
	// 		return;
	// 	} else if (typeof result.data === 'string') {
	// 		dataObject = JSON.parse(result.data);
	// 		// 存入store
	// 		Object.keys(dataObject).forEach((k: string) => {
	// 			dicStore[k] = dataObject.k;
	// 		});
	// 	} else {
	// 		// 存入store
	// 		Object.keys(result.data).forEach((k: string) => {
	// 			dicStore[k] = result.data[k];
	// 		});
	// 	}
	// 	// 存入loaclstorage 用于测试
	// 	// storage.setItem(params.codes, JSON.stringify(dicStore[params.codes]));
	// };

	// 页面初始化
	// onBeforeMount(() => {
	// 	console.log('%c 🍧', 'color:#fca650', '---------开始加载字典-----------');
	// 	getDicData({ codes: ['YESNO', 'GGJBXX_QX'] });
	// });
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		background-color: #f4f4f4;
	}
</style>
