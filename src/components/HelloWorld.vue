<!--
 * @Author: GengHH
 * @Date: 2022-11-22 14:43:54
 * @LastEditors: GengHH
 * @LastEditTime: 2023-02-09 14:45:02
 * @Description: file content
 * @FilePath: \vue3-vite3-app-template\src\components\HelloWorld.vue
-->

<template>
	<div class="index">
		<!-- <van-cell
			v-for="item in list"
			:key="item.path"
			:title="(item.name as string)"
			:to="item.path"
			class="link"
		></van-cell> -->
		<h3 style="text-align: center; padding: 100px 20px">
			Hi,this is a mobile app develop template build by vite3 vue3 and other tools!
		</h3>
		<h3 style="text-align: center; padding: 0 20px">^_^</h3>
	</div>
</template>
<script setup lang="ts">
	// import { routes } from '@/router';
	// const list = routes.filter((item) => item.name && item.name !== 'app');
</script>
<style lang="less" scoped>
	a {
		color: red;
	}
	.index {
		padding-bottom: 30px;
		:deep(.van-cell) {
			background-color: #ddd;
			margin-top: 16px;
		}
	}
</style>
