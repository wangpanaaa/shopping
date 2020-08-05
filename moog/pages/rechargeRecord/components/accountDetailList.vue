<template>
	<view class="accountDetailListContain">
		<view class="mount" :style="{color:true?'#E9611B':'#A8A8A8'}">{{'Dimissed'}}</view>
		<view class="date">
			<span class="iconfont icon-riqi"></span> {{item.create_time}}
		</view>
		<view class="title">
			<view style="font-size:34rpx; color: #333333;font-weight: bold;">{{'TOP UP'}} 
			<span style="font-size:34rpx; color: #333333; font-weight: normal; margin-left: 28rpx;">₹ 375</span>
			  <text style="font-size:26rpx; color: #333333; font-weight: normal; margin-left: 70rpx;"><span style="margin-right: 10rpx;" class="iconfont icon-zhanghao" ></span> *****0375</text>
			</view>
		
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			item: {
				default: {}
			}
		},
		created() {
			console.log(this.item)
		}
	}
</script>

<style lang="less" scoped>
	.accountDetailListContain {
		display: flex;
		flex-direction: column;
		height: 150rpx;
		box-sizing: border-box;
		padding: 24rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
			border-bottom:1px solid rgba(220,221,221,1);
		.mount {
			position: absolute;
			right: 30rpx;
			top: 50%;
			transform: translateY(-50%);
			font-weight: bold;
			color: #333333;
			font-size: 34rpx;
		}
		.date {
			padding-bottom: 24rpx;
			position: relative;
			.icon-riqi {
				margin-right: 10rpx;
				font-size: 30rpx;
			}
		}

		.memo,.title {
			font-size: 26rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
