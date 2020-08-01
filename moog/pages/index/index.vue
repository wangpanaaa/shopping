<template>
	<view>
		<view :class="modalName=='DrawerModalL'?'hidebox':''">
			<view class="bg-img title-img">
				<view class="title flex">
					<view>
						<span class="iconfont icon-mulu" @tap="showModal" data-target="DrawerModalL"></span>
						<image src="../../static/images/shopping.png" class="shopping"></image>
					</view>
					<span class="iconfont icon-kefu"></span>
				</view>
				<view class="title-text padding-116 padding-50">
					The new economy
				</view>
				<view class="title-text padding-50">Invite commissions</view>
				<button class="cu-btn" style="margin-left: 50rpx;margin-top: 44rpx;">Start the journey of wealth</button>
			</view>
			<view class="flex box-list">
				<navigator url="../record/index">
					<view style="text-align: center;">
						<view>
							<svg class="icon icon-box" aria-hidden="true">
							  <use xlink:href="#icon-licai"></use>
							</svg>
						</view>
						<text style="font-size: 24rpx;">Financial</text>
					</view>
				</navigator>
				<view style="text-align: center;">
					<view>
						<svg class="icon icon-box" aria-hidden="true">
						  <use xlink:href="#icon-chongzhi"></use>
						</svg>
					</view>
					<text style="font-size: 24rpx;">Top-up</text>
				</view>
				<view style="text-align: center;">
					<view>
						<svg class="icon icon-box" aria-hidden="true">
						  <use xlink:href="#icon-tixian"></use>
						</svg>
					</view>
					<text style="font-size: 24rpx;">Withdrawal</text>
				</view>
				<view style="text-align: center;">
					<view>
						<svg class="icon icon-box" aria-hidden="true">
						  <use xlink:href="#icon-yaoqingjiangli"></use>
						</svg>
					</view>
					<text style="font-size: 24rpx;"> Invite </text>
				</view>
			</view>
			<navigator url="../order/orderGrabbing">
				<view class="flex flex-direction">
					<button class="cu-btn bg-grey lg place-order">
						<span class="iconfont icon-che"></span>
						<text style="font-size: 30rpx;">Place an order </text>
					</button>
				</view>
			</navigator>
			
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Select member session </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">Mission Hall </view>
			<view class="etsy-list">
				<view class="item-etsy">
					<image src="../../static/images/etsy.png" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock"></image>
					<text class="etsy-text">Amount: ₹200.00</text>
					<view class="etsy-Commission">
						Commission 0.20% | 50 Orders | LV1
					</view>
				</view>
				<view class="item-etsy">
					<image src="../../static/images/amazon.png" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock"></image>
					<text class="etsy-text">Amount: ₹200.00</text>
					<view class="etsy-Commission">
						Commission 0.20% | 50 Orders | LV1
					</view>
				</view>
				<view class="item-etsy">
					<image src="../../static/images/etsy.png" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock"></image>
					<text class="etsy-text">Amount: ₹200.00</text>
					<view class="etsy-Commission">
						Commission 0.20% | 50 Orders | LV1
					</view>
				</view>
				<view class="item-etsy">
					<image src="../../static/images/etsy.png" class="etsy-image"></image>
					<image src="../../static/images/lock.png" class="lock"></image>
					<text class="etsy-text">Amount: ₹200.00</text>
					<view class="etsy-Commission">
						Commission 0.20% | 50 Orders | LV1
					</view>
				</view>
			</view>
			
			
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Three-level proxy model </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">Member News </view>
			<image src="../../static/images/banner.png" class="banner-image"></image>
			<view class="cu-list menu-avatar" style="padding: 10rpx 30rpx;">
				<view class="cu-item" style="border-radius: 10rpx;margin-bottom: 10rpx;">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">Francis</view>
						<view class="text-gray text-sm flex justify-between">Get agent commission today </view>
					</view>
					<view class="text-grey">₹ 375</view>
				</view>
				<view class="cu-item" style="border-radius: 10rpx;margin-bottom: 10rpx;">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					<view class="content flex-sub">
						<view class="text-grey">Francis</view>
						<view class="text-gray text-sm flex justify-between">Get agent commission today </view>
					</view>
					<view class="text-grey">₹ 375</view>
				</view>
			</view>
			<image src="../../static/images/phone-img.png" class="advertisement"></image>
			<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Professional grab order platform  </view>
			<view style="font-size: 40rpx;color: #333;padding-top: 18rpx;padding-left: 32rpx;font-weight: bold;">ABOUT US  </view>
			<view class="us-list flex">
				<view class="us-item">
					<image src="../../static/images/company-profile.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">company profile </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Professional grab order  platform  </view>
				</view>
				<view class="us-item">
					<image src="../../static/images/Agent-cooperation.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Agent cooperation   </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">We look forward to  your joining     </view>
				</view>
				<view class="us-item">
					<image src="../../static/images/Calculate-revenue.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Calculate revenue   </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Earn commissions easily     </view>
				</view>
				<view class="us-item">
					<image src="../../static/images/Rule-description.png"></image>
					<view style="font-size: 30rpx;color: #333333;font-weight:bold;">Rule description    </view>
					<view style="font-size: 24rpx;color: #A8A8A8;width: 126px;margin: 20rpx 39rpx;">Keep your funds safe  </view>
				</view>
			</view>
			<view class="bottom-text">
				<view class="iocn-english">
					<image src="../../static/images/britain.png"></image>
					<text style="font-size: 28rpx;">EngLish</text>
				</view>
				<view style="font-size: 22rpx;text-align: center;margin-top: 33rpx;">Copyright © 2020. E-Nuggets All rights reserved.</view>
			</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-xl" @tap.stop="" >
				<view class="flex">
					<image src="../../static/images/Calculate-revenue.png"></image>
					<text class="basis-name">Hello, Chen Kang</text>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item">Home</view>
					<view class="basis-item">Account 
						<text class="lg text-gray cuIcon-moreandroid" style="color: #FAA723;margin: 0 10rpx;"></text>
						<text style="font-family:Arial;font-size:34rpx;color: #FAA723;">₹ 375</text>
					</view>
					<view class="basis-item">Orders</view>
					<view class="basis-item">Cash Out</view>
					<view class="basis-item">Customer Service</view>
					<view class="basis-item">Invite Friends</view>
				</view>
				<view class="basis-list basis-border">
					<view class="basis-item" style="font-weight: bold;">Explore</view>
					<view class="basis-item">Notice</view>
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
					<view class="basis-item">Personal information</view>
					<view class="basis-item" @tap='navigateTo("../login/login")'>Sign Out</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: null,
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			navigateTo(e) {
				uni.navigateTo({
					url:e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.title-img{
		padding-top: 37rpx;
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
		padding: 116rpx 0 50rpx 0;
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
				height: 103rpx;
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
</style>
