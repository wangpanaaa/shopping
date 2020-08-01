<template>
	<view class="payCotain">
		<view class="amountInput">
			Recharge amount <input type="text" v-model="Recharge" placeholder-class="placeholder" placeholder="Please enter the recharge amount" />
		</view>
		<view class="cardMoney">
			<view class="box">₹ 10 <view class="xingxing"><span v-for="i in 3 " :key="i" class="iconfont icon-tuijianxingji"></span></view>
			</view>
			<view class="box" :class="['boxChecked']">₹ 500 <view class="xingxing"><span v-for="i in 5 " :key="i" class="iconfont icon-tuijianxingji"></span></view>
			</view>
			<view class="box">₹ 1000 <view class="xingxing"><span class="iconfont icon-tuijianxingji"></span></view>
			</view>
			<view class="box">₹ 1,500 <view class="xingxing"><span class="iconfont icon-tuijianxingji"></span></view>
			</view>
			<view class="box">₹ 2,000 <view class="xingxing"><span class="iconfont icon-tuijianxingji"></span></view>
			</view>
			<view class="box">₹ 5,000 <view class="xingxing"><span class="iconfont icon-tuijianxingji"></span></view>
			</view>
		</view>
		<view class="chooseTitle">
			Choose to pay by cash
		</view>
		<view class="chooseButton" >
			<view>
				<image src="../../../static/images/upi.png" mode=""> </image>
				<text class="cuIcon-check"  :class="[radio==1?'checkedRadion':'NOcheckedRadion']" @click="radio=1"></text>
			</view>
			<view >
				<text class="cuIcon-check" :class="[radio==2?'checkedRadion':'NOcheckedRadion']"  @click="radio=2"></text>
			</view>
		</view>
		<view class="memo" style="margin-top: 20px;color:rgba(168,168,168,1)">
			Your recharge amount is <span style="color:rgba(51,51,51,1);font-size:15px;font-weight:bold;margin-left: 13px;">₹ 600</span>
		</view>
		<button class="commit">Next step <span class="iconfont icon-huabanbeifen12" style="font-weight: bold;font-size: 15px;"></span></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Recharge: '',
				radio: 1,
			}
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			},
		},
		computed:{
			money(){
				return this.Recharge
			}
		}
	}
</script>

<style lang="less">
	.payCotain {
		padding: 0 15px;
	}

	.amountInput {
		padding: 0px 0px 20px 0;
		display: flex;
		align-items: center;
		font-size: 13px;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);

		input {
			flex: 1;
			margin-left: 12px;
			height: 37px;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(220, 221, 221, 1);
			border-radius: 5px;
		}

		.placeholder {
			font-size: 12px;
			font-family: Myriad Pro;
			font-weight: normal;
			color: rgba(168, 168, 168, .5);
			padding: 0 5px;
		}
	}

	.cardMoney {
		display: flex;
		flex-wrap: wrap;

		.box {
			width: 32%;
			height: 50px;
			display: flex;
			position: relative;
			padding: 0 10px;
			align-items: center;
			font-size: 13px;
			font-family: Myriad Pro;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			border-radius: 5px;
			margin-right: 2%;
			&:nth-child(3n) {
				margin-right: 0%;
			}

			&:nth-child(n+4) {
				margin-top: 10px;
			}

			.xingxing {
				position: absolute;
				top: 50%;
				right: 10px;
				transform: scale(0.7) translate(30%, -50%);

				.icon-tuijianxingji {
					font-size: 12px;
					color: #FF2750;
				}

			}

		}
		.boxChecked{
			background: #e7e7e7;
		}
	}

	.chooseTitle {
		padding: 40px 0 25px 0;
		font-size: 14px;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.chooseButton {
		padding-bottom: 30px;
		border-bottom: 1px dashed rgb(220, 221, 221);
		display: flex;
		justify-content: space-between;

		view {
			width: 165px;
			height: 50px;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(250, 167, 35, 1);
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			&:nth-child(1) {
				image {
					width: 104px;
					height: 40px;
				}
			}
		}

		.checkedRadion,
		.NOcheckedRadion {
			width: 24px;
			height: 24px;
			background: #222F3E;
			color: #FFFFFF;
			border-radius: 50%;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.NOcheckedRadion {
			background: #8d939b;
		}
	}
	.commit{
		margin-top: 40px;
		width:100%;
		height:54px;
		background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
		border:1px solid;
		border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 1 1;
		border-radius:3px;
		}
</style>
