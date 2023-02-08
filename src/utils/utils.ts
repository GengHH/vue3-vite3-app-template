/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: GengHH 18818060415@163.com
 * @Date: 2022-09-11 23:10:03
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-07 17:26:08
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\utils\utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useDicStore } from '@/store';
import { Numeric } from 'vant/es/utils';
export function isValidKey(
	key: string | number | symbol,
	object: object
): key is keyof typeof object {
	return key in object;
}

type StringObj = { [k: string]: string };
type UrlParamBack = null | string | StringObj;

/**
 * 获取数据类型
 * @param {any} value 需要判断的值
 * @return "String","Object","Array"...
 */
export function getType(value: any) {
	return Object.prototype.toString.call(value).slice(8, -1);
}

export function isDef(val: unknown): boolean {
	return val !== undefined && val !== null;
}

export function isObject(val: unknown): val is Record<any, any> {
	return Object.prototype.toString.call(val).slice(8, -1) === 'Object';
}

export function isArray(val: unknown): boolean {
	return Object.prototype.toString.call(val).slice(8, -1) === 'Array';
}

export function isString(val: unknown): boolean {
	return Object.prototype.toString.call(val).slice(8, -1) === 'String';
}

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
export function getUrlParam(name = ''): UrlParamBack {
	const href = window.location.href,
		i = href.indexOf('?');
	if (i < 0) return null;
	const str = href.slice(i);
	if (!str) return null;
	const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g);
	if (!arr) return null;
	const obj: StringObj = {};
	arr.forEach((v) => {
		const temp = v.split('=');
		if (temp.length > 0) {
			obj[temp[0]] = temp[1];
		}
	});
	if (name) return obj[name];
	return obj;
}

/**
 * 字典属性--数据基本结构
 * filter：指向的是上一级字典的 value
 **/
export type DicMetaType = { value: string; label?: string; filter?: string; text?: Numeric };
// export type DicType = Array<DicMetaType>[];

/**
 * 获取字典表中的某项TEXT
 * @param {Array} data
 * @param {String} value
 */
export function getDicText(data: Array<DicMetaType>, value: string) {
	if (isArray(data) && data.length && value) {
		const _dic = data.find(function (i) {
			return i.value === value;
		});
		return _dic ? _dic.text || _dic.label : '';
	}
	return value;
}

/**
 * 时间格式化
 * @param {*} date
 * return "2021-07-06 11:10:31"
 */
const formatNumber = (n: string | number) => {
	n = n.toString();
	return n[1] ? n : '0' + n;
};
export function formatTime(date: Date): string {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	return (
		[year, month, day].map(formatNumber).join('-') +
		' ' +
		[hour, minute, second].map(formatNumber).join(':')
	);
}

function zeroFill(i: number | string) {
	if (i >= 0 && i <= 9) {
		return '0' + i;
	} else {
		return i;
	}
}

/**
 *获取当前时间 格式：yyyy-MM-dd HH:MM:SS
 * @param {*} originDate
 * @export
 */
export function getCurrentTime(originDate: Date) {
	const date = originDate ? originDate : new Date(); //当前时间
	const month = zeroFill(date.getMonth() + 1); //月
	const day = zeroFill(date.getDate()); //日
	const hour = zeroFill(date.getHours()); //时
	const minute = zeroFill(date.getMinutes()); //分
	const second = zeroFill(date.getSeconds()); //秒

	//当前时间
	const curTime =
		date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

	return curTime;
}

/**
 *格式化某个日期成八位数字   格式：yyyyMMdd
 * @param {*} originDate
 * @export
 */
export function getDateNumber(orignDate: Date | string | number) {
	const date = new Date(orignDate); //当前时间
	const month = zeroFill(date.getMonth() + 1); //月
	const day = zeroFill(date.getDate()); //日
	//var hour = zeroFill(date.getHours()); //时
	//var minute = zeroFill(date.getMinutes()); //分
	//var second = zeroFill(date.getSeconds()); //秒

	//当前时间
	const targetDate = '' + date.getFullYear() + month + day;

	return targetDate;
}

// 标准日转化为年月日
export function transformTime(date: Date) {
	const d = new Date(date);
	const datetime = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
	return datetime;
}
// 年月转时间戳
export function dateTransStemp(date: string) {
	const a = date.replace('月', '');
	const b = a.replace('年', '-');
	const c = new Date(b).getTime();
	return c;
}
// YYYYMMDD转yyyy年mm月dd日
export function ymdToYmdText(date: string) {
	if (date != '') {
		return date.slice(0, 4) + '年' + date.slice(4, 6) + '月' + date.slice(6, 8) + '日';
	} else {
		return '';
	}
}
/**
 * 将多种类型的日期转成 YYYY/MM/DD的格式 或者 YYYY-MM-DD的格式
 * date: Date | 20220202 | 2022年02月02日 |  2022-02-02 |  2022年02月 | 2022-02 | 202202
 **/
