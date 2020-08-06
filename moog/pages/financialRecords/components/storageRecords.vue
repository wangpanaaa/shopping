<template>
	<view class="accountDetailListContain">
	
		<view class="date">
			 <view class="date_time">
					<span class="iconfont icon-riqi"></span>
					{{ item.create_time }}
			 </view>
			<text style=" font-size:26rpx;font-weight:bold;color:rgba(18,172,61,1);" :style="{color:item.statusattr==='Extractable'?'#12AC3D':'#333333'}">{{item.statusattr}}</text>
		</view>
		<view class="memo">
			<view class="memo_core">
					<span> {{item.remark}}</span>
					<span>{{item.wmp_name}}</span>
			</view>
			<text style=" font-size:28rpx;font-weight:bold;">₹ 25</text>
		</view>
		<view class="button" :class="{Dep:item.statusattr==='Extractable'?false:true}" @click="rollOut(item)">
			 Roll-out
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
	created() {},
	methods:{
		rollOut(item){
			if(item.statusattr==='Extractable'){
				this.$emit('RollOut',item)
			}

		}
	}
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
			position: relative;

		}
	}
	.button{
		width:149rpx;
		height:70rpx;
		line-height: 70rpx;
		background:rgba(255,255,255,1);
		border:1rpx solid rgba(34,47,62,1);
		border-radius:10rpx;
		position: absolute;
		top: 50%;
		right: 30rpx;
		transform: translateY(-50%);
		text-align: center;
	}
	.Dep{
		color:#e3e3e3;
		border:1px solid #e3e3e3;
	}
}

</style>
