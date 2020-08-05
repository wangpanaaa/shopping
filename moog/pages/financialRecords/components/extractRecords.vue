<template>
	<view class="accountDetailListContain">
	<view class="number">
	{{item.wmp_amount}}
	</view>
		<view class="date">
			 <view class="date_time">
					<span class="iconfont icon-riqi"></span>
					{{ item.create_time }}
			 </view>
			<text style=" font-size:26rpx;font-weight:bold;">Completed</text>
		</view>
		<view class="memo">
			<view class="memo_core">
					<span> {{item.remark}}</span>
					<span>{{item.wmp_name}}</span>
			</view>
			<text style=" color:rgba(18,172,61,1)"><span class="iconfont icon-jiantou"></span>	{{item.price}}</text>
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
	created() {}
};
</script>

<style lang="less" scoped>
.accountDetailListContain {
	display: flex;
	flex-direction: column;
	position: relative;
	height: 150rpx;
	box-sizing: border-box;
	padding: 30rpx;
	height: 150rpx;
	box-sizing: border-box;
	border-bottom: 1px solid #dddede;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
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
			display: flex;
		&_time{
			width: 360rpx;
			color: #222F3E;
			.icon-riqi {
				margin-right: 10rpx;
				font-size: 30rpx;
			}
		}
		
	}
	.memo {
		font-size: 26rpx;
		display: flex;
		&_core{
			width: 360rpx;
			color:#333333;
			font-size: 28rpx;
			font-weight: bold;
			font-family:Times New Roman;
		}
		& > text {
			display: inline-block;
			
			font-size:28rpx;
			font-weight:bold;
		}
	}
	.number{
		font-size:34rpx;
		font-family:Myriad Pro;
		font-weight:bold;
		color:rgba(51,51,51,1);
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		right: 30rpx;
	}
}

</style>
