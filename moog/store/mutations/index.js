import store from "../"
export default {
	updateUserInfo(state,data){
		uni.setStorageSync('userInfo',JSON.stringify(data))
		state.userInfo=data
	},
	updatecheckupgrade(state,data){
		console.log(data)
		state.version=data
	},
	updateIsNet(state,data){
		state.isNet=data
	}
}