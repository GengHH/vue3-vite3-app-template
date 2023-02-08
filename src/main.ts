/*
 * @Author: GengHH
 * @Date: 2022-11-22 14:43:54
 * @LastEditors: GengHH
 * @LastEditTime: 2022-11-22 17:17:17
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import 'amfe-flexible';
import '@/styles/reset.css';
import 'vant/lib/index.css';
import '@/styles/index.less';
import { Dialog, Empty } from 'vant';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Dialog);
app.use(Empty);
// 配置可使用懒加载
// app.use(Lazyload, {
// 	lazyComponent: true,
// });
app.mount('#app');
