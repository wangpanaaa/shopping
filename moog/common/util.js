const msg = (title, duration = 1500, mask = false, position = "center", icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		position,
		icon
	});
}
//泰脉常用热门城市
const hotCity = [{
	center: "119.296389,26.074268",
	fullname: "福建省 福州市",
	id: 350100,
	level: 2,
	name: "福州市",
	path: "350000,350100",
	pid: 350000
}, {
	center: "104.066794,30.572893",
	fullname: "四川省 成都市",
	id: 510100,
	level: 2,
	name: "成都市",
	path: "510000,510100",
	pid: 510000
}, {
	center: "116.407394,39.904211",
	fullname: "北京市 北京城区",
	id: 110100,
	level: 2,
	name: "北京城区",
	path: "110000,110100",
	pid: 110000
}, {
	center: "106.551643,29.562849",
	fullname: "重庆市 重庆城区",
	id: 500100,
	level: 2,
	name: "重庆城区",
	path: "500000,500100",
	pid: 500000
}, {
	center: "126.534967,45.803775",
	fullname: "黑龙江省 哈尔滨市",
	id: 230100,
	level: 2,
	name: "哈尔滨市",
	path: "230000,230100",
	pid: 230000
}, {
	center: "121.614848,38.914086",
	fullname: "辽宁省 大连市",
	id: 210200,
	level: 2,
	name: "大连市",
	path: "210000,210200",
	pid: 210000
}, {
	center: "120.382621,36.067131",
	fullname: "山东省 青岛市",
	id: 370200,
	level: 2,
	name: "青岛市",
	path: "370000,370200",
	pid: 370000
}, {
	center: "120.209789,30.24692",
	fullname: "浙江省 杭州市",
	id: 330100,
	level: 2,
	name: "杭州市",
	path: "330000,330100",
	pid: 330000
}, {
	center: "112.938884,28.22808",
	fullname: "湖南省 长沙市",
	id: 430100,
	level: 2,
	name: "长沙市",
	path: "430000,430100",
	pid: 430000
}, {
	center: "117.120098,36.6512",
	fullname: "山东省 济南市",
	id: 370100,
	level: 2,
	name: "济南市",
	path: "370000,370100",
	pid: 370000
}]

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
const debounce = (fn, t) => {
	let delay = t || 500;
	let timer;
	console.log(fn)
	console.log(typeof fn)
	return function() {
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, args);
		}, delay);
	}
};


/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
const throttle = (fn, wait = 2000) => {
	var last = 0
	return function() {
		var nows = Date.now()
		if (nows - last >= wait) {
			fn.apply(this, arguments)
			last = nows
		}
	}
}

const md5Sort = (data={}) => {
		var arr = [];
		// var sign={secret:'061727fadfaf55a85'} //正式线密匙
		  var sign={secret:'061727f855a87'}//测试线密匙
		let signData=Object.assign({},data,sign)
		for (var i in signData) {
			arr.push(i);
		}
		// arr.push(...[{id:3},{id:8},{id:358},{id:9},{id:10},{id:341},{id:344},{id:1}])
		//外层循环，控制趟数，每一次找到一个最大值
		for (var i = 0; i < arr.length - 1; i++) {
			for (var j = 0; j < arr.length - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		var sortString= arr.map(item=>{
		    item=item+'='+signData[item]
		    return item
		}).join('&')
		return sortString
		;
	}
	module.exports = {
		msg,
		hotCity,
		debounce,
		throttle,
		md5Sort
	}
