import Api from "../../common/api.js"
import Vue from 'vue'
import { socketUrl } from '../../config/baseUrl.js';

var socketTask = uni.connectSocket({
	url: socketUrl,
	header: {
		'language': 'en-us'
	},
	success:(r)=>{
		return new Promise((resolve, reject)=>{
			resolve(r)
		})
	}
});

export default {
	register({
		state,
		commit,
		dispatch
	}, userInfo) {
		uni.showLoading()
		state.username = userInfo.username
		state.password = userInfo.password
		Api.register({ ...userInfo
		}).then(res => {
			uni.setStorageSync('token', res.data.token)
			dispatch('getUserUpdate').then(r => {
				uni.hideLoading()
				state.setWebSocket=setInterval(()=>{
					socketTask.send({
						data:'hello'+r.uid
					})
				},10000)
				uni.redirectTo({
					url: '/pages/index/index'
				});
			})
		})
	},
	loginUser({
		state,
		commit,
		dispatch
	}, userInfo) {
		uni.showLoading()
		state.username = userInfo.username
		state.password = userInfo.password
		Api.login({ ...userInfo
		}).then(res => {
			uni.setStorageSync('token', res.data.token)
			dispatch('getUserUpdate').then(r => {
				uni.hideLoading()
				state.setWebSocket=setInterval(()=>{
					socketTask.send({
						data:'hello'+r.uid
					})
				},10000)
				uni.redirectTo({
					url: '/pages/index/index'
				});
			})
		})
	},
	getUserUpdate({
		state,
		commit
	}) {
		return new Promise((resolve, reject) => {
			Api.getUserInfo().then(res => {
				commit("updateUserInfo", res.data)
				resolve(res.data)
			})
		})
	},
	checkupgrade({
		state,
		commit
	}, data) {
		return new Promise((resolve, reject) => {
			Api.checkupgrade(data).then(res => {
				commit("updatecheckupgrade", res.data)
				resolve(res.data)
			})
		})
	},
	loginOut(state) {
		state.userInfo = null
		socketTask.close()
		clearInterval(state.setWebSocket);
		state.setWebSocket=null;
		let todayLogin = uni.getStorageSync('todayLogin') || {}
		uni.clearStorageSync()
		uni.setStorageSync('todayLogin', todayLogin)
		uni.reLaunch({
			url: '/pages/login/login'
		})

	}
}
