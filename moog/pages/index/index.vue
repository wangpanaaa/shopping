<template>
	<view class="index-box">
		<view :class="modalName == 'DrawerModalL' || versionFlga == true || incomeFlag == true || NoticeFlag == true ? 'hidebox' : ''">
			<view class="bg-img title-img">
				<view class="title flex">
					<view>
						<span class="iconfont icon-mulu" @tap="showModal" data-target="DrawerModalL"></span>
						<image :src="settings.logo_tiny" class="shopping"></image>
					</view>
					<span class="iconfont icon-kefu" @tap="navigateTo('/pages/customerSerice/index')"></span>
				</view>
				<view class="title-text padding-116 padding-50" style="padding-bottom:16rpx;">{{ $t('index').index1 }}</view>
				<view class="title-text padding-50">{{ $t('index').index2 }}</view>
				<button class="cu-btn" style="margin-left: 50rpx;margin-top: 34rpx;" @tap="navigateTo('/pages/payment/financialManagement')">{{ $t('index').index3 }}</button>
			</view>
			<view class="flex box-list">
				<view style="text-align: center;" @tap="navigateTo('/pages/payment/financialManagement')">
					<view><image src="../../static/images/btn_financial.png" class="list-image"></image></view>
					<text style="font-size: 24rpx;">{{ $t('index').index4 }}</text>
				</view>
				<view style="text-align: center;" @tap="navigateTo('/pages/blance/index')">
					<view><image src="../../static/images/btn_top-up.png" class="list-image"></image></view>
					<text style="font-size: 24rpx;">{{ $t('index').index5 }}</text>
				</view>
				<view style="text-align: center;" @tap="navigateTo('/pages/cashout/index')">
					<view><image src="../../static/images/btn_withdrawal.png" class="list-image"></image></view>
					<text style="font-size: 24rpx;">{{ $t('index').index6 }}</text>
				</view>
				<view style="text-align: center;" @tap="navigateTo('/pages/index/inviteFriend')">
					<view><image src="../../static/images/btn_invite.png" class="list-image"></image></view>
					<text style="font-size: 24rpx;">{{ $t('index').index7 }}</text>
				</view>
			</view>

			<view class="flex flex-direction">
				<button class="cu-btn bg-grey lg place-order" @tap="navigateTo('/pages/order/orderGrabbing')">
					<span class="iconfont icon-che"></span>
					<text style="font-size: 30rpx;">{{ $t('index').index8 }}</text>
				</button>
			</view>

			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">{{ $t('index').index9 }}</view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">{{ $t('index').index10 }}</view>
			<view class="etsy-list">
				<view class="item-etsy" v-for="item of amazonList" :key="item.id" @tap="showAlert(item.lock)">
					<image :src="item.pic" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock" v-if="item.lock === 1"></image>
					<text class="etsy-text">{{ item.subtitle }}</text>
					<view class="etsy-Commission">{{ item.title }}</view>
				</view>
			</view>

			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">{{ $t('index').index13 }}</view>
			<view style="font-size: 40rpx;color: #333;padding-left: 32rpx;font-weight: bold;">{{ $t('index').index14 }}</view>
			<image :src="settings.ad_tiny" class="banner-image "></image>
			<view class="cu-list menu-avatar" style="padding: 10rpx 30rpx;height: 460rpx;">
				<view class="cu-item " style="border-radius: 10rpx;margin-bottom: 10rpx;" v-for="(item, index) in memberNewArr" :key="index">
					<view class="cu-avatar round lg" :style="{ 'background-image': 'url(' + item.headimg + ')' }"></view>
					<view class="content flex-sub">
						<view class="text-grey">{{ item.username }}</view>
						<view class="text-gray text-sm flex justify-between">{{ item.desc }}</view>
					</view>
					<view class="text-grey" style="width: 120rpx;">{{ item.amount }}</view>
				</view>
			</view>
			<view class="swiper-area">
				<swiper :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="advertisement" v-for="(value, index) in settings.ad_max" :key="index">
						<view style="padding: 0 30rpx 0 30rpx;height: 100%;"><image :src="value"></image></view>
					</swiper-item>
				</swiper>
			</view>
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 48rpx;padding-left: 28rpx;">{{ $t('index').index20 }}</view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">{{ $t('index').index21 }}</view>
			<view class="us-list flex">
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id=' + settings.profile)">
					<image src="../../static/images/company-profile.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">{{ $t('index').index22 }}</view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 280rpx;margin: 20rpx auto;">{{ $t('index').index20 }}</view>
				</view>
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id=' + settings.cooperation)">
					<image src="../../static/images/Agent-cooperation.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">{{ $t('index').index24 }}</view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 230rpx;margin: 20rpx auto;">{{ $t('index').index25 }}</view>
				</view>
				<view class="us-item" @tap="navigateTo('/pages/calculator/index')">
					<image src="../../static/images/Calculate-revenue.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">{{ $t('index').index26 }}</view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 280rpx;margin: 20rpx auto;">{{ $t('index').index27 }}</view>
				</view>
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id=' + settings.rule)">
					<image src="../../static/images/Rule-description.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">{{ $t('index').index28 }}</view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 280rpx;margin: 20rpx auto;">{{ $t('index').index29 }}</view>
				</view>
			</view>
			<view class="bottom-text">
				<view class="iocn-english">
					<image src="../../static/images/britain.png"></image>
					<text style="font-size: 28rpx;" @tap="navigateTo('./settingLanguage')">{{ $t('index').index30 }}</text>
				</view>
				<!-- <view style="font-size: 22rpx;text-align: center;margin-top: 33rpx;">Copyright © 2020. E-Nuggets All rights reserved.</view> -->
				<view style="height: 40rpx;background-color: #222F3E;"></view>
			</view>
		</view>

		<view class="cu-modal drawer-modal justify-start" :class="modalName == 'DrawerModalL' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog basis-xl" @tap.stop="">
				<view class="flex" @tap="navigateTo('/pages/personal/information')">
					<image :src="randomImg"></image>
					<text class="basis-name">{{ $t('drawer').index1 }}, {{ userInfo.username }}</text>
				</view>
				<view class="basis-list basis-border">
					<!-- <view class="basis-item animation-reverse" :class="[animation=='scale-ups'?'animation-scale-up':'']" @tap='navigateTo("../blance/index")'>Home</view> -->
					<view class="basis-item" @tap="navigateTo('/pages/blance/index')">
						{{ $t('drawer').index2 }}
						<text class="lg text-gray cuIcon-moreandroid" style="color: #FAA723;margin: 0 10rpx;"></text>
						<text style="font-family:Arial;font-size:34rpx;color: #FAA723;">{{ userInfo.balance }}</text>
					</view>
					<view class="basis-item " @tap="navigateTo('/pages/record/index')">{{ $t('drawer').index3 }}</view>
					<view class="basis-item " @tap="navigateTo('/pages/cashout/index')">{{ $t('drawer').index4 }}</view>
					<view class="basis-item " @tap="navigateTo('/pages/customerSerice/index')">{{ $t('drawer').index5 }}</view>
					<view class="basis-item " @tap="navigateTo('/pages/index/inviteFriend')">{{ $t('drawer').index6 }}</view>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item noActive" style="font-weight: bold;">{{ $t('drawer').index7 }}</view>
					<view class="basis-item " @tap="navigateTo('/pages/message/list')">{{ $t('drawer').index8 }}</view>
					<view class="basis-item " @click="navigateTo('/pages/accountDetail/index')">{{ $t('drawer').index9 }}</view>
					<view class="basis-item " @click="navigateTo('/pages/rechargeRecord/index')">{{ $t('drawer').index10 }}</view>
					<view class="basis-item " @click="navigateTo('/pages/withdrawalRecord/index')">{{ $t('drawer').index11 }}</view>
					<view class="basis-item " @click="navigateTo('/pages/team/index')">{{ $t('drawer').index12 }}</view>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item" style="font-weight: bold;">{{ $t('drawer').index13 }}</view>
					<view class="basis-item " @tap="navigateTo('./settingLanguage')">
						<image src="../../static/images/britain.png"></image>
						{{ $t('index').index30 }}
					</view>
					<view class="basis-item " @tap="navigateTo('/pages/personal/information')">{{ $t('drawer').index14 }}</view>
					<view class="basis-item" @tap="resetLogin">{{ $t('drawer').index15 }}</view>
					<view class="basis-item"></view>
				</view>
			</view>
		</view>

		<!-- 公告弹出 -->
		<view class="cu-modal notice-dal" :class="NoticeFlag == true ? 'show' : ''">
			<view class="cu-dialog">
				<view class="bg-img">
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="onNoticeFlag"><text class="iconfont icon-guanbi"></text></view>
					</view>
				</view>
				<view class="title">{{ noticedetail.title }}</view>
				<view class="conten" v-html="noticedetail.content"></view>
				<view class="flex flex-direction">
					<button class="cu-btn" @tap="onNoticeFlag">{{ $t('notice').index2 }}</button>
				</view>
			</view>
		</view>

		<!-- 昨日收益弹出 -->
		<view class="cu-modal notice-dal" :class="incomeFlag == true ? 'show' : ''">
			<view class="notice-img" v-if="teamreport">
				<text class="iconfont icon-guanbi" @tap="incomeFlag = false"></text>
				<image src="../../static/images/incomeImg.png"></image>
				<view class="box">
					<view class="text-ABC" style="font-size:38rpx;font-family:Bahnschrift;font-weight:bold;">{{$t('ToastProxy').index1}}</view>
					<view style="margin-top: 43rpx;" class="item">
						<text style="font-size:30rpx;">{{ teamreport.charge[2].name }}</text>
						<text style="font-size:34rpx;font-family:Arial;">{{ teamreport.charge[2].value }}</text>
					</view>
					<view style="margin-top: 40rpx;" class="item">
						<text style="font-size:30rpx;">{{ teamreport.team[1].name }}</text>
						<text style="font-size:34rpx;font-family:Arial;">{{ teamreport.team[1].value }}</text>
					</view>
					<view style="margin-top: 38rpx;" class="item">
						<text style="font-size:30rpx;">{{ teamreport.team[2].name }}</text>
						<text style="font-size:34rpx;font-family:Arial;color: #E9611B;">{{ teamreport.team[2].value }}</text>
					</view>
					<view class="flex flex-direction" style="margin-top: 70rpx;">
						<button class="cu-btn" @tap="toInviteMore" style="background-color: #FAA723;">{{$t('ToastProxy').index5}}</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 升级弹出 -->
		<view class="cu-modal notice-dal" :class="versionFlga == true ? 'show' : ''">
			<view class="version-img" v-if="versionInfo">
				<text class="iconfont icon-guanbi" @tap="versionFlga = false" v-if="versionInfo.isforce === 0"></text>
				<image src="../../static/images/version.png"></image>
				<view class="box"><view v-html="versionInfo.note"></view></view>
				<view class="flex flex-direction"><button class=" cu-btn update" @tap="openDown">{{$t('versionUpdate').index2}}</button></view>
			</view>
		</view>
	</view>
