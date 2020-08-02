<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Article details</block>
		</cu-custom>
		<view class="content">
			{{content}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				content:'',
			}
		},
		async onLoad(option) {
			const {id}=option
			const {data}=await this.$http.post('/api/config/noticedetail')
			this.content=data.content
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
</style>
