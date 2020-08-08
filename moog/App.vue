<script>
	import Vue from 'vue';
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					}
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			}); 
		// #ifdef APP-PLUS
				let main = plus.android.runtimeMainActivity();
				//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台
				plus.runtime.quit = function() {
					main.moveTaskToBack(false);
				};
				//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast
				plus.nativeUI.toast = (function(str) {
					if (str == 'Press again to hide the app') {
						main.moveTaskToBack(false); 
						return false;   
					} else if(str=='再按一次退出应用'){
						uni.showToast({
							title: 'Press again to hide the app',
							icon: 'none',
							duration:2000
						})
					}
				}); 
		// #endif
     const token = uni.getStorageSync('token');
     if(token){
     		uni.redirectTo({
     			url:'../index/index'
     		})
     }
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "static/css/nav.css";
	@import "static/css/iconfont.css";

	/*每个页面公共css */
	Page {
		height: 100%;
	}

	uni-page-body,
	body {
		height: 100%;
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	.uni-picker-container {
		z-index: 9999;

	}

	.uni-video-container {
		background-color: #fff
	}
</style>
