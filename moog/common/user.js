import request from './request.js'

class user {
	constructor() {
	    this._defaultHeader={
			'Content-Type':'multipart/form-data'
		}
		this._requst = new request
	}
	login(data) {
		return this._requst.postRequest('login/login',data,this._defaultHeader).then(res=>res.data)
	}
	
}

export default user