<template>
	<view class="cashoutContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">CASH OUT</block>
			<!-- <block slot="right"><span class="iconfont icon-bangzhu"></span></block> -->
		</cu-custom>
		<view class="content">
			<view class="head">
				<p>{{ userInfo.balance }}</p>
				<p>{{$t('cashout').index1}}</p>
			</view>
			<view class="bank">
				<view class="addBank" v-if="!userInfo.bank_account" @click="account">+Bank Account</view>
				<view class=" bankCount" v-else  @click="account">
					<p>
						<span>{{$t('cashout').index2}}</span>
						{{ userInfo.bank_name }}
					</p>
					<p>
						<span>{{$t('cashout').index3}}</span>
						{{ userInfo.bank_account }}
					</p>
					<span class="iconfont icon-huabanbeifen12"></span>
				</view>
			</view>

			<view class="withdrawal">
				<view class="withdrawal_title">Cash withdrawal (income tax {{tax.withdrawal_tax}})</view>
				<input type="number" v-model="amount" placeholder-class="placeholder" :placeholder="$t('cashout').index5" />
			</view>
			<view class="commit" @click="commit">
				{{$t('cashout').index6}}
				<span class="iconfont icon-huabanbeifen12"></span>
			</view>
		</view>
	</view>
</template>

<script>
import Api from "../../common/api.js"
export default {
	data() {
		return {
			amount: '',
			tax:'',
		};
	},
	onLoad() {
		this.tax=JSON.parse(uni.getStorageSync('settings'))
		this.$store.dispatch('getUserUpdate');
		//  console.log(res)
	},
	created() {},
	computed: {
		userInfo() {
			return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'));
		}
	},
	methods: {
		async commit() {
			if (!this.amount) {
				this.$msg('Please enter a valid amount');
				return;
			}
			uni.showLoading();
			const res = await Api.withdrawal({
				amount: this.amount
			})
			uni.showToast({
				icon: 'none',
				title: res.msg
			});
			uni.hideLoading()
			this.$store.dispatch('getUserUpdate');
			this.amount=''
		},
		account(){
			uni.navigateTo({
				url:'/pages/account/index'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.cashoutContain {
	height: 100%;
	box-sizing: border-box;

	.icon-bangzhu {
		font-size: 50rpx;
		padding-right: 30rpx;
	}
}

.content {
	padding: 30rpx;

	.head {
		height: 200rpx;
		background: url(../../static/images/cashoutBg.png) no-repeat;
		background-size: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			&:nth-child(1) {
				font-size: 50rpx;
				font-family: Arial;
				font-weight: 400;
				color: rgba(255, 183, 69, 1);
			}

			&:nth-child(2) {
				margin-top: 6rpx;
				font-size: 26rpx;
				font-family: Myriad Pro;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	.bank {
		height: 182rpx;
		padding: 35rpx;
		box-sizing: border-box;
		background-color: #ffffff;

		.addBank {
			width: 100%;
			height: 100%;
			background: rgba(250, 164, 26, 0.96);
			box-shadow: 0px 7rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
			border-radius: 5rpx;
			color: rgba(51, 51, 51, 1);
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
		}

		.bankCount {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;

			p {
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				font-size: 30rpx;
				font-weight: bold;
				font-family: Myriad Pro;

				span {
					font-weight: 400;
					width: 240rpx;
					display: inline-block;
				}
			}

			> span {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 0px;
				font-size: 40rpx;
				font-weight: bold;
			}
		}
	}

	.withdrawal {
		margin-top: 40rpx;
		font-size: 30rpx;
		font-family: Myriad Pro;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);

		input {
			margin-top: 24rpx;
			height: 110rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
			padding: 20rpx 34rpx;
			font-size: 30rpx;
		}

		.placeholder {
			font-size: 26rpx;
			font-family: Myriad Pro;
			font-weight: 400;
			color: rgba(168, 168, 168, 0.5);
		}
	}

	.commit {
		margin-top: 80rpx;
		height: 110rpx;
		background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
		border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
		border-radius: 10rpx;
		font-size: 34rpx;
		font-family: Myriad Pro;
		font-weight: 400;
		text-align: center;
		line-height: 55px;
		font-size: 36rpx;
		color: #111111;
    border: 1px solid rgb(143, 144, 144);
		.icon-huabanbeifen12 {
			font-size: 36rpx;
			padding-right: 30rpx;
		}
	}
}
</style>
