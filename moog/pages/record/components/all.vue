<template>
	<view class="allContain">
		<record class="record" v-for="(v ,i) in list" :data="v"></record>
			<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
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
		props:{
			list:{
				type:Array,
				default:[]
		  },
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.allContain{
		min-height: 100%;
		padding: 0 30rpx;
	}
	.record{
		&:nth-child(n+2){
				margin-top: 20rpx;
		}
	}
</style>
