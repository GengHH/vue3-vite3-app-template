/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-12 12:06:14
 * @LastEditors: GengHH
 * @LastEditTime: 2022-10-09 15:24:42
 * @FilePath: \vue3-vant-mobilef:\jb2q-ggzp-app\src\appConfig\config.ts
 * @Description: app全局的功能配置项
 */
import { getAssetsImg } from '@/utils';
//app 中所有的分页查询的公用入参
export const pageParams = {
	pageParam: {
		pageIndex: 0,
		// total: 0,
		pageSize: 50,
	},
};
// app 中用于配置某些后台请求不使用axios中添加的loading hooks
export const dontUseDefaultLoading = [
	'/ssoLogin/login',
	'/ssoLogin/getAuthorizeUrl',
	'/original/dic/getDicJson',
	'/nologin/meeting/queryAdvertisementMeetList',
];

// 首页轮播图的配置信息
export const indexCarouselListConfig = [
	{
		//劳务协作
		// path: require('@/assets/img/banner7.jpg'),
		// imgPath: new URL('../assets/img/banner7.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner7.jpg'),
		pagePath: '/special',
		query: {
			specialColumn: 8,
		},
	},
	{
		//暖心活动
		// path: require('@/assets/img/banner_nuanxin.jpg'),
		//imgPath: new URL('../assets/img/banner_nuanxin.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner_nuanxin.jpg'),
		pagePath: '/special',
		query: {
			specialColumn: 7,
		},
	},
	{
		//高校毕业生
		// path: require('@/assets/img/specialCrowd/g.jpg'),
		//imgPath: new URL('../assets/img/specialCrowd/g.jpg', import.meta.url).href,
		imgPath: getAssetsImg('specialCrowd/g.jpg'),
		pagePath: '/special',
		query: {
			type: 3,
			specialColumn: 5,
			specialColumnValue: 'gxbys',
		},
	},
	{
		// path: require('@/assets/img/banner_fugong.jpg'),
		//imgPath: new URL('../assets/img/banner_fugong.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner_fugong.jpg'),
		pagePath: '/special',
		query: {
			specialColumn: 6,
		},
	},
	// {
	// 	// 百日万人 （移动端实现有些困难，暂时关闭）
	// 	// path: require('@/assets/img/banner6.png'),
	// 	//imgPath: new URL('../assets/img/banner6.png', import.meta.url).href,
	// 	imgPath: getAssetsImg('banner6.png'),
	// 	pagePath: '/specialBridging',
	// },
	{
		//操作指南
		// path: require('@/assets/img/banner0.jpg'),
		//imgPath: new URL('../assets/img/banner0.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner0.jpg'),

		outUrl: 'https://mp.weixin.qq.com/s/dsj5w3wn2m-1rCb-JI8vzg',
	},
	{
		//就业见习 TODO
		// path: require('@/assets/img/employmentTraineeHeader2.jpg'),
		//imgPath: new URL('../assets/img/employmentTraineeHeader2.jpg', import.meta.url).href,
		imgPath: getAssetsImg('employmentTraineeHeader2.jpg'),
		pagePath: '/employmentTrainee',
	},
	{
		//上海
		// path: require('@/assets/img/banner3.jpg'),
		//imgPath: new URL('../assets/img/banner3.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner3.jpg'),
		pagePath: '/special',
		query: {
			specialColumn: 2,
		},
	},
	{
		//校外培训机构专区 （双减专区）
		// path: require('@/assets/img/banner1.jpg'),
		//imgPath: new URL('../assets/img/banner1.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner1.jpg'),
		pagePath: '/special',
		query: {
			specialInfo: true,
		},
	},
	{
		//灵活就业
		// path: require('@/assets/img/banner4.jpg'),
		//imgPath: new URL('../assets/img/banner4.jpg', import.meta.url).href,
		imgPath: getAssetsImg('banner4.jpg'),
		pagePath: '/special',
		query: {
			specialColumn: 3,
		},
	},
];
