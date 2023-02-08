/* eslint-disable no-useless-escape */
/*
 * @Author: GengHH
 * @Date: 2021-01-11 10:51:54
 * @LastEditors: GengHH
 * @LastEditTime: 2022-09-14 09:47:31
 * @Description: 全局公用的各种正则表达式
 * @FilePath: \vue3-vant-mobilef:\jb2q-ggzp-app\src\utils\regexp.ts
 */

/**
 * Curries a predicate function to check if value matches pattern.
 * 传入正则表达式，返回一个正则校验函数 (eg. isCSSLength)
 * @param {RegExp} pattern
 * @returns {(value: string) => boolean}
 */
const isPattern =
	(pattern: RegExp): object =>
	(value: string): boolean =>
		pattern.test(value);
/**
 * Check if value is a CSS Length. css尺寸
 */
export const isCSSLength = isPattern(
	/^\+?(\d*\.)?\d+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/i
);
/**
 * Check if value is a CSS Time.  css时间值
 */
export const isCSSTime = isPattern(/^\+?(\d*\.)?\d+(ms|s)$/i);

/**
 * 常用的正则表达式
 */
//手机号
export const phonePattern = /^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/;
//邮箱
export const emailPattern = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//联系方式正则
export const contactWayPattern =
	/(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}$)|(^1(3|4|5|6|7|8|9)\d{9}$)|(^([A-Za-z0-9_\-\\.])+@([A-Za-z0-9_\-\\.])+\.([A-Za-z]{2,4})$)/g;
//用户名正则，4到16位（字母，数字，下划线，减号）
export const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//正整数正则
export const nposPattern = /^\d+$/;
//负整数正则
export const nnegPattern = /^-\d+$/;
//整数正则
export const intPattern = /^-?\d+$/;
//正数正则
export const posPattern = /^\d*\.?\d+$/;
//负数正则
export const negPattern = /^-\d*\.?\d+$/;
//数字正则
export const numPattern = /^-?\d*\.?\d+$/;
//Email正则
export const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//固定电话号正则
export const telephonePattern = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,11}$/;
//身份证号（18位）正则
export const cP =
	/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
//身份证号（15位）正则
export const cP15 = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/;
//URL正则
export const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//ipv4地址正则
export const ipP =
	/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//RGB Hex颜色正则
export const colorPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
//日期正则，简单判定,未做月份及日期的判定
export const dP1 = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
//日期正则，复杂判定
export const dP2 =
	/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
//QQ号正则，5至11位
export const qqPattern = /^[1-9][0-9]{4,10}$/;
//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
export const wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//车牌号正则
export const cPattern =
	/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
//包含中文正则
export const cnPattern = /[\u4E00-\u9FA5]/;
//短信验证码正则(6位数组)
export const codePattern = /^\d{6}$/;
//年龄范围正则（16-999）
export const agePattern = /^1[6-9]$|^[2-9]\d{1}$|^1[0-4]\d{1}$|^999$/;
//薪资范围正则（1000-99999）
export const salaryPattern = /^\d{4,5}$/;
