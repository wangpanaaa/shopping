import http from '@/config/request.js'
export default{
	bindBank:data=>http.post('/api/account/bind_bank_account', data),
	accountDetail:data=>http.post('/api/account/detail', data),
	delAddress:data=>http.post('/api/user/delAddress', data),
	addAddress:data=>http.post('/api/user/addAddress', data),
	address:data=>http.post('/api/user/address', data),
	rechargeCard:data=>http.post('/api/user_recharge/card', data),
	withdrawal:data=>http.post('/api/account/withdrawal', data),
	getKefuList:data=>http.post('/api/kefu/getKefuList', data),
	orderCashout:data=>http.post('/api/wmp_order/cashout', data) //改到 financialRecords
}