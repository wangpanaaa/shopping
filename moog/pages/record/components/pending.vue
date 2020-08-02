<template>
	<view class="pendingContain">
		<record class="record" status="2"></record>
		<record class="record" status="2"></record>
		<record class="record" status="2"></record>
			<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
	</view>
</template>

<script>
	import record from "./record.vue"
	export default {
		components: {
			record
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.pendingContain{
		min-height: 100%;
			padding: 0 30rpx;
	}
	.record{
		&:nth-child(n+2){
				margin-top: 20rpx;
		}
	}
</style>
