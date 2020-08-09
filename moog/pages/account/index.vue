<template>
	<view class="paymentContain">
		<view class="head">
			<p>{{$t('cashout').index8}}</p>
			<p>{{$t('cashout').index9}}</p>
			<span class="iconfont icon-fanhui1" @click="back"></span>
		</view>
		<view class="content">
			<view class="list">
				<p>{{$t('cashout').index10}}</p>
				<input type="number" v-model="bank_account" placeholder-class="placeholder" :placeholder="$t('cashout').index11" />
			</view>
			<view class="listDouble">
				<view class="list">
					<p>{{$t('cashout').index12}}</p>
					<input type="text" v-model="cardholder_name" placeholder-class="placeholder" :placeholder="$t('cashout').index13" />
				</view>
				<view class="list">
					<p>{{$t('cashout').index14}}</p>
					<input type="text" v-model="ifsc_code" placeholder-class="placeholder" :placeholder="$t('cashout').index15" />
				</view>
			</view>

			<view class="list">
				<p>{{$t('cashout').index16}}</p>
				<input type="text" v-model="bank_name" placeholder-class="placeholder" :placeholder="$t('cashout').index17" />
			</view>
			<view class="list">
				<p>{{$t('cashout').index19}}</p>
				<input type="number" v-model="tel" placeholder-class="placeholder" :placeholder="$t('cashout').index20" />
			</view>
			<view class="list">
				<p>{{$t('cashout').index21}}</p>
				<input type="text" v-model="email" placeholder-class="placeholder" :placeholder="$t('cashout').index22" />
			</view>
		</view>

		<view class="commit" @click="commit">Save</view>
	</view>
</template>

<script>
import istatus from '../../colorui/components/istatus.vue';
export default {
	components: {
		istatus
	},
	data() {
		return {
			bank_account: '', //银行账号
			cardholder_name: '',
			bank_name: '',
			branch_bank: '',
			ifsc_code: '',
			email: '',
			tel: ''
		};
	},
	onLoad() {
		let { bank_account, cardholder_name, bank_name, branch_bank, ifsc_code, email, tel } = { ...this.userInfo };
		this.bank_account = bank_account;
		this.cardholder_name = cardholder_name;
		this.bank_name = bank_name;
		this.branch_bank = branch_bank;
		this.ifsc_code = ifsc_code;
		this.email = email;
		this.tel = tel;
	},
	computed: {
		userInfo() {
			return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'));
		}
	},
	methods: {
		back() {
			uni.navigateBack();
		},
		async commit() {
			let json = {
				bank_account: this.bank_account,
				cardholder_name: this.cardholder_name,
				bank_name: this.bank_name,
				branch_bank: this.branch_bank,
				ifsc_code: this.ifsc_code,
				email: this.email,
				tel: this.tel
			};
			uni.showLoading();
			const res = await this.$http.post('/api/account/bind_bank_account', json);
			this.$store.dispatch('getUserUpdate');
			uni.navigateBack();
			setTimeout(() => {
				uni.showToast({
					icon: 'none',
					title: res.msg
				});
			}, 1000);
		}
	}
};
</script>

<style lang="less" scoped>
.paymentContain {
	height: 1624rpx;
	background-color: #242e42;
	color: #ffffff;
	padding: 0 15px;
	font-family: Myriad Pro;
	overflow: scroll;
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
			font-size: 24rpx;
			color: #a8a8a8;
			margin-top: 8rpx;
			font-weight: normal;
			line-height: 40rpx;
		}
	}
}

.content {
	margin-top: 80rpx;

	.list {
		flex: 1;
		height: 140rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		color: #333333;
		padding: 26rpx 28rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

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
	border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
	border-radius: 10rpx;
	border: 1px solid rgb(143, 144, 144);
	color: #111111;
	text-align: center;
	line-height: 110rpx;
	font-size: 40rpx;
	margin-top: 80rpx;
}

.listDouble {
	display: flex;
	height: 140rpx;
	margin-top: 20rpx;

	.list {
		flex: 1;
		margin-top: 0rpx !important;

		&:nth-child(1) {
			margin-right: 30rpx;
		}
	}
}
</style>
