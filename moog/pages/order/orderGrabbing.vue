<template>
	<view class="order-box">
		<view class="tabber">
			<view style="display: flex;">
				<navigator url="../index/index"><text class="cuIcon-back_android"></text></navigator>
				<view style="display: inline-block;width: 94%;font-size: 34rpx;">Place an order </view>
			</view>
			<view style="padding-top: 72rpx;font-size: 50rpx;color: #FFB745;">₹ 375</view>
			<view style="font-size: 26rpx;padding-top: 25rpx;">Remaining available assets</view>
			<view style="color: #A8A8A8;font-size: 26rpx;padding-top: 12rpx;">Yesterday's earnings <text style="color: #FFB745;">₹600
				</text></view>
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
				<button class="cu-btn bg-grey lg place-order" @tap="LoadModal">
					<text style="font-size: 30rpx;color: #111111;">Order Now </text>
				</button>
			</view>
			<view class="order-description">
				<view class="title">order description</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(1) Each account can place 60 orders per day.</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(2) The commission for placing orders is 3‰ of the
					order amount.</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;">(3) The system is based on LBS technology and
					automatically matches commodities through the cloud.</view>
			</view>
			<view class="cu-load load-modal" v-if="loadModal">
				<video src="../../static/video/1596197044700795.mp4" autoplay loop muted :show-play-btn="false" :controls="false"
				 objectFit="cover"></video>
				<text>Matching grab orders...</text>
			</view>
			<view class="cu-modal" :class="modalName=='Image'?'show':''">
				<view class="cu-dialog">
					<image src="../../static/images/etsy.png"></image>
					<view class="describe">
						European style sofa chair neoclassical solid wood leisure chair small household Type single sofa reception
						negotiation chair bedroom tiger chair
					</view>
					<view class="Total" style="margin-top: 25rpx;">
						<text>Total order amount</text>
						<text>₹ 1350</text>
					</view>
					<view class="Total">
						<text>Commission</text>
						<text>₹ 1350</text>
					</view>
					<view class="Total">
						<text>Estimated refund</text>
						<text style="color: #FFB745;font-size: 34rpx;">₹ 1354.05</text>
					</view>
					<view class="flex">
						<button class="cu-btn cancel" >Cancel</button>
						<button class="cu-btn submit">Submit</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadModal: false,
				modalName: null
			}
		},
		methods: {
			LoadModal(e) {
				// this.loadModal = true;
				this.modalName = 'Image'
				// setTimeout(() => {
				// 	this.loadModal = false;
				// 	this.modalName='Image'
				// }, 5000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.order-box {
		.tabber {
			height: 365rpx;
			background: url(../../static/images/Place-an-order.png);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			padding: 55rpx 0 0 30rpx;
			color: #fff;
			text-align: center;

			.cuIcon-back_android {
				font-size: 19px;
			}
		}

		.order-content {
			margin: 30rpx;

			.order-item {
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1px solid #DCDDDD;
				justify-content: space-between;
			}

			.flex-direction {
				margin-top: 86rpx;

				.place-order {
					height: 60px;
					background-color: #FAA41A;
				}
			}

			.order-description {
				margin-top: 114rpx;
				background-color: #fff;
				border-radius: 5rpx;
				padding: 38rpx 15rpx 44rpx 20rpx;

				.title {
					color: #FAA723;
					font-size: 30rpx;
					height: 46rpx;
				}
			}
		}
	}

	.cu-load.load-modal {
		width: auto;
		height: 380rpx;
		margin-left: 75rpx;
		margin-right: 75rpx;
		padding-top: 10rpx;

		text {
			font-size: 30rpx;
			font-family: Myriad Pro;
			margin-bottom: 20rpx;
		}
	}

	.cu-load.load-modal::after {
		display: none;
	}

	.cu-dialog {
		width: auto;
		margin-left: 75rpx;
		margin-right: 75rpx;

		image {
			margin: 20rpx 35rpx 0 35rpx;
			height: 400rpx;
			width: 200rpx;
		}

		.describe {
			padding: 23rpx 40rpx;
			color: #333333;
			line-height: 35rpx;
			font-size: 28rpx;
			font-family: Myriad Pro;
			border-bottom: 1px solid #DCDDDD;
		}
		.Total{
			display: flex;
			font-size:26rpx;
			font-family:Myriad Pro;
			line-height:47rpx;
			justify-content: space-between;
			color: #333333;
			padding: 0 40rpx;
		}
		.flex{
			font-size: 34rpx;
			margin: 39rpx 13rpx 27rpx 15rpx;
		}
		.cancel{
			height:80rpx;
			background:rgba(255,255,255,1);
			border:1px solid #222F3E;
			border-radius:5px;
			width: 50%;
			margin-right: 12rpx;
		}
		.submit{
			height:80rpx;
			background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
			border:2rpx solid #222F3E;
			border-radius:5px;
			width: 50%;
		}
	}
</style>
