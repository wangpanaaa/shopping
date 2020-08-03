<template>
	<view class="box">
		<status></status>
		<view class="bg-img">
			<view class="flex">
				<text class="iconfont icon-fanhui1 left-icon"></text>
				<text class="title">Financial management</text>
				<span class="iconfont icon-tixian1 r-icon"></span>
			</view>
		</view>
	</view>
</template>

<script>
	import status from "../../colorui/components/istatus.vue"
	export default {
		components:{
			status
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		font-family:Myriad Pro;
	}
	.bg-img{
		color: #fff;
		background-image: url(../../static/images/Place-an-order.png);
		height: 365rpx;
		.flex{
			padding-top: 20rpx;
			align-items: center;
			justify-content: space-between;
		}
		.left-icon{
			margin-left: 30rpx;
			font-size: 38rpx;
			padding: 10rpx;
		}
		.title{
			font-size: 34rpx;
		}
		.r-icon{
			font-size: 42rpx;
			padding-right: 33rpx;
		}
	}
</style>
