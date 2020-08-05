<template>
	<view class="box">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">My Bank Card</block>
		</cu-custom>
		<view class="list">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">Withdraw Via</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.bank_account}}
						</view>
					</view>
					<view class="iconfont icon-icon" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
				<view class="cu-item">                          
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">My Account</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.cardholder_name}}
						</view>
					</view>
					<view class="iconfont icon-zhanghao" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
				<view class="cu-item">
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">IFSC Code</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.ifsc_code}}
						</view>
					</view>
					<view class="iconfont icon-dentifyingcode" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
				<view class="cu-item">
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">Bank Name</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.bank_name}}
						</view>
					</view>
					<view class="iconfont icon-yinhang" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
				<view class="cu-item">
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">Phone Number</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.tel}}
						</view>
					</view>
					<view class="iconfont icon-jj" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
				<view class="cu-item" style="margin-bottom: 54rpx;">
					<view class=" flex-sub">
						<view style="color: #A8A8A8;font-size:24rpx;margin-bottom: 8rpx;">Email</view>
						<view style="font-size:28rpx;color: #333;font-weight:bold;">
							{{userInfo.email}}
						</view>
					</view>
					<view class="cuIcon-mail" style="margin-right: 60rpx;font-size: 40rpx;"></view>
				</view>
			</view>
		</view>
		<view class="padding flex flex-direction">
					<button
						@tap="topages('/pages/account/index')"
						class="cu-btn lg"
						style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
		border:2px solid;height:110rpx;border: 1px solid rgb(143, 144, 144);"
					>
						Modify information 
						<text class="cuIcon-right"></text>
					</button>
				</view>
	</view>
</template>

<script>
	export default {
		computed: {
			userInfo() {
				return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'));
			}
		},
		methods:{
			topages(e) {
				uni.navigateTo({
					url: e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		font-family:Myriad Pro;
	}
	.list{
		margin: 40rpx 30rpx;
		background-color: #fff;
		border:1px solid rgba(220,221,221,1);
		border-radius:10rpx;
		.cu-list{
			padding: 60rpx 0 0 60rpx;
		}
		.cu-item{
			height:90rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
