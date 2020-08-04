<template>
	<view class="index-box">
		<view :class="[modalName=='DrawerModalL'?'hidebox':'']">
			<view class="bg-img title-img">
				<status></status>
				<view class="title flex">
					<view>
						<span class="iconfont icon-mulu" @tap="showModal" data-target="DrawerModalL"></span>
						<image :src="settings.logo_tiny" class="shopping"></image>
					</view>
					<span class="iconfont icon-kefu" @tap='navigateTo("/pages/customerSerice/index")'></span>
				</view>
				<view class="title-text padding-116 padding-50">
					The new economy
				</view>
				<view class="title-text padding-50">Invite commissions</view>
				<button class="cu-btn" style="margin-left: 50rpx;margin-top: 44rpx;" @tap='navigateTo("/pages/payment/financialManagement")'>Start the journey of wealth</button>
			</view>
			<view class="flex box-list">
					<view style="text-align: center;" @tap='navigateTo("/pages/payment/financialManagement")'>
						<view>
							<image src="../../static/images/btn_financial.png" class="list-image"></image>
						</view>
						<text style="font-size: 24rpx;">Financial</text>
					</view>
				<view style="text-align: center;" @tap='navigateTo("/pages/blance/index")'>
					<view>
						<image src="../../static/images/btn_top-up.png" class="list-image"></image>
					</view>
					<text style="font-size: 24rpx;">Top-up</text>
				</view>
				<view style="text-align: center;" @tap='navigateTo("/pages/cashout/index")'>
					<view>
						<image src="../../static/images/btn_withdrawal.png" class="list-image"></image>
					</view>
					<text style="font-size: 24rpx;" >Withdrawal</text>
				</view>
				<view style="text-align: center;" @tap="navigateTo('/pages/index/inviteFriend')">
					<view>
						<image src="../../static/images/btn_invite.png" class="list-image"></image>
					</view>
					<text style="font-size: 24rpx;" > Invite </text>
				</view>
			</view>

			<view class="flex flex-direction">
				<button class="cu-btn bg-grey lg place-order" @tap="navigateTo('/pages/order/orderGrabbing')">
					<span class="iconfont icon-che"></span>
					<text style="font-size: 30rpx;">Place an order </text>
				</button>
			</view>
			
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Select member session </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">Mission Hall </view>
			<view class="etsy-list">
				<view class="item-etsy" v-for="item of amazonList" :key='item.id' @tap="item.lock===0?navigateTo('/pages/order/orderGrabbing'):''">
					<image :src="item.pic" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock" v-if="item.lock===1" ></image>
					<text class="etsy-text">{{item.subtitle}}</text>
					<view class="etsy-Commission">
						{{item.title}}
					</view>
				</view>
				
			</view>
			
			
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Three-level proxy model </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">Member News </view>
			<image :src="settings.ad_tiny" class="banner-image"></image>
			<view class="cu-list menu-avatar" style="padding: 10rpx 30rpx;height: 460rpx;" >
				<view class="cu-item" style="border-radius: 10rpx;margin-bottom: 10rpx;" v-for="(item,index) in memberNewArr" :key='index'>
					<view class="cu-avatar round lg" :style="{'background-image':'url(' + item.headimg + ')'}"></view>
					<view class="content flex-sub">
						<view class="text-grey">{{item.username}}</view>
						<view class="text-gray text-sm flex justify-between">{{item.desc}}</view>
					</view>
					<view class="text-grey"> {{item.amount}}</view>
				</view>
				
			</view>
			<image :src="settings.ad_max" class="advertisement"></image>
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Professional grab order platform  </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">ABOUT US  </view>
			<view class="us-list flex">
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id='+settings.profile)">
					<image src="../../static/images/company-profile.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;" >company profile </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Professional grab order  platform  </view>
				</view>
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id='+settings.cooperation)">
					<image src="../../static/images/Agent-cooperation.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Agent cooperation   </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">We look forward to  your joining     </view>
				</view>
				<view class="us-item">
					<image src="../../static/images/Calculate-revenue.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Calculate revenue   </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Earn commissions easily     </view>
				</view>
				<view class="us-item" @tap="navigateTo('/pages/index/noticedetail?id='+settings.rule)">
					<image src="../../static/images/Rule-description.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Rule description    </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Keep your funds safe  </view>
				</view>
			</view>
			<view class="bottom-text">
				<view class="iocn-english">
					<image src="../../static/images/britain.png"></image>
					<text style="font-size: 28rpx;" @tap="navigateTo('./settingLanguage')">EngLish</text>
				</view>
				<view style="font-size: 22rpx;text-align: center;margin-top: 33rpx;">Copyright © 2020. E-Nuggets All rights reserved.</view>
			</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-xl" @tap.stop="" >
				<view class="flex">
					<image :src="randomImg"></image>
					<text class="basis-name">Hello, {{userInfo.nickname}}</text>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item">Home</view>
					<view class="basis-item" @tap='navigateTo("../blance/index")'>Account 
						<text class="lg text-gray cuIcon-moreandroid" style="color: #FAA723;margin: 0 10rpx;"></text>
						<text style="font-family:Arial;font-size:34rpx;color: #FAA723;"> {{userInfo.balance}}</text>
					</view>
					<view class="basis-item" @tap='navigateTo("/pages/record/index")'>Orders</view>
					<view class="basis-item" @tap='navigateTo("/pages/cashout/index")'>Cash Out</view>
					<view class="basis-item" @tap='navigateTo("/pages/customerSerice/index")'>Customer Service</view>
					<view class="basis-item" @tap="navigateTo('/pages/index/inviteFriend')">Invite Friends</view>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item" style="font-weight: bold;">Explore</view>
					<view class="basis-item" @tap='navigateTo("/pages/index/noticedetail")'>Notice</view>
					<view class="basis-item">Account Details</view>
					<view class="basis-item">Recharge Record</view>
					<view class="basis-item">Withdrawal Record</view>
					<view class="basis-item">Team Report</view>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item" style="font-weight: bold;">Settings</view>
					<view class="basis-item" @tap='navigateTo("./settingLanguage")'>
						<image src="../../static/images/britain.png"></image>
						English
					</view>
					<view class="basis-item" @tap='navigateTo("/pages/personal/information")'>Personal information</view>
					<view class="basis-item" @tap='resetLogin'>Sign Out</view>
				</view>
			</view>
		</view>
		
		<view class="cu-modal notice-dal" :class="NoticeFlag==true?'show':''">
			<view class="cu-dialog">
				<view class="bg-img">
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close "></text>
						</view>
					</view>
				</view>
				<view class="title">{{noticedetail.title}}</view>
				<view class="conten" v-html="noticedetail.content">                 
				</view>
				<view class="flex flex-direction"><button class="cu-btn" @tap="NoticeFlag = false">Confirm</button></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	let memSetInterval=null;
	// import { mapState } from 'vuex'
	import status from "../../colorui/components/istatus.vue"
	export default {
		components:{
			status
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: '',
				amazonList:[],
				settings:'',
				memberNew:[],
				NoticeFlag:false,
				noticedetail:{},
				current:0,
				randomImg:'',
				headimglist:[
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
				memberNewArr:[]
			}
		},
		computed: {
			userInfo:function (){
				return this.$store.state.userInfo  || JSON.parse(uni.getStorageSync('userInfo'))
			}
		},
		async onLoad() {
			//获取公告
			const notices=await this.$http.post('/api/config/noticedetail')
			this.noticedetail=notices.data
			if(this.noticedetail.content){
				this.NoticeFlag=true
			}
			
			//更新用户信息
			this.$store.dispatch('getUserUpdate');
			const {...data}=await this.$http.post('/api/order/mall')
			this.amazonList=data.data
			const list=await this.$http.post('/api/user/membernews')
			this.memberNew=list.data
			this.memberNewArr=this.memberNew.slice(0,3)
			this.memberNewArr.forEach(item=>{
				item.headimg=this.headimglist[Math.floor(Math.random()*15)]
			})
			this.settings=JSON.parse(uni.getStorageSync('settings')) || {}
		},
		async onShow() {
			//随机生成头像
			let randomImg=uni.getStorageSync('randomImg')
			if(!randomImg){
				randomImg=this.headimglist[Math.floor(Math.random()*15)]
				uni.setStorageSync('randomImg',randomImg)
			}
			this.randomImg=randomImg
			
			memSetInterval=setInterval(async ()=>{
				this.memberNewArr=[]
				const list=await this.$http.post('/api/user/membernews')
				this.memberNewArr=this.memberNew.slice(0,3)
				this.memberNewArr.forEach(item=>{
					item.headimg=this.headimglist[Math.floor(Math.random()*15)]
				})
			},10000)
		},
		onHide() {
			clearInterval(memSetInterval)
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			navigateTo(url) {
				clearInterval(memSetInterval)
				uni.navigateTo({
					url:url
				})
			},
			resetLogin(){
				this.$store.commit('loginOut')
				// uni.reLaunch({
				// 	url:'/pages/login/login'
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-box{
		font-family:Myriad Pro;
	}
	.title-img{
		background-image: url('~@/static/images/title_bg.png');
		height: 578upx;
	}
	.title{
		color: #fff;
		align-items: center;
		justify-content: space-between;
		.icon-mulu {
			font-size: 64rpx;
			padding:0 31rpx 0 30rpx;
		}
		.icon-kefu{
			font-size: 50rpx;
			padding-right: 30rpx;
			padding-top: 20rpx;
		}
		.shopping{
			width: 200rpx;
			height:40rpx;
		}
	}
	.title-text{
		font-size: 40rpx;
		color: #fff;
		font-weight: bold;
	}
	.padding-116{
		padding: 116rpx 0 30rpx 0;
	}
	.padding-50{
		padding-left:50rpx ;
	}
	.cu-btn{
		background-color: #F3CD6F;
		font-size: 28rpx;
	}
	.box-list{
		margin: -60rpx 20rpx 0 20rpx;
		background: #fff;
		height: 140rpx;
		align-items: center;
		justify-content: space-around;
		.icon-box{
			width: 82rpx;
			height: 64rpx;
		}
		.list-image{
			width: 79rpx;
			height: 79rpx;
		}
	}
	.place-order{
		height: 120rpx;
		margin: 30rpx 20rpx 0 20rpx;
		background-color: #FAA41A;
		color: #000;
	}
	.icon-che{
		font-size: 46rpx;
		margin-right: 26rpx;
	}
	.banner-image{
		height: 200rpx;
		padding: 40rpx 30rpx 0 30rpx;
		width: 100%;
	}
	.cu-item{
		height: 150rpx;
	}
	.advertisement{
		height: 375rpx;
		width: 100%;
		padding: 34rpx 30rpx 0 30rpx;
	}
	.us-list{
		margin: 35rpx 30rpx 69rpx 30rpx;
		flex-wrap: wrap;
		justify-content: space-between;
		.us-item{
			text-align: center;
			background-color: #fff;
			border-radius: 8rpx;
			margin-bottom: 30rpx;
			image{
				width: 90rpx;
				height: 90rpx;
				margin: 29rpx 0 24rpx 0;
			}
		}
	}
	.bottom-text{
		background-color: #222F3E;
		color: #fff;
		height: 74px;
		.iocn-english{
			padding-top: 33rpx;
			display: flex;
			justify-content: center;
		}
		image{
			border-radius:50% ;
			width: 18px;
			height: 18px;
			margin-right: 22rpx;
		}
	}
	.etsy-list{
		display: flex;
		flex-wrap: wrap;
		.item-etsy{
			margin-top: 30rpx;
			position: relative;
			width: 50%;
			padding: 0 30rpx;
			.etsy-image{
				height: 200rpx;
			}
			.lock{
				position: absolute;
				width: 58rpx;
				height: 58rpx;
				left: 30rpx;
			}
			.etsy-text{
				position: absolute;
				bottom: 38%;
				color: #fff;
				left: 21%;
			}
			.etsy-Commission{
				margin-top: 20rpx;
				font-weight:bold;
				color: #333333;
				font-size: 30rpx;
			}
		}
	}
	.hidebox{
		position: fixed;
	}
	/*  #ifdef APP-PLUS  */
		.drawer-modal{
			margin-top: 50rpx;
		}
	/*  #endif  */
	
	.basis-xl{
		overflow-y: scroll;
		z-index: 999;
		.flex{
			padding-left: 35rpx;
			height: 100rpx;
			align-items: center;
			border-bottom: 1px solid #DCDDDD;
		}
		image{
			width:60rpx;
			height:60rpx;
			margin-right: 32rpx;
		}
		.basis-name{
			font-size:38rpx;
			font-family:Bahnschrift;
			font-weight:bold;
		}
		.basis-list{
			padding-left: 35rpx;
			.basis-item{
				height: 100rpx;
				display: flex;
				align-items: center;
				color: #333333;
				font-size:32rpx;
				font-family:Bahnschrift;
				image{
					width: 35rpx;
					height: 35rpx;
					border-radius:50% ;
					margin-right: 22rpx;
				}
			}
		}
		.basis-border{
			border-bottom:5rpx solid #DCDDDD ;
		}
	}
	.notice-dal{
		font-family:Bahnschrift;
		.bg-img{
			background-image: url(../../static/images/noticedetail.png);
			height: 240rpx;
		}
		.title{
			margin: 52rpx 0 46rpx 0;
			font-weight:bold;
			font-size:40rpx;
			color: #333333;
		}
		.conten{
			margin: 0 20rpx 52rpx 20rpx;
			line-height:40rpx;
			font-size:24rpx;
			text-align: left;
		}
		.flex{
			align-items: center;
		}
		.cu-btn{
			width: 520rpx;
			height: 84rpx;
			margin-bottom: 40rpx;
			font-size:34rpx;
			font-family:Myriad Pro;
		}
	}
</style>
