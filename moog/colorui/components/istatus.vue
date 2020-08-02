<template>
	<view>
		<view class="istatus" :style="{	'background-color':bg}">
			<!-- 状态栏颜色 -->
		</view>
		<view :style="{height:statusHeight}">
			
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		props:{
			bg:{
				type:String,
				default:null
			}
		},
		data() {
			return {
				statusHeight:statusBarHeight
			};
		},
	}
</script>

<style lang="stylus">
	.istatus
		position fixed
		top 0
		left 0
		right 0
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		z-index 995
</style>
