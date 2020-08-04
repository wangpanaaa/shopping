import store from "../"
export default {
	register(state,data){
		state.userInfo=data
	},
	loginOut(state){
		const userinfo=JSON.parse(JSON.stringify(state.userInfo))
		state.userInfo={}
		uni.clearStorageSync()
		uni.setStorageSync('username',userinfo.username)
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
}