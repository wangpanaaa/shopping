<template>
	<view class="order-box">
		<view class="tabber">
			<view style="display: flex;">
				<navigator url="../index/index"><text class="cuIcon-back_android"></text></navigator>
				<view style="display: inline-block;width: 94%;font-size: 34rpx;">Place an order  </view>
			</view>
			<view style="padding-top: 72rpx;font-size: 50rpx;color: #FFB745;">₹ 375</view>
			<view style="font-size: 26rpx;padding-top: 25rpx;">Remaining available assets</view>
			<view style="color: #A8A8A8;font-size: 26rpx;padding-top: 12rpx;">Yesterday's earnings <text style="color: #FFB745;">₹600 </text></view>
		</view>
		<view class="order-content">
			<view class="order-item flex"> 
				<view style="font-size: 26rpx;color: #333;">Commission has been robbed today </view>
				<view style="font-size: 30rpx;color: #FAA723;">₹ 0</view>
			</view>
			<view class="order-item flex">
				<view style="font-size: 26rpx;color: #333;">Account freezing amount</view>
				<view style="font-size: 30rpx;color: #FAA723;">₹ 0</view>
			</view>
			<view class="order-item flex">
				<view style="font-size: 26rpx;color: #333;">Owned today</view>
				<view style="font-size: 30rpx;">0</view>
			</view>
			<view class="order-item flex">
				<view style="font-size: 26rpx;color: #333;">Yesterday's team commission</view>
				<view style="font-size: 30rpx;color: #FAA723;">₹ 0</view>
			</view>
			<view class="flex flex-direction">
				<button class="cu-btn bg-grey lg place-order">
					<text style="font-size: 30rpx;color: #111111;">Order Now </text>
				</button>
			</view>
			<view class="order-description">
				<view class="title">order description</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(1) Each account can place 60 orders per day.</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(2) The commission for placing orders is 3‰ of the order amount.</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(3) The system is based on LBS technology and automatically matches commodities through the cloud.</view>
			</view> 
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.order-box{
		.tabber{
			height: 365rpx;
			background: url(../../static/images/Place-an-order.png);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			padding: 55rpx 0 0 30rpx;
			color: #fff;
			text-align: center;
			.cuIcon-back_android{
				font-size: 19px;
			}
		}
		.order-content{
			margin: 30rpx;
			.order-item{
				height: 80rpx;
				line-height:80rpx;
				border-bottom:1px solid #DCDDDD ;
				justify-content: space-between;
			}
			.flex-direction{
				margin-top: 86rpx;
				.place-order{
					height: 60px;
					background-color: #FAA41A;
				}
			}
			.order-description{
				margin-top: 114rpx;
				background-color: #fff;
				border-radius:5rpx ;
				padding: 38rpx 15rpx 44rpx 20rpx;
				.title{
					color: #FAA723;
					font-size: 30rpx;
					height: 46rpx;
				}
			}
		}
	}
</style>
