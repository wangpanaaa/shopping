import Request from '@/utils/luch-request/index.js'


const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('token')
	} catch (e) {
		//TODO handle the exception
	}
	return token
}

const http = new Request()
http.setConfig((config) => { /* 设置全局配置 */
	let baseURL = 'http://114.116.82.30/api/order/mall'
	// #ifdef H5
	baseURL = '/api'
	// #endif
	config.baseURL = baseURL
	config.header = {
		...config.header,
	}
	return config
})


http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作 */
	config.header = {
		...config.header,
		token: getTokenStorage()
	}
	/*
 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
   return Promise.reject(config)
 }
 */
	uni.showLoading({
		title:'loading'
	})
	return config
}, (config) => {
	return Promise.reject(config)
})


http.interceptors.response.use(async (response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
	uni.hideLoading()
	if (response.data.code !== 0) { // 服务端返回的状态码不等于200，则reject()
		uni.showToast({
			mask:true,
			icon:'none',
			title:response.data.msg
		})
	  return Promise.reject(response)
	}
	return response.data
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
	return Promise.reject(response)
})

export default http
