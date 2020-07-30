<template>
	<view>
		<view class="bg-img" style="background-image: url('../../static/images/title_bg.png');height: 578upx;">
			<view class="title">
				<svg class="icon menu" aria-hidden="true">
				  <use xlink:href="#icon-mulu"></use>
				</svg>
				<text>
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-che"></use>
					</svg>
					<text>Shopping</text>
				</text>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-kefu"></use>
				</svg>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: #fff;
		.menu {
			width: 47upx;
			height: 41upx;
		}
	}
	
</style>
