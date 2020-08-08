<template>
	<view class="box">
		<view class="cu-list menu-avatar" v-for="(item,index) in charge" :key='index'>
			<view class="title">
				<view>{{item.title}}</view>
				<view class="ratio" :class="[item.title=='First'?'first':item.title=='Secondary'?'secondary':'tertiary']" v-if="item.ratio">Ratio {{item.ratio}}</view>
			</view>
			<view class="flex items">
				<view class="teams">
					<view class="flex border-r" style="justify-content: space-between;">
						<view>Number of teams</view>
						<view>{{item.teams_num}}</view>
					</view>
					<view class="flex border-r" style="justify-content: space-between;">
						<view>Team runimg</view>
						<view>{{item.team_running}}</view>
					</view>
				</view>
				<view class="teams">
					<view class="flex" style="justify-content: space-between;">
						<view>Team commisson</view>
						<view>{{item.team_commission}}</view>
					</view>
					<view class="flex" style="justify-content: space-between;">
						<view>My commission</view>
						<view>{{item.my_commission}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			charge: {
				default: function() {
					return []
				}
			}
		},
		mounted() {
			console.log(this.charge)
		}
	}
</script>

<style lang="less">
	.box {
		font-family: Myriad Pro;
	}

	.team-list {
		margin: 30rpx;
		background-color: #fff;
		padding-bottom: 40rpx;

		.item {
			margin: 0 36rpx 0 36rpx;
			height: 90rpx;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #F1F1F1;
		}
	}

	.menu-avatar {
		background-color: #FFFFFF;
		margin: 20rpx 30rpx;
	}

	.ratio {
		font-size: 26rpx;
		
		border-radius: 5px;
		padding: 5rpx 16rpx;
	}
	.first{
		background-color: #F6C42C;
	}
	.secondary{
		background-color: #5792FF;
	}
	.tertiary{
		background-color: #FF7757;
	}

	.title {
		display: flex;
		font-size: 30rpx;
		font-weight: bold;
		height: 70rpx;
		align-items: center;
		justify-content: space-between;
		margin: 0 30rpx;
		border-bottom: 1px dashed #DCDDDD;
	}

	.items {
		margin: 26rpx 32rpx 31rpx 32rpx;
		.teams {
			width: 50%;
			font-size: 24rpx;
			line-height: 40rpx;
			opacity: 0.8;
			margin-right: 24rpx;
		}
		.border-r{
			border-right: 1px solid #DCDDDD;
			padding-right: 20rpx;
		}
	}
</style>
