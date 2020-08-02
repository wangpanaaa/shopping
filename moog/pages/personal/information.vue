<template>
	<view class="personal">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Personal information</block>
		</cu-custom>
		<view class="info">
			<view class="img">
				<image :src="userImg"></image>
				<view class="iconfont icon-xiugai"></view>
			</view>
			<text class="username">{{username}}</text>
			<text class="code">Invitation code: {{code}}</text>
		</view>
		<view class="main">
			<view class="cell">
				<view class="left">
					<view class="iconfont icon-jj"></view>
					<text>My Phone Number</text>
				</view>
				<text>{{tel}}</text>
			</view>
			<view class="cell">
				<view class="left">
					<view class="iconfont icon-icon"></view>
					<text>My Bank Card</text>
				</view>
				<view class="right">
					<text>{{card}}</text>
					<view class="iconfont icon-huabanbeifen12"></view>
				</view>
			</view>
			<view class="cell" @click="toPassword">
				<view class="left">
					<view class="iconfont icon-mima"></view>
					<text>Password Management</text>
				</view>
				<view class="right">
					<view class="iconfont icon-huabanbeifen12"></view>
				</view>
			</view>
			<view class="cell">
				<view class="left">
					<view class="iconfont icon-dizhi"></view>
					<text>Shipping Address</text>
				</view>
				<view class="right">
					<view class="iconfont icon-huabanbeifen12"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userImg: require('../../static/images/Agent-cooperation.png'),
				username: 'Jonathan999',
				code: '888',
				tel: '199****8888',
				card: '****888'
			}
		},
		methods:{
			toPassword(){
				uni.navigateTo({
					url:'../password/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personal {
		background: #FFFFFF;
		height: 100%;
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;

			.img {
				margin-top: 96rpx;
				position: relative;

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
				}

				.iconfont {
					font-size: 50rpx;
					color: #FAA81E;
					position: absolute;
					bottom: 0;
					right: 0;
				}
			}

			.username {
				margin-top: 20rpx;
				font-size: 34rpx;
				font-family: Myriad Pro;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
			}

			.code {
				margin-top: 10rpx;
				font-size:26rpx;
				font-family:Myriad Pro;
				font-weight:400;
				color:rgba(168,168,168,1);
				line-height:40rpx;
			}
		}
		.main{
			margin-top: 50rpx;
			.cell{
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 108rpx;
				.left{
					display: flex;
					.iconfont{
						font-size: 45rpx;
						margin-top: -10rpx;
						margin-right: 20rpx;
					}
					> text{
						font-size:28rpx;
						font-family:Myriad Pro;
						font-weight:bold;
						color:rgba(51,51,51,1);
					}
				}
				text{
					font-size:28rpx;
					font-family:Myriad Pro;
					font-weight:400;
					color:rgba(168,168,168,1);
					margin-right: 30rpx;
				}
				.right{
					display: flex;
					.iconfont{
						font-size: 20rpx;
					}
					text{
						margin-right: 7rpx;
					}
				}
			}
		}
	}
</style>
