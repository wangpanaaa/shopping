<template>
	<view class="accountDetailListContain">
	  <view class="mount">{{item.balance}}</view>
		<view class="date">
						<span class="iconfont icon-riqi"></span>	{{item.create_time}}
		</view>
		<view class="memo">
			{{item.desc}}  <text :style="{ transform: 'rotate('+(item.status==1?0:90)+'deg)',position:'relative',top:(item.status==1?9:6)+'rpx'}"><span class="iconfont icon-jiantou" :style="{color:item.status==1?'#12AC3D':'#ef8c57'}"></span></text>	
			<span :style="{color:item.status==1?'#12AC3D':'#ef8c57',position:'relative',left:'-10rpx'}">{{item.amount}}</span>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:{
				default:{}
			}
		},
		created() {
		 console.log(	this.item)
		}
}
</script>

<style lang="less" scoped>
	.accountDetailListContain{
		display: flex;
		flex-direction: column;
		position: relative;
		height: 150rpx;
		box-sizing: border-box;
		padding: 30rpx;
		height:150rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #dddede;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.mount{
			position: absolute;
			right: 30rpx;
			top: 50%;
			transform: translateY(-50%);
			font-weight: bold;
			color: #333333;
			font-size: 34rpx;
		}
		.date{
			.icon-riqi{
				margin-right: 10rpx;
				font-size: 30rpx;
			}
		}
		.memo{
			font-size:26rpx;
			.icon-jiantou{
				color: rgba(18, 172, 61, 1);
				font-size: 40rpx;
			}
	
			&>text{
				display: inline-block;
				position: relative;
				top: 10rpx;
			}
		}
	}
</style>
