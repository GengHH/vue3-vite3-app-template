/// 内部使用
window.ecInitOk = false;
window.ec = {
	ready(callback) {
		setTimeout(function () {
			if (window.ecInitOk == false) {
				window.ecInitOk = true;
				callback();
			}
		}, 1000);
		if (window.ecInitOk) {
			callback();
			return;
		}
		setupEcJsBridge(function (bridge) {
			console.log('setupEcJsBridge done');
			bridge.init(function (data, responseCallback) {
				console.log('defaultHandler get open ', data);
				var res = 'defaultHandler res from js';
				responseCallback(res);
			});

			bridge.registerHandler('JSEcho', function (data, responseCallback) {
				console.log('JSEcho get open ', data);
				var res = 'JSEcho res from js';
				responseCallback(res);
			});
		});
		if (window.EcJsBridge) {
			console.log('EcJsBridge done when body load');
		} else {
			document.addEventListener(
				'EcJsBridgeReady',
				function () {
					window.ecInitOk = true;
					callback();
					console.log('EcJsBridge done after EcJsBridgeReady');
				},
				false
			);
		}
	},
	registerHandler(handlerName, handler) {
		window.EcJsBridge.registerHandler(name, handler);
	},
	// 正常签名功能（非签章）
	async normalSign(params) {
		return await _ec_native_common_handler('ec_normalSign', params);
	},
};
//模拟测试数据
let _ec_testData = {
	ec_normalSign: JSON.stringify({
		code: '0',
		result: '签名成功',
		containerId: 'xxx',
		signCert: 'xxx',
		signData: 'xxx',
	}),
};

function excelFlutterJsChannel(name, mssage) {
	if (window[name]) {
		window[name].postMessage(mssage);
	}
}

function setupEcJsBridge(callback) {
	// 初始化 企业云 jsbirdge
	// console.log(window.EcJsBridge)
	if (window.EcJsBridge) {
		return callback(window.EcJsBridge);
	}
	// 初始化 企业云 js回调
	if (window.EcJBCallbacks) {
		return window.EcJBCallbacks.push(callback);
	}
	window.EcJBCallbacks = [callback];
	// only take effect on iOS
	var EcJBIframe = document.createElement('iframe');
	EcJBIframe.style.display = 'none';
	// EcJBIframe.src = 'https://__ec_js_bridge__';
	document.documentElement.appendChild(EcJBIframe);
	// console.log("=====x=x=x=x=x")
	setTimeout(function () {
		document.documentElement.removeChild(EcJBIframe);
	}, 0);
	if (window['EcConsoleLog']) {
		console.log = function (str) {
			// console.log(str)
			excelFlutterJsChannel('EcConsoleLog', JSON.stringify({ type: 'log', msg: str }));
		};
		console.error = function (str) {
			// console.error(str)
			excelFlutterJsChannel('EcConsoleLog', JSON.stringify({ type: 'err', msg: str }));
		};
		window.onerror = function (message, source, lineno, colno, error) {
			console.error(
				JSON.stringify({
					message: message,
					source: source,
					lineno: lineno,
					colno: colno,
					error: error,
				})
			);
		};
	}
}

function sendHello() {
	window.EcJsBridge.send('hello', function (responseData) {
		console.log('sendHello res ', responseData);
	});
}
function callNotExistHandler() {
	window.EcJsBridge.callHandler('NotExist', 'callNative from js', function (responseData) {
		console.log('callNotExistHandler res ', responseData);
	});
}

async function ec_getScreenInfo() {
	return await _ec_native_common_handler('ec_getScreenInfo');
}

async function _ec_native_common_handler(funcName, param) {
	return new Promise((resolve, reject) => {
		if (!window.EcJsBridge) {
			resolve(_ec_testData[funcName]);
		}
		window.EcJsBridge.callHandler(
			'ec_native_common_handler',
			JSON.stringify({ funcName: funcName, param: param }),
			function (responseData) {
				// console.log(responseData)
				resolve(JSON.parse(responseData));
			}
		);
	});
}
