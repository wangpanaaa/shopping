import store from "../"
export default {
	register(state,data){
		state.userInfo=data
	},
	removeData(state){
		state.userInfo={}
		uni.clearStorageSync()
	}
}