</template>

<script>
let memSetInterval = null;
// import { mapState } from 'vuex'
import status from '../../colorui/components/istatus.vue';
import Api from '../../common/api.js';
export default {
	components: {
		status
	},
	data() {
		return {
			versionFlga: false,
			versionInfo: {},
			CustomBar: this.CustomBar,
			modalName: '',
			amazonList: [],
			settings: '',
			memberNew: [],
			NoticeFlag: false,
			incomeFlag: false,
			noticedetail: {},
			teamreport: '',
			current: 0,
			randomImg: '',
			headimglist: [
				require('../../static/images/face/face1.png'),
				require('../../static/images/face/face2.png'),
				require('../../static/images/face/face3.png'),
				require('../../static/images/face/face4.png'),
				require('../../static/images/face/face5.png'),
				require('../../static/images/face/face6.png'),
				require('../../static/images/face/face7.png'),
				require('../../static/images/face/face8.png'),
				require('../../static/images/face/face9.png'),
				require('../../static/images/face/face10.png'),
				require('../../static/images/face/face11.png'),
				require('../../static/images/face/face12.png'),
				require('../../static/images/face/face13.png'),
				require('../../static/images/face/face14.png'),
				require('../../static/images/face/face15.png'),
				require('../../static/images/face/face16.png')
			],
			memberNewArr: []
		};
	},
	computed: {
		userInfo: function() {
			return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'));
		}
	},
	async onLoad() {
		
		//获取公告
		const notices = await Api.notice({ count: 1 });
		if (notices.data.length > 0) {
			this.noticedetail = notices.data[0];
			this.NoticeFlag = true;
		}
		
		const { ...data } = await Api.orderMall();
		this.amazonList = data.data;
		const list = await Api.membernews();
		this.memberNew = list.data;
		this.memberNewArr = this.memberNew.slice(0, 3);
		this.memberNewArr.forEach(item => {
			item.headimg = this.headimglist[Math.floor(Math.random() * 15)];
		});
		this.settings = JSON.parse(uni.getStorageSync('settings')) || {};

		//#ifdef APP-PLUS
		this.versionInfo = this.$store.state.version || {};
		if (this.versionInfo.status > 0) {
			this.versionFlga = true;
		}
		//#endif
	},
	async onShow() {
		//随机生成头像
		let randomImg = uni.getStorageSync('randomImg');
		if (!randomImg) {
			randomImg = this.headimglist[Math.floor(Math.random() * 15)];
			uni.setStorageSync('randomImg', randomImg);
		}
		this.randomImg = randomImg;

		memSetInterval = setInterval(async () => {
			this.memberNewArr = [];
			const list = await Api.membernews();
			this.memberNewArr = list.data.slice(0, 3);
			this.memberNewArr.forEach(item => {
				item.headimg = this.headimglist[Math.floor(Math.random() * 15)];
			});
		}, 10000);
		
		
		// this.signTime(async () => {
			
		// });
	},
	onHide() {
		clearInterval(memSetInterval);
	},
	methods: {
		openDown() {
			//#ifdef APP-PLUS
			if (this.versionInfo) {
				plus.runtime.openURL(this.versionInfo.url);
			}
			//#endif
		},
		toInviteMore() {
			this.incomeFlag = false;
			uni.setStorageSync('incomeFlag', this.incomeFlag);
			uni.navigateTo({
				url: '/pages/index/inviteFriend'
			});
		},
		async onNoticeFlag() {
			this.NoticeFlag = false;
			this.incomeFlag = true;
			const res=await Api.teamreport({ type: 2 })
			this.teamreport = res.data;
		},
		signTime(fn) {
			let date = new Date();
			let times = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
			let loginUser = JSON.parse(uni.getStorageSync('userInfo')).uid; //账号
			console.log(loginUser);
			let todayLogin = uni.getStorageSync('todayLogin') || {}; //获取此设备所有登记记录
			if (todayLogin[loginUser] != times) {
				//如果此设备的登录时间不是当天 发出请求
				//写代码
				if (fn) fn();
				//写代码
				//重新给用户id登记时间
				todayLogin[loginUser] = times;
				uni.setStorageSync('todayLogin', todayLogin);
			}
		},
		showAlert(e) {
			if (e === 0) {
				this.navigateTo('/pages/order/orderGrabbing');
			} else {
				uni.showToast({
					icon: 'none',
					title: 'Your balance is insufficient'
				});
			}
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		navigateTo(url, e) {
			clearInterval(memSetInterval);
			this.hideModal();
			uni.navigateTo({
				url: url
			});
		},
		resetLogin() {
			this.$store.dispatch('loginOut');
			// uni.reLaunch({
			// 	url:'/pages/login/login'
			// })
		}
	}
};
</script>

<style lang="scss" scoped>
@import '/colorui/animation.css';
.index-box {
	font-family: Myriad Pro;
}
.title-img {
	/*  #ifdef  APP-PLUS  */
	padding-top: var(--status-bar-height); //覆盖样式
	/*  #endif  */
	background-image: url('~@/static/images/title_bg.png');
	height: 578upx;
}
.title {
	color: #fff;
	align-items: center;
	justify-content: space-between;
	.icon-mulu {
		font-size: 64rpx;
		padding: 0 31rpx 0 30rpx;
		position: relative;
		top: 6rpx;
	}
	.icon-kefu {
		font-size: 50rpx;
		padding-right: 30rpx;
		padding-top: 20rpx;
	}
	.shopping {
		width: 200rpx;
		height: 40rpx;
	}
}
.title-text {
	font-size: 40rpx;
	color: #fff;
	font-weight: bold;
}
.padding-116 {
	padding: 116rpx 0 30rpx 0;
}
.padding-50 {
	padding-left: 50rpx;
}
.cu-btn {
	background-color: #f3cd6f;
	font-size: 28rpx;
}
.box-list {
	margin: -60rpx 20rpx 0 20rpx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 7rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
	opacity: 0.96;
	border-radius: 5rpx;
	height: 140rpx;
	align-items: center;
	justify-content: space-around;

	.icon-box {
		width: 82rpx;
		height: 64rpx;
	}
	.list-image {
		width: 79rpx;
		height: 79rpx;
	}
}
.place-order {
	height: 120rpx;
	margin: 30rpx 20rpx 0 20rpx;
	background-color: #faa41a;
	color: #000;
	box-shadow: 0px 7rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
	opacity: 0.96;
	border-radius: 5rpx;
}
.icon-che {
	font-size: 46rpx;
	margin-right: 26rpx;
}
.banner-image {
	height: 200rpx;
	padding: 0 30rpx 0 30rpx;
	margin-top: 20rpx;
	width: 100%;
}
.cu-item {
	height: 150rpx;
}
.advertisement {
	height: 375rpx;
	width: 100%;
	image {
		width: 100%;
		height: 100%;
	}
}
.us-list {
	margin: 35rpx 30rpx 61rpx 30rpx;
	flex-wrap: wrap;
	justify-content: space-between;
	.us-item {
		width: 330rpx;
		text-align: center;
		background-color: #fff;
		border-radius: 8rpx;
		margin-bottom: 30rpx;
		image {
			width: 180rpx;
			height: 180rpx;
			margin: 29rpx 0 22rpx 0;
		}
	}
}
.bottom-text {
	background-color: #222f3e;
	color: #fff;
	height: 74rpx;
	.iocn-english {
		height: 74rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	image {
		border-radius: 50%;
		width: 35rpx;
		height: 35rpx;
		margin-right: 22rpx;
	}
}
.etsy-list {
	display: flex;
	flex-wrap: wrap;
	.item-etsy {
		box-sizing: content-box;
		margin-top: 30rpx;
		position: relative;
		width: 330rpx;
		padding: 0 0 0 30rpx;
		.etsy-image {
			width: 330rpx;
			height: 200rpx;
		}
		.lock {
			position: absolute;
			width: 58rpx;
			height: 58rpx;
			left: 30rpx;
		}
		.etsy-text {
			position: absolute;
			bottom: 38%;
			color: #fff;
			left: 21%;
		}
		.etsy-Commission {
			margin-top: 20rpx;
			font-weight: bold;
			color: #333333;
			font-size: 30rpx;
		}
	}

	.item-etsy:nth-child(2n + 2) {
		padding: 0 30rpx;
	}
}
.hidebox {
	position: fixed;
}
/*  #ifdef APP-PLUS  */
.drawer-modal {
	margin-top: 50rpx;
}
/*  #endif  */

.basis-xl {
	overflow-y: scroll;
	z-index: 999;
	.flex {
		padding-left: 35rpx;
		height: 100rpx;
		align-items: center;
		border-bottom: 1px solid #dcdddd;
	}
	image {
		width: 60rpx;
		height: 60rpx;
		margin-right: 32rpx;
	}
	.basis-name {
		font-size: 38rpx;
		font-family: Bahnschrift;
		font-weight: bold;
	}
	.basis-list {
		.basis-item {
			padding-left: 35rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			color: #333333;
			font-size: 32rpx;
			font-family: Bahnschrift;
			image {
				width: 35rpx;
				height: 35rpx;
				border-radius: 50%;
				margin-right: 22rpx;
			}
		}
		.basis-item:active {
			background-color: #dcdddd;
			border-radius: 3rpx;
		}
		.noActive:active {
			background-color: transparent;
		}
	}
	.basis-border {
		border-bottom: 5rpx solid #dcdddd;
	}
}
.notice-img {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	width: 300px;
	max-width: 100%;
	border-radius: 5px;
	overflow: hidden;
	image {
		width: 100%;
		height: 362rpx;
		background: none;
	}
	.icon-guanbi {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 10rpx;
		top: 74rpx;
		z-index: 999;
	}
	.box {
		background-color: #fff;
		margin-top: -20rpx;
		padding: 24rpx 35rpx 0 35rpx;
		.item {
			display: flex;
			justify-content: space-between;
		}
	}
}
.notice-dal {
	font-family: Bahnschrift;
	.bg-img {
		background-image: url(../../static/images/noticedetail.png);
		height: 240rpx;
	}
	.title {
		margin: 32rpx 0 16rpx 0;
		font-weight: bold;
		font-size: 40rpx;
		color: #333333;
	}
	.conten {
		margin: 0 20rpx 52rpx 20rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		text-align: justify;
		max-height: 320rpx;
		overflow: scroll;
	}
	.flex {
		align-items: center;
	}
	.cu-btn {
		width: 520rpx;
		height: 84rpx;
		margin-bottom: 40rpx;
		font-size: 34rpx;
		font-family: Myriad Pro;
	}
	.icon-guanbi {
		width: 50rpx;
		height: 50rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 10rpx;
		top: 74rpx;
		z-index: 999;
	}
}
.swiper-area {
	margin-top: 24rpx;
	height: 375rpx;
	uni-swiper {
		height: 100%;
	}
}
.version-img {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	width: 300px;
	max-width: 100%;
	border-radius: 5px;
	overflow: hidden;
	image {
		width: 100%;
		height: 290rpx;
		background: none;
	}
	.icon-guanbi {
		position: absolute;
		width: 58rpx;
		height: 58rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 0;
		top: 20px;
		z-index: 999;
	}
	.box {
		background-color: #fff;
		margin-top: -20rpx;
		padding: 50rpx 46rpx 95rpx 46rpx;
		height: 300rpx;
		overflow: scroll;
	}
	.flex {
		background-color: #fff;
	}
	.update {
		margin: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 34rpx;
		background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
		border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
	}
}
</style>
