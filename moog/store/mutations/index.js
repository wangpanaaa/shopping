import store from "../"
export default {
	register(state,data){
		state.userInfo=data
	},
	loginOut(state){
		state.userInfo={}
		uni.clearStorageSync()
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
}