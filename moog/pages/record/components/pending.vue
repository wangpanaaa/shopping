<template>
	<view class="pendingContain">
		<record class="record" status="2"></record>
		<record class="record" status="2"></record>
		<record class="record" status="2"></record>
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
	.pendingContain{
		min-height: 100%;
	}
	.record{
		margin-bottom: 10px;
	}
</style>
