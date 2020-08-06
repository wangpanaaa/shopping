<template>
	<view class="accountDetailListContain">
		<view class="date">
			<span class="iconfont icon-riqi"></span> {{item.create_time}}
			<view class="mount" :style="{color:true?'#E9611B':'#A8A8A8'}">{{item.status}}</view>
		</view>
		<view class="title">
			<view style="font-size:34rpx; color: #333333;font-weight: bold;">{{item.channel}} 
			<span style="font-size:34rpx; color: #333333; font-weight: normal; margin-left: 28rpx;">{{item.amount}}</span></view>
			 <span  style="font-size:26rpx; color: #333333;">{{item.channel}}</span>
		</view>
		<view class="memo" style=" color: #A8A8A8; ">
        Remarks: {{item.remark}}
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
		height: 200rpx;
		box-sizing: border-box;
		padding: 30rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 10rpx;
	

		.date {
			border-bottom:1px dashed rgba(220,221,221,1);
			padding-bottom: 24rpx;
			position: relative;
			.icon-riqi {
				margin-right: 10rpx;
				font-size: 30rpx;
			}
			.mount {
				position: absolute;
				right: 0rpx;
				top: 50%;
				transform: translateY(-50%);
				font-weight: bold;
				color: #333333;
				font-size: 34rpx;
			}
		}

		.memo,.title {
			margin-top: 12rpx;
			font-size: 26rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
