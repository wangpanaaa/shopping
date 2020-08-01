<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">{{$t('index').navTitle}}</block>
		</cu-custom>
		<view class="language-box">
			<view class="preferred">Choose your preferred language  </view>
			<view class="title">{{$t('index').navTitle}}</view>
		</view>
		<view class="language-item flex" style="align-items: center;justify-content: space-between;" @tap='langChange' data-lang='en-US'>
			<view class="flex" style="align-items: center;padding-left: 30rpx;">
				<image src="../../static/images/britain.png"></image>
				<view class="language-detil">English</view>
			</view>
			<view class="cuIcon-right" style="padding-right: 30rpx;"></view>
		</view>
		<view class="language-item flex" style="align-items: center;justify-content: space-between;" @tap='langChange' data-lang='en_IN'>
			<view class="flex" style="align-items: center;padding-left: 30rpx;">
				<image src="../../static/images/britain.png"></image>
				<view class="language-detil">हिन्दी</view>
			</view>
			<view class="cuIcon-right" style="padding-right: 30rpx;"></view>
		</view>
		<view class="language-item flex" style="align-items: center;justify-content: space-between;">
			<view class="flex" style="align-items: center;padding-left: 30rpx;">
				<image src="../../static/images/britain.png"></image>
				<view class="language-detil">नेपाली</view>
			</view>
			<view class="cuIcon-right" style="padding-right: 30rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			langChange(e){
				const {lang} =e.target.dataset;
				this._i18n.locale=lang
			}
		}
	}
</script>

<style lang="scss" scoped>
	.language-box{
		font-family:Myriad Pro;
		height: 178rpx;
		background-color: #DCDDDD;
		.preferred{
			font-size:24rpx;
			color: #A8A8A8;
			padding: 60rpx 0 0 29rpx;
		}
		.title{
			font-size: 40rpx;
			font-weight:bold;
			padding-left: 33rpx;
			padding-top: 8rpx;
		}
	}
	.language-item{
		background:rgba(255,255,255,1);
		border-top:1px solid rgba(220, 221, 221, 1);
		height: 110rpx;
		image{
			width: 50rpx;
			height: 50rpx;
		}
		.language-detil{
			padding-left: 28rpx;
			font-size:30rpx;
			font-family:Myriad Pro;
			font-weight:bold;
		}
	}
</style>
