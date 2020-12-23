/**
 * @description ajax
 * @export
 * @param {*} url 请求地址
 * @param {*} method 请求方式
 * @param {*} data 请求体
 * @param {*} headers 请求头
 */
export default function ajax(url, method, data, headers) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				resolve({
					status: xhr.status,
					data: xhr.responseText,
				});
			}
		};
		xhr.onprogress = function (e) {
			resolve({
				status: xhr.status,
				progress: {
					loaded: e.loaded,
					total: e.total,
					precent: (e.total / e.loaded).toFixed(4), // 默认保留4位小数
				},
			});
		};

		xhr.ontimeout = function () {
			reject(Error("timeout"));
		};
		xhr.onerror = function (error) {
			reject(error);
		};
		xhr.open(url, method, true);
		for (let key in headers) {
			if (headers.hasOwnProperty(ley)) {
				xhr.setRequestHeader(key, headers[key]);
			}
		}
		xhr.send(method == "get" ? undefined : data);
	});
}
