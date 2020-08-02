<template>
	<view class="recordCotain">
		<view class="recordHead">
			<view class="recordHead_left">
				<view class="recordHead_left_time">
					<span>Time</span> <span>{{data.create_time.split(' ')[0]}}</span> <span>{{data.create_time.split(' ')[1]}}</span>
				</view>
				<view class="recordHead_left_number">
					<span>Number</span> <span>{{data.id}}</span>
				</view>
			</view>
			<view :class="['recordHead_button',buttonStatus[data.status]]">
				{{buttonStatus[data.status]}}
			</view>
		</view>
		<view class="recordContent">
			<view class="recordContent_image">
				<image :src="data.goods_pic" mode="aspectFill"></image>
			</view>
			<p>
				{{data.goods_name}}
			</p>
		</view>
		<view class="recordFoot">
			<view class="recordFoot_item">
				<span>order Tota</span><span>{{data.price}}</span>
			</view>
			<view class="recordFoot_item">
				<span> Commission</span><span>{{data.commission}}</span>
			</view>
			<view class="recordFoot_item">
				<span>Estimated refund</span><span style="color: #ffb44e;font-size: 16px;font-weight: bold;">{{data.refund}}</span>
			</view>
			<view class="recordFoot_button" v-if="data.status==2">
				   <button type="default">Cancel</button>
					 <button type="default" @click="submit">Submit</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttonStatus: {
					1: 'Completed',
					0: 'Pending',
					2: 'Cancelled',
				}
			}
		},
		props:{
			data:{
				type:Object,
				default:function(){
					return{}
				}
			}
		},
		created(){
			console.log(this.data)
					console.log(1111111)
		},
		methods:{
			submit(){
				uni.navigateTo({
					url:"/pages/blance/index"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.recordCotain {
		background-color: #FFFFFF;
		border-radius: 10rpx;
		padding: 30rpx 20rpx;

		.recordHead {
			display: flex;
			border-bottom: 1rpx solid #F6F6F6;
			padding-bottom: 24rpx;

			&_left {
				flex: 1;

				&_time span {
					display: inline-block;

					&:nth-child(1) {
						width: 106rpx;
						color: #A8A8A8;
						font-size: 24rpx;
					}

					&:nth-child(n+2) {
						width: 140rpx;
						color: #33333;
						font-size: 24rpx;
					}

				}

				&_number span {
					display: inline-block;

					&:nth-child(1) {
						width: 106rpx;
						color: #A8A8A8;
						font-size: 24rpx;
					}

					&:nth-child(n+2) {
						color: #33333;
						font-size: 24rpx;
					}
				}
			}

			&_button {
				width: 154rpx;
				height: 40rpx;
				background: rgba(0, 160, 117, 1);
				border-radius: 6rpx;
				line-height: 40rpx;
				font-size: 26rpx;
				font-family: Myriad Pro;
				text-align: center;
				color: #FFFFFF;
			}

			.Completed {
				background: rgba(0, 160, 117, 1);
			}

			.Pending {
				background: rgba(255, 112, 112, 1);
			}

			.Cancelled {
				background: rgba(164, 164, 164, 1);
			}
		}

		.recordContent {
			padding: 30rpx 0;
			display: flex;
			border-bottom: 1rpx solid #F6F6F6;

			&_image {
				width: 120rpx;
				height: 120rpx;
				padding: 4rpx;
				box-sizing: border-box;
				border: 1rpx solid rgba(220, 221, 221, 1);
				border-radius: 10rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			p {
				flex: 1;
				margin-left: 20rpx;
				text-align: justify;
			}
		}

		.recordFoot {
			padding-top: 30rpx;
			display: flex;
			flex-direction: column;

			&_item {
				display: flex;
				justify-content: space-between;
				&:nth-child(n+2){
					margin-top: 12rpx;
				}
			}
			&_button{
				display: flex; justify-content: space-between;
				margin-top: 30rpx;
				button{
					width: 300rpx;
					height: 100rpx;
					line-height: 100rpx;
					color: #222F3E;
					background: #FFFFFF;
					border:1rpx solid rgba(34,47,62,1);
					border-radius:6rpx;
					&:nth-child(2){
						background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1))
					}
				}
			}
		}
	}
</style>
