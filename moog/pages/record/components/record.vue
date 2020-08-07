<template>
	<view>
		<view class="recordCotain">
			<view class="recordHead">
				<view class="recordHead_left">
					<view class="recordHead_left_time">
						<span>Time</span>
						<span>{{ data.create_time.split(' ')[0] }}</span>
						<span>{{ data.create_time.split(' ')[1] }}</span>
					</view>
					<view class="recordHead_left_number">
						<span>Number</span>
						<span>{{ data.id }}</span>
					</view>
				</view>
				<view :class="['recordHead_button', buttonStatus[data.status]]">{{ buttonStatus[data.status] }}</view>
			</view>
			<view class="recordContent">
				<view class="recordContent_image"><image :src="data.goods_pic" mode="aspectFill"></image></view>
				<p>{{ data.goods_name }}</p>
			</view>
			<view class="recordFoot">
				<view class="recordFoot_item">
					<span>order Tota</span>
					<span>{{ data.price }}</span>
				</view>
				<view class="recordFoot_item">
					<span>Commission</span>
					<span>{{ data.commission }}</span>
				</view>
				<view class="recordFoot_item">
					<span>Estimated refund</span>
					<span style="color: #ffb44e;font-size: 16px;font-weight: bold;">{{ data.refund }}</span>
				</view>
				<view class="recordFoot_button" v-if="data.status == 0">
					<button type="default" @click="cancel(data)">Cancel</button>
					<button type="default" @click="submit(data)">Submit</button>
				</view>
			</view>
		</view>

		<view class="cu-load load-modal" v-if="orderConfirm">
			<!-- <video src="../../static/video/1596197044700795.mp4" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"></video> -->
			<image src="../../../static/images/gif2.gif" class="modal-image"></image>
			<text>
				{{ confirmTitleItem }}
				<text class="dotting"></text>
			</text>
		</view>

		<view class="cu-modal" :class="modalName == 'order-suc' ? 'show' : ''" @tap.stop="noClick">
			<view class="cu-dialog order-suc">
				<image src="../../../static/images/order-suc.png"></image>
				<view class="completed">order Completed</view>
				<view class="order-suc-item">
					<text>Total order amount</text>
					<!-- <text>{{goodsItem.price}}</text> -->
				</view>
				<view class="order-suc-item">
					<text>Commission</text>
					<!-- <text>{{goodsItem.commission}}</text> -->
				</view>
				<view class="order-suc-item">
					<text>Estimated refund</text>
					<!-- <text style="font-size: 34rpx;color: #FFB745;font-weight: bold;">{{goodsItem.refund}}</text> -->
				</view>
				<view class="flex flex-direction"><button class="cu-btn" @tap="modalName = null">Confirm</button></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			buttonStatus: {
				1: 'Completed',
				0: 'Pending',
				2: 'Cancelled'
			},
			current: 0,
			modalName: null,
			orderConfirm: false,
			confirmTitle: ['Ordering', 'Filling in the receiving information', 'Payment successful', 'Order submission', 'Writing comments', 'Order completed'],
			confirmTitleItem: 'Ordering'
		};
	},
	props: {
		data: {
			type: Object,
			default: function() {
				return {};
			}
		}
	},

	methods: {
		cancel(data) {
			this.$http.post('/api/order/confirm', { orderid: data.id, status: 2 }).then(res => {
				if (res.code === 0) {
					uni.showToast({
						icon: 'none',
						title: res.msg
					});
					uni.$emit('onRefresh', { msg: '页面更新' });
				}
			});
		},
		async submit() {
			this.current = 0;
			this.orderConfirm = true;
			let times = setInterval(() => {
				// if(++this.current<6){
				// 	this.confirmTitleItem=this.confirmTitle[this.current]
				// }else{
				// 	this.orderConfirm = false;
				// 	this.modalName = 'order-suc';
				// 	clearInterval(times)
				// 	this.$http.post('/api/order/confirm',{orderid:this.goodsItem.orderid,status:1}).then(()=>{
				// 		this.$store.dispatch('getUserUpdate');
				// 	})
				// }
			}, Math.floor(Math.random() * 4 + 4) * 500);
		}
	}
};
</script>

