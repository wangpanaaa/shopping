<template>
	<view>
		<view class="bg-img title-img">
			<view class="title flex">
				<view>
					<span class="iconfont icon-mulu"></span>
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
			<view style="text-align: center;">
				<view>
					<svg class="icon icon-box" aria-hidden="true">
					  <use xlink:href="#icon-licai"></use>
					</svg>
				</view>
				<text style="font-size: 24rpx;">Financial</text>
			</view>
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
		
		<view class="flex flex-direction">
			<button class="cu-btn bg-grey lg place-order">
				<span class="iconfont icon-che"></span>
				<text style="font-size: 30rpx;">Place an order </text>
			</button>
		</view>
		<view style="font-size: 24rpx;color: #A8A8A8;padding-top: 73rpx;padding-left: 28rpx;">Three-level proxy model </view>
		<view>Member News </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
	}
	.icon-che{
		font-size: 46rpx;
		margin-right: 26rpx;
	}
	
</style>
