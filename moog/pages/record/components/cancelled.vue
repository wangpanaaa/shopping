<template>
	<view class="cancleContain">
		<record class="record" status="3"></record>
		<record class="record" status="3"></record>
		<record class="record" status="3"></record>
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

<style lang="less">
	.cancleContain{
		min-height: 100%;
	}
	.record{
		margin-bottom: 20rpx;
	}
</style>