<style lang="less" scoped>
.cu-load.load-modal uni-image {
	width: 100%;
	height: 150px;
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
.recordCotain {
	background-color: #ffffff;
	border-radius: 10rpx;
	padding: 30rpx 20rpx;

	.recordHead {
		display: flex;
		border-bottom: 1rpx solid #f6f6f6;
		padding-bottom: 24rpx;

		&_left {
			flex: 1;

			&_time span {
				display: inline-block;

				&:nth-child(1) {
					width: 106rpx;
					color: #a8a8a8;
					font-size: 24rpx;
				}

				&:nth-child(n + 2) {
					width: 140rpx;
					color: #33333;
					font-size: 24rpx;
				}
			}

			&_number span {
				display: inline-block;

				&:nth-child(1) {
					width: 106rpx;
					color: #a8a8a8;
					font-size: 24rpx;
				}

				&:nth-child(n + 2) {
					color: #33333;
					font-size: 24rpx;
				}
			}
		}

		&_button {
			width: 154rpx;
			height: 40rpx;
			background: rgba(0, 160, 117, 1);
			border-radius: 6rpx;
			line-height: 40rpx;
			font-size: 26rpx;
			font-family: Myriad Pro;
			text-align: center;
			color: #ffffff;
		}

		.Completed {
			background: rgba(0, 160, 117, 1);
		}

		.Pending {
			background: rgba(255, 112, 112, 1);
		}

		.Cancelled {
			background: rgba(164, 164, 164, 1);
		}
	}

	.recordContent {
		padding: 30rpx 0;
		display: flex;
		border-bottom: 1rpx solid #f6f6f6;

		&_image {
			width: 120rpx;
			height: 120rpx;
			padding: 4rpx;
			box-sizing: border-box;
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		p {
			flex: 1;
			margin-left: 20rpx;
			text-align: justify;
		}
	}

	.recordFoot {
		padding-top: 30rpx;
		display: flex;
		flex-direction: column;

		&_item {
			display: flex;
			justify-content: space-between;
			&:nth-child(n + 2) {
				margin-top: 12rpx;
			}
		}
		&_button {
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
			button {
				width: 300rpx;
				height: 100rpx;
				line-height: 100rpx;
				color: #222f3e;
				background: #ffffff;
				border: 1rpx solid rgba(34, 47, 62, 1);
				border-radius: 6rpx;
				&:nth-child(2) {
					background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
				}
			}
		}
	}
}
.order-suc {
	width: auto;
	margin-left: 75rpx;
	margin-right: 75rpx;
	image {
		margin: 62rpx 125rpx 0 125rpx;
		width: 350rpx;
		height: 260rpx;
	}
	.completed {
		font-size: 38rpx;
		font-weight: bold;
		padding: 40rpx 0;
		margin: 0 31rpx 60rpx 31rpx;
		border-bottom: 1px solid #dcdddd;
	}
	.order-suc-item {
		display: flex;
		justify-content: space-between;
		margin: 0 42rpx;
		line-height: 47rpx;
		font-size: 26rpx;
		font-family: Myriad Pro;
	}
	.flex-direction {
		margin: 0 40rpx 50rpx 40rpx;
	}
	.cu-btn {
		height: 84rpx;
		background-color: #faa723;
		font-family: Myriad Pro;
		font-size: 34rpx;
	}
}
.dotting {
	display: inline-block;
	min-width: 2px;
	min-height: 2px;
	box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;
	animation: dot 2s infinite step-start both;
	vertical-align: bottom;
}
.dotting::before {
	content: '';
}
:root .dotting {
	margin-right: 8px;
} /* IE9+,FF,CH,OP,SF */

@-webkit-keyframes dot {
	25% {
		box-shadow: none;
	}
	50% {
		box-shadow: 2px 0 currentColor;
	}
	75% {
		box-shadow: 2px 0 currentColor, 6px 0 currentColor;
	}
}
@keyframes dot {
	25% {
		box-shadow: none;
	}
	50% {
		box-shadow: 2px 0 currentColor;
	}
	75% {
		box-shadow: 2px 0 currentColor, 6px 0 currentColor;
	}
}
</style>
