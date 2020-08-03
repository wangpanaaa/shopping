<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Article details</block>
		</cu-custom>
		<view v-if='content'>
			<view class="content" v-html="content">
			</view>
		</view>
		<view v-else class="none-data">
			No New Information
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
			const {data}=await this.$http.post('/api/config/noticedetail',{id})
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
	.none-data{
		display: flex;
		height: 50vh;
		align-items: center;
		justify-content: center;
	}
</style>
