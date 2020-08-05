<template>
	<view class="team">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Team Report</block>
			<block slot="right">
				<view>
					<span class="iconfont icon-tuandui" style="font-size: 40rpx;padding: 20rpx;" @tap='topages("/pages/team/members")'></span>
					<span class="iconfont icon-liebiao" style='margin:0 30rpx 0 47rpx;font-size: 38rpx;'></span>
				</view>
			</block>
		</cu-custom>
		<!-- <view class="nav">
			<dateSelect @change="dateSelectChange"></dateSelect>
		</view> -->
		<view class="team-list" >
			<view class="item flex" v-for="(item,index) in listData.team" :key="index">
				<view style="font-size:30rpx;">{{item.name}}</view>
				<view style="font-size:34rpx;color: #E9611B;">{{item.value}}</view>
			</view>
		</view>
		<view class="team-list" >
			<view class="item flex" v-for="(item,index) in listData.charge" :key="index">
				<view style="font-size:30rpx;">{{item.name}}</view>
				<view style="font-size:34rpx;color: #E9611B;">{{item.value}}</view>
			</view>
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
				listData:[]
			}
		},
		onLoad() {
			this.$http.post('/api/user/teamreport').then(res=>{
				this.listData=res.data
			})
		},
		methods:{
			dateSelectChange(e) {
				this.start_time=e[0]
				this.end_time=e[1]
					// uni.showLoading()
					// this.fetchList()
			},
			topages(e){
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.team{
		font-family:Myriad Pro;
	}
	.nav {
		padding:0 30rpx;
		margin-top:-30rpx ;
		height: 100rpx;
		line-height: 100rpx;
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
	.team-list{
		margin: 30rpx;
		background-color: #fff;
		padding-bottom: 40rpx;
		.item{
			margin: 0 36rpx 0 36rpx;
			height: 90rpx;
			align-items: center;
			justify-content: space-between;
			border-bottom:1px solid #DCDDDD ;
		}
	}
</style>
