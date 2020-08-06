<template>
	<view>
		<view class="team-list" >
			<view class="item flex" v-for="(item,index) in team" :key="index">
				<view style="font-size:30rpx;">{{item.name}}</view>
				<view style="font-size:34rpx;color: #E9611B;">{{item.value}}</view>
			</view>
		</view>
		<view class="team-list" >
			<view class="item flex" v-for="(item,index) in charge" :key="index">
				<view style="font-size:30rpx;">{{item.name}}</view>
				<view style="font-size:34rpx;color: #E9611B;">{{item.value}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			team:{
				default:[]
			},
			charge:{
				default:[]
			}
		},
		created() {
			console.log(this.team,this.charge)
		}
	}
</script>

<style lang="less">
	.team-list{
		margin: 30rpx;
		background-color: #fff;
		padding-bottom: 40rpx;
		.item{
			margin: 0 36rpx 0 36rpx;
			height: 90rpx;
			align-items: center;
			justify-content: space-between;
			border-bottom:1px solid #F1F1F1 ;
		}
	}
</style>
