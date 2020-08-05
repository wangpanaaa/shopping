
import Vue from 'vue'

function setKoken(token){
	uni.setStorageSync('token',token)
	uni.redirectTo({
	    url: '/pages/index/index'
	});
}

export default {
	register({ state, commit },userInfo){
		state.username=userInfo.username
		state.password=userInfo.password
		Vue.prototype.$http.post('/api/login/register',{...userInfo}).then(res=>{
			setKoken(res.data.token)
			commit("register", res.data)
		})
	},
	loginUser({state, commit},userInfo){
		state.username=userInfo.username
		state.password=userInfo.password
		Vue.prototype.$http.post('/api/login/login',{...userInfo}).then(res=>{
			setKoken(res.data.token)
			commit("register", res.data)
		})
	},
	getUserUpdate({ state }){
		Vue.prototype.$http.post('/api/account/getUserInfo').then(res=>{
			uni.setStorageSync('userInfo',JSON.stringify(res.data))
			state.userInfo=res.data
		})
	},
	loginOut(state){
		state.userInfo=null
		uni.clearStorageSync()
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
}