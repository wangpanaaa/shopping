class request {
	constructor() {
		this._header = {
			// 'Content-Type': 'multipart/form-data'
		}
	}
	/**
	 * GET类型的网络请求
	 */
	getRequest(url, data, header) {
		return this.requestAll(url, data, header, 'GET')
	}
	/**
	 * DELETE类型的网络请求
	 */
	deleteRequest(url, data, header) {
		return this.requestAll(url, data, header, 'DELETE')
	}

	/**
	 * PUT类型的网络请求
	 */
	putRequest(url, data, header) {
		return this.requestAll(url, data, header, 'PUT')
	}

	/**
	 * POST类型的网络请求
	 */
	postRequest(url, data, header) {
		return this.requestAll(url, data, header, 'POST')
	}
	/**
	 * 网络请求
	 */
	requestAll(url, data, header, method) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: 'http://271497cz25.qicp.vip/api/' + url,
				data: data,
				header: header,
				method: method,
				success: (res) => {
					console.log(res.data)
					if (res.data.code === 500) {
						uni.showToast({
							title: res.data.msg,
							duration: 2000
						});
					} else {
						resolve(res)
					}
				}
			})
		})
	}
}

export default request
