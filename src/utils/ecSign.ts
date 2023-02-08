/*
 * @Author: GengHH
 * @Date: 2022-12-05 10:47:53
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-07 17:40:31
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\src\utils\ecSign.ts
 */
import { Toast } from 'vant';
import { isEmptyObj } from './utils';

/**
 * 公用的数据签名方法
 * @param rawData 需要签名的明文数据
 * @returns
 */
const sign = (rawData: string): any => {
	if (!rawData) {
		Toast('缺少签名数据');
		return;
	}
	return new Promise((resolve, reject) => {
		window.ec
			.normalSign({ rawData: rawData })
			.then((res: any) => {
				console.log('%c Line:393 🍋 res 签名：', 'color:#e41a6a', res);
				let _res: any = res;
				if (res && typeof res === 'string') {
					_res = JSON.parse(res);
				}

				if (!_res || isEmptyObj(_res)) {
					reject('数据异常，签名失败！');
				} else if (_res.code === 0 || _res.code === '0') {
					if (!_res.signCert || !_res.signData) {
						reject('缺失数据，签名失败！');
					}
					// 返回成功的签名数据对象
					resolve(_res);
				} else {
					reject(_res.result || '签名失败');
				}
			})
			.catch((error: any) => {
				// Toast.fail('签名异常');
				reject(error || '签名异常');
			});
	});
};

export default sign;
