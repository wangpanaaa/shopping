<template>
	<view class="completedContain">
		<record class="record" status="1"></record>
		<record class="record" status="1"></record>
		<record class="record" status="1"></record>
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
	.completedContain{
		min-height: 100%;
	}
	.record{
		margin-bottom: 10px;
	}
</style>