export function transformSlashTime(date: string | Date, format: '/' | '-' = '/'): any {
	if (typeof date === 'object') {
		return `${date?.getFullYear()}${format}${zeroFill(date?.getMonth() + 1)}${format}${zeroFill(
			date?.getDate()
		)}`;
	} else if (typeof date === 'string') {
		if ((date.includes('/') && format === '/') || (date.includes('-') && format === '-'))
			return date;
		if (date.includes('-') && format === '/') return date.replace(/-/g, '/');
		if (date.includes('/') && format === '-') return date.replace(/\//g, '-');

		if (date.includes('年') || date.includes('月') || date.includes('日')) {
			return date.replace('年', format).replace('月', format).replace('日', '');
		}
		const _date = date as string;
		if (_date?.length === 8)
			return `${_date.slice(0, 4)}${format}${_date.slice(4, 6)}${format}${_date.slice(6, 8)}`;
		if (_date?.length === 6) return `${_date.slice(0, 4)}${format}${_date.slice(4, 6)}`;
	} else {
		return date;
	}
}
/**
 * 将字符串多种类型的日期转成 YYYYMMDD or YYYYMM的格式
 * date: Date | 2022/02/02 | 2022年02月02日 |  2022-02-02 |  2022年02月 | 2022-02 | 2022/02
 **/
export function transformNumberTime(date: string): any {
	return !date ? date : date.replace(/年|月|日|-|\//g, '');
}
// 单一字典表转换
export function oneCodeToText(code: string, type: string) {
	const dicStore = useDicStore();
	let label = '';
	dicStore[type].forEach((item: any) => {
		if (code === item.value) {
			label = item.label;
		}
	});
	return label;
}
// 多选字典表转换
export function multipleCodeToText(code: string, type: string) {
	const codeArr = code.split('-');
	const dicStore = useDicStore();
	let label = '';
	dicStore[type].forEach((item: any) => {
		codeArr.forEach((son) => {
			if (son === item.value) {
				label += item.label + '，';
			}
		});
	});
	label = label.substr(0, label.length - 1);
	return label;
}

/**
 * 获取asset下的图片
 * @param imgUrl
 * @returns
 */
export function getAssetsImg(imgUrl: string) {
	return new URL(`../assets/img/${imgUrl}`, import.meta.url).href;
}

/**
 * 使用js实现锚点滚动功能；字符串需要是'#id'锚点格式；数字的话标识要滚动的位置
 * @param {String,Number} selector
 */
export function goAnchor(selector: string | number) {
	let top = 0;
	const scrollTop =
		document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if (typeof selector === 'number') {
		top = selector - scrollTop;
	} else {
		const anchor = (document.querySelector(selector) as HTMLElement) || { offsetTop: 0 };
		top = anchor.offsetTop - scrollTop;
	}
	window.scrollBy({ top, behavior: 'smooth' });
}

/**
 * 判断当前打开的是不是微信浏览器
 * @returns
 */
export function isWeiXin() {
	const ua = window.navigator.userAgent.toLowerCase();
	if ((ua.match(/MicroMessenger/i) || [])[0] === 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

/**
 * 根据硬件：平台、设备和操作系统 判断是不是移动端
 * @returns
 */
export function isMobile() {
	const system = {
		win: false,
		mac: false,
		xll: false,
	};
	//检测平台
	const p = navigator.platform;
	system.win = p.indexOf('Win') === 0;
	system.mac = p.indexOf('Mac') === 0;
	system.xll = p === 'Xll' || p.indexOf('Linux') === 0;

	if (system.win || system.mac || system.xll) {
		return false;
	} else {
		return true;
	}
}

/**
 *
 * 过滤出目标对象中指定keys的值
 * @export
 * @param {Record<string, any>} targetObject
 * @param {string[]} propsArray
 * @returns 返回新组成的对象
 */
export function getTargetObject(targetObject: Record<string, any>, propsArray: string[]) {
	if (typeof targetObject !== 'object' || !Array.isArray(propsArray)) {
		throw new Error('参数格式不正确');
	}
	const result = {} as Record<string, any>;
	Object.keys(targetObject)
		.filter((key: any) => propsArray.includes(key))
		.forEach((key: string) => {
			result[key] = targetObject[key];
		});
	return result;
}

/**
 * 判断是不是空对象
 * @param obj
 * @returns
 */
export function isEmptyObj(obj: any) {
	return JSON.stringify(obj) === '{}';
}
