import Api from "../../common/api.js"
import Vue from 'vue'
export default {
	register({ state, commit,dispatch },userInfo){
		state.username=userInfo.username
		state.password=userInfo.password
	  Api.register({...userInfo}).then(res=>{
			uni.setStorageSync('token',res.data.token)
			dispatch('getUserUpdate').then(r=>{
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			})
		})
	},
	loginUser({state, commit,dispatch},userInfo){
		state.username=userInfo.username
		state.password=userInfo.password
		 Api.login({...userInfo}).then(res=>{
			uni.setStorageSync('token',res.data.token)
			dispatch('getUserUpdate').then(r=>{
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			})
		})
	},
	getUserUpdate({ state,commit }){
		return new Promise((resolve,reject)=>{
		  Api.getUserInfo().then(res=>{
				commit("updateUserInfo", res.data)
					resolve( res.data)
			})
		})
	},
	checkupgrade({ state,commit },data){
		return new Promise((resolve,reject)=>{
		 Api.checkupgrade(data).then(res=>{
				commit("updatecheckupgrade", res.data)
				resolve(res.data)
			})
		})
	},
	loginOut(state){
		state.userInfo=null
	 let todayLogin = uni.getStorageSync('todayLogin') || {} 
		uni.clearStorageSync()
		uni.setStorageSync('todayLogin', todayLogin)	
		uni.reLaunch({
			url:'/pages/login/login'
		})
		
	}
}