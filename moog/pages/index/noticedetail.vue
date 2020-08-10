<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">{{title}}</block>
		</cu-custom>
		<view v-if='content'>
			<view class="content" v-html="content">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				content:'',
				title:'',
			}
		},
		async onLoad(option) {
			uni.showLoading()
			const {id}=option
			const {data}=await Api.noticedetail({id})
			uni.hideLoading()
			this.content=data.content
			this.title=data.title
		}
	}
</script>

<style>
	.content{
		margin:20rpx;
		font-size: 24rpx;
		font-family:Myriad Pro;
		line-height: 40rpx;
	}
	.none-data{
		display: flex;
		height: 50vh;
		align-items: center;
		justify-content: center;
	}
</style>
