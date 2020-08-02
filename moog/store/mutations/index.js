import store from "../"
export default {
	register(state,data){
		console.log(state)
		state.userInfo=data
	},
}