<template>
	<view class="payCotain">
		<view class="amountInput">
			Recharge amount <input type="number" v-model="amount" placeholder-class="placeholder" placeholder="Please enter the recharge amount" />
		</view>
		<view class="cardMoney">
			<view class="box" :class="[selectCard==index?'boxChecked':'']" v-for="(item,index) in card" :key="index" @click="select(item,index)">{{item.card_name}} <view class="xingxing"><span v-for="i in Number(item.star)" :key="i" class="iconfont icon-tuijianxingji"></span></view>
			</view>
		</view>
		<!-- <view class="chooseTitle">
			Choose to pay by cash
		</view>
		<view class="chooseButton">
			<view :class="[radio==1?'checkedRadion':'NOcheckedRadion']" @click="radio=1">
				<image src="../../../static/images/upi.png" mode=""> </image>
				<text class="cuIcon-check"></text>
			</view>
			<view :class="[radio==2?'checkedRadion':'NOcheckedRadion']" @click="radio=2" v-show="false">
				<span style="font-size:15px; color: #959595;font-weight: bold;">Pay</span>
				<span style="width:85px; text-align: justify;font-size: 12px; color: #c9c9c9;transform:scale(0.9);">
					Cards,Wallets,
					Net Bank & Pay
				</span>
				<text class="cuIcon-check"></text>
			</view>
		</view> -->
		<view class="memo" style="margin-top: 20px;color:rgba(168,168,168,1)">
			Your recharge amount is <span style="color:rgba(51,51,51,1);font-size:15px;font-weight:bold;margin-left: 13px;">₹
				{{amount}}</span>
		</view>
		<button class="commit" @click="next">Next step <span class="iconfont icon-huabanbeifen12" style="font-weight: bold;font-size: 15px;"></span></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount: '',
				radio: 1,
				selectCard:null,
				channel_id:'',
				id:''
			}
		},
		props: {
			card: Array,
			default: []
		},
		methods: {
		select(item,index){
			this.selectCard=index
			this.amount=item.price
			console.log(item)
		},
			next() {
				this.$emit('commit',this.amount)
		
			}
		}
	}
</script>

<style lang="less" scoped>
	.payCotain {
		padding: 0 30rpx;
	}

	.amountInput {
		padding: 0rpx 0rpx 40rpx 0;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);

		input {
			flex: 1;
			margin-left: 24rpx;
			height: 74rpx;
			font-weight: normal;
			padding: 0 20rpx;
			font-size: 26rpx;
			font-weight: bold;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
		}

		.placeholder {
			font-size: 24rpx;
			font-family: Myriad Pro;
			font-weight: normal;
			color: rgba(168, 168, 168, .5);
			padding: 0 10rpx;
		}
	}

	.cardMoney {
		display: flex;
		flex-wrap: wrap;

		.box {
			width: 32%;
			height: 100rpx;
			display: flex;
			position: relative;
			padding: 0 20rpx;
			align-items: center;
			font-size: 26rpx;
			font-family: Myriad Pro;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			border-radius: 10rpx;
			margin-right: 2%;

			&:nth-child(3n) {
				margin-right: 0%;
			}

			&:nth-child(n+4) {
				margin-top: 20rpx;
			}

			.xingxing {
				position: absolute;
				top: 50%;
				right: 20rpx;
				transform: scale(0.7) translate(30%, -50%);

				.icon-tuijianxingji {
					font-size: 24rpx;
					color: #FF2750;
				}

			}

		}

		.boxChecked {
			background: #e7e7e7;
		}
	}

	.chooseTitle {
		padding: 80rpx 0 50rpx 0;
		font-size: 14rpx;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.chooseButton {
		padding-bottom: 60rpx;
		border-bottom: 1rpx dashed rgb(220, 221, 221);
		display: flex;
		justify-content: space-between;

		view {
			width: 330rpx;
			height: 100rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(250, 167, 35, 1);
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			&:nth-child(1) {
				image {
					width: 208rpx;
					height: 60rpx;
				}
			}
		}

		.checkedRadion,
		.NOcheckedRadion {
			text {
				width: 48rpx;
				height: 48rpx;
				background: #222F3E;
				color: #FFFFFF;
				border-radius: 50%;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.NOcheckedRadion {
			border: 0;

			text {
				background: #8d939b;
			}

		}
	}

	.commit {
		margin-top: 80rpx;
		width: 100%;
		height: 108rpx;
		background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
		border: 1rpx solid;
		border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 1 1;
		border-radius: 6rpx;
	}
</style>
