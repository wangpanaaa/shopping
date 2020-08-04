<template>
	<view class="completedContain">
	<record class="record" v-for="(v ,i) in list" :data="v" :key='i'></record>	
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
		props:{
			list:{
				type:Array,
				default:[]
		  },
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.completedContain{
		min-height: 100%;
			padding: 0 30rpx;
	}
	.record{
		&:nth-child(n+2){
				margin-top: 20rpx;
		}
	}
</style>
