<template>
	<view class="team">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Team Report</block>
			<block slot="right">
				<view>
					<span class="iconfont icon-baobiao" style="font-size: 40rpx;"></span>
					<span class="iconfont icon-liebiao" style='margin:0 30rpx 0 47rpx;font-size: 38rpx;'></span>
				</view>
			</block>
		</cu-custom>
		<view class="nav">
			<view class="head_tabs">
				<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
				<view :style="{left:tabs[currentTabs].left}" class="line" v-if="tabs.length>1"></view>
			</view>
			<dateSelect @change="dateSelectChange"></dateSelect>
		</view>
	</view>
</template>

<script>
	import dateSelect from "pages/accountDetail/components/dateSelect.vue"
	export default {
		components:{
			dateSelect
		},
		data(){
			return {
				currentTabs: 0,
				tabs: [{
						name: 'All',
						left: '16.65%',
						start_time:'',//传递参数
						end_time:'',//传递参数
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'First',
						left: '50%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 1, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Secondary',
						left: '83.35%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 2, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Tertiary',
						left: '83.35%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 2, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					}
				],
			}
		},
		methods:{
			dateSelectChange(e) {
				this.start_time=e[0]
				this.end_time=e[1]
					// uni.showLoading()
					// this.fetchList()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.team{
		font-family:Myriad Pro;
	}
	.nav {
		padding: 30rpx;
		height: 230rpx;
		color: #FFFFFF;
		background: rgba(34, 47, 62, 1);
	}
	
	.head_tabs {
		width: calc(100%);
		box-shadow: 0px 6rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, .96);
		height: 92rpx;
		display: flex;
		align-items: center;
		position: relative;
	
		span {
			flex: 1;
			color: rgba(168, 168, 168, 1);
			font-size: 28rpx;
			display: inline-block;
			text-align: center;
		}
	
		.line {
			width: 18rpx;
			height: 10rpx;
			background: rgba(51, 51, 51, 1);
			position: absolute;
			bottom: 0;
			left: 8.5%;
			transition: left .3s;
			transform: translateX(-50%);
		}
	
		.tabsChecked {
			color: rgba(51, 51, 51, 1);
			font-weight: bold;
		}
	}
</style>
