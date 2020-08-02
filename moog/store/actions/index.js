
import Vue from 'vue'

function setKoken(token){
	uni.setStorageSync('token',token)
	uni.redirectTo({
	    url: '/pages/index/index'
	});
}

export default {
	register({ state, commit },userInfo){
		Vue.prototype.$http.post('/api/login/register',{...userInfo}).then(res=>{
			setKoken(res.data.token)
			commit("register", res.data)
		})
	},
	loginUser({state, commit},userInfo){
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
	}
}