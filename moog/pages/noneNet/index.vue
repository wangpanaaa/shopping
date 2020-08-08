<template>
	<view class="noneNetContain">
	<istatus bg="#000000"></istatus>
		 <view class="noneNet">
				<image src="/static/images/noneNet.png"></image>
				<view style="width: 456rpx; text-align: center;font-size: 30rpx; color:#8c8c8c;display;margin: 45rpx auto 0 auto;">
					Network connection failed, click 
					retry or check network
				</view>
		 </view>
	</view>
</template>

<script>
	import istatus from "../../colorui/components/istatus.vue"
	export default {
		components:{istatus},
		computed:{
			isNet(){
				return this.$store.state.isNet
			}
		}
	}
</script>

<style lang="less">
.noneNet{
	margin-top: 350rpx;
	text-align: center;
	/* #ifdef APP-PLUS */
	margin-top:calc(350rpx +  var(--status-bar-height));
	/* #endif */
	image{
		width: 250rpx;
		height: 250rpx;
	}
}

</style>
