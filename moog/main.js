import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from './config/lang.js'
import http from '@/config/request.js'
Vue.use(VueI18n)
Vue.component('cu-custom',cuCustom)


Vue.config.productionTip = false



App.mpType = 'app'

const i18n = new VueI18n({ 
  messages
}) 


Vue.prototype._i18n = i18n
Vue.prototype.$http = http
const app = new Vue({
	i18n,
    ...App,
	store
})
app.$mount()

 



