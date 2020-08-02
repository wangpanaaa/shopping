<template>
	<view class="paymentContain">
		<view class="head">
			<p>Account Information</p>
			<p> Please make sure your Account Number is correct,we do not 
take any responsibility caused by incorrect input. </p>
			<span class="iconfont icon-fanhui1" @click="back"></span>
		</view>
		<view class="content">
			<view class="list">
				<p>Account Number</p>
				<input type="text" v-model="AccountNumber" placeholder-class="placeholder" placeholder="Input Account Number" />
			</view>
			<view class="listDouble">
					<view class="list">
						<p>User Name</p>
						<input type="text" v-model="UserName" placeholder-class="placeholder" placeholder="Input Bank User Name" />
					</view>
					<view class="list">
						<p>IFSC Code</p>
						<input type="text" v-model="IFSCCode" placeholder-class="placeholder" placeholder="Input IFSC Code" />
					</view>
			</view>
		
			<view class="list">
				<p>Bank Name</p>
				<input type="text" v-model="BankName" placeholder-class="placeholder" placeholder="Input Bank Name | Input Branch Bank Name" />
			</view>
			<view class="list">
				<p>Phone Number</p>
				<input type="text" v-model="PhoneNumber" placeholder-class="placeholder" placeholder="Input Phone Number" />
			</view>
			<view class="list">
				<p>Email</p>
				<input type="text" v-model="Email" placeholder-class="placeholder" placeholder="Input Email Address" />
			</view>
		</view>

		<view class="commit" @click="commit">
			Save
		</view>


	</view>
</template>

<script>
	import istatus from "../../colorui/components/istatus.vue"
	export default {
		components: {
			istatus
		},
		data() {
			return {
				select: false,
				AccountNumber: '',
				PhoneNumber: '',
				UserName:'',
				BankName: '',
				IFSCCode:'',
				PhoneNumber: '',
				Email: '',
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			commit() {
				if (!this.select) {
					uni.showToast({
						title: '请勾选 Purchase terms',
						icon: 'none',
						duration: 2000
					});
					return
				}
				uni.navigateTo({
					url: '/pages/cashout/index'
				})	
			}
		}

	}
</script>


<style lang="less" scoped>
	.paymentContain {
		height: 1624rpx;
		background-color: #242e42;
		color: #FFFFFF;
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
			color: rgba(255, 255, 255, .6);
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
				color: #A8A8A8;
				margin-top: 8rpx;
				font-weight: normal;
				line-height:40rpx;
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

			&:nth-child(n+2) {
				margin-top: 20rpx;
			}

			input {
				font-weight: bold;
				font-size: 28rpx;
			}

			.placeholder {
				font-weight: bold;
				color: rgba(51, 51, 51, .3);
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
	.listDouble{
		display: flex;
		height: 140rpx;
		margin-top: 20rpx;
		.list{
			flex: 1;
			margin-top: 0rpx !important;
			&:nth-child(1){
				margin-right: 30rpx;
			}
		}
		
	}
</style>
