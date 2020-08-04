<template>
	<view class="paymentContain">
		<view class="head">
			<p>Payment Information</p>
			<p>Dokypay, Pay ₹600</p>
			<span class="iconfont icon-fanhui1" @click="back"></span>
		</view>
		<view class="content">
			<view class="list">
				<p>User Name</p>
				<input type="text" v-model="name" placeholder-class="placeholder" placeholder="Input User Name" />
			</view>
			<view class="list">
				<p>Phone Number</p>
				<input type="number" v-model="phone" placeholder-class="placeholder" placeholder="Input Phone Number" />
			</view>
			<view class="list">
				<p>Email Address</p>
				<input type="text" v-model="email" placeholder-class="placeholder" placeholder="Input Email Address" />
			</view>
			<view class="list">
				<p>UPI ID</p>
				<input type="text" v-model="account" placeholder-class="placeholder" placeholder="Input UPI ID" />
			</view>
		</view>

		<view class="select">
			<checkbox-group @change="select = !select">
				<checkbox class="selectBox" :class="select ? 'checked' : ''" :checked="select"></checkbox>
				Purchase terms
			</checkbox-group>
		</view>
		<view class="commit" @click="commit">Okay</view>
	</view>
</template>

<script>
import istatus from '../../colorui/components/istatus.vue';
import { url,socketUrl } from '../../config/baseUrl.js';
export default {
	components: {
		istatus
	},
	data() {
		return {
			select: true,
			name: '',
			phone: '',
			email: '',
			account: '',
			channel_id: '',
			id: '',
			amount: ''
		};
	},
	onLoad(e) {
		this.channel_id = e.channel_id;
		this.id = e.id;
		this.amount = e.amount;
		let payData=uni.getStorageSync('payData')
		payData=JSON.parse(payData)
		this.name=payData.name,
		this.phone=payData.phone,
		this.email=payData.email,
		this.account=payData.account
	},
	methods: {
		back() {
			uni.navigateBack();
		},
		commit() {
			if (!this.name || !this.phone || !this.email || !this.account) {
				this.$msg('Please complete the relevant information');
				return;
			}

			if (!this.select) {
				this.$msg('Please agree Purchase terms');
				return;
			}
			let json = {
				token: uni.getStorageSync('token'),
				name: this.name,
				phone: this.phone,
				email: this.email,
				account: this.account,
				channel_id: this.channel_id,
				id: this.id,
				amount: this.amount,
				language: 'en-us'
			};
			uni.setStorageSync('payData',JSON.stringify(json))
			let openUrl=url + `/api/user_recharge/cz?id=${this.id}&name=${this.name}&phone=${this.phone}&email=${this.email}&account=${this.account}&channel_id=${this.channel_id}&amount=${this.amount}&language=${json.language}&token=${json.token}`;
			uni.connectSocket({
			  url: socketUrl,
			  header: {
				'language':'en-us'
			  }
			});
			
			// //#ifdef APP-PLUS
			// 	plus.runtime.openURL()
			// //#endif
			//#ifdef H5
				window.open(openUrl)
			//#endif
			
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！');
			});
			uni.onSocketMessage(function (res) {
			  console.log('收到服务器内容：' + res.data);
			});
		}
	}
};
</script>

<style lang="less" scoped>
.paymentContain {
	height: 100%;
	background-color: #242e42;
	color: #ffffff;
	padding: 0 15px;
	font-family: Myriad Pro;
}

.head {
	padding-top: 150rpx;
	position: relative;

	.icon-fanhui1 {
		font-size: 58rpx;
		padding: 20rpx;
		color: rgba(255, 255, 255, 0.6);
		position: absolute;
		top: 44rpx;
		left: -20rpx;
	}

	p {
		font-size: 46rpx;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);

		&:nth-child(2) {
			font-size: 26rpx;
			color: #a8a8a8;
			margin-top: 8rpx;
			font-weight: normal;
		}
	}
}

.content {
	.list {
		height: 140rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		color: #333333;
		padding: 26rpx 28rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&:nth-child(1) {
			margin-top: 50rpx;
		}

		&:nth-child(n + 2) {
			margin-top: 20rpx;
		}

		input {
			font-weight: bold;
			font-size: 28rpx;
		}

		.placeholder {
			font-weight: bold;
			color: rgba(51, 51, 51, 0.3);
			font-size: 28rpx;
		}
	}
}

.select {
	margin-top: 50rpx;
	text-align: center;

	.selectBox {
		margin-right: 10rpx;
		font-size: 28rpx;
	}
}

.commit {
	height: 110rpx;
	background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
	border: 2rpx solid;
	border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
	border-radius: 5rpx;
	color: #111111;
	text-align: center;
	line-height: 110rpx;
	font-size: 40rpx;
	margin-top: 80rpx;
}
</style>
