<template>
	<view class="allContain">
		<record class="record" status="1"></record>
		<record class="record" status="2"></record>
		<record class="record" status="3"></record>
	</view>
</template>

<script>
	import record from "./record.vue"
	export default{
		components:{record},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	.allContain{
		min-height: 100%;
	}
	.record{
		margin-bottom: 20rpx;
	}
</style>
