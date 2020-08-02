import store from '../'
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
			setKoken(res.data.data.token)
			store.commit("register", res.data.data)
		})
	},
	loginUser({state, commit},userInfo){
		Vue.prototype.$http.post('/api/login/login',{...userInfo}).then(res=>{
			setKoken(res.data.data.token)
			store.commit("register", res.data.data)
		})
	}
}