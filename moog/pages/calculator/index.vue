<template>
	<view class="box">
		<view class="tabber">
			<view style="display: flex;">
				<text class="cuIcon-back" @tap="BackPage"></text>
			</view>
			<view style="font-size: 30rpx;padding-top: 262rpx;" class="text-ABC">Income calculator</view>
		</view>
		<view class="item">
			<view style="font-size:30rpx;font-weight:bold;">Recharge amount</view>
			<view class="cu-form-group " style="margin-top: 25rpx;">
				<view class="title">₹</view>
				<input placeholder="Please enter the amount" name="input" v-model="amount"></input>
			</view>
			<view style="font-size:30rpx;font-weight:bold;margin-top: 50rpx;">Days</view>
			<view class="cu-form-group " style="margin-top: 25rpx;">
				<view class="title cuIcon-calendar"></view>
				<input placeholder="Please enter the number of days" name="input" v-model="day"></input>
			</view>
			<view style="font-size:30rpx;font-weight:bold;margin-top: 50rpx;">Maximum profitable amount</view>
			<view class="cu-form-group " style="margin-top: 25rpx;opacity: 0.5;background-color: #E4E4E4;">
				<view class="title">₹</view>
				<input placeholder="Maximum profitable amount" name="input" disabled v-model="maximum"></input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				day:30,
				amount:1000,
			}
		},
		computed: {
			userInfo:function (){
				return this.$store.state.userInfo  || JSON.parse(uni.getStorageSync('userInfo'))
			},
			maximum:function(){
				let ordernum=parseInt(this.userInfo.mall.ordernum)
				let ratio=parseFloat(this.userInfo.mall.ratio)
				console.log(ordernum,ratio,this.day,this.amount)
				console.log(ordernum*ratio*this.day*this.amount)
				return (ordernum*ratio*this.day*this.amount).toFixed(2)
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		font-family: Myriad Pro;
	}

	.tabber {
		position: relative;
		height: 473rpx;
		background: url(../../static/images/calculator-bg.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		padding: 55rpx 0 0 30rpx;
		color: #fff;
		text-align: center;

		.cuIcon-back {
			font-size: 19px;
		}
	}
	.item{
		margin: 64rpx 30rpx 0 30rpx;
		.cu-form-group{
			height:100rpx;
			background:rgba(255,255,255,1);
			border:1px solid rgba(220, 221, 221, 1);
			border-radius:10rpx;
		}
	}
</style>
