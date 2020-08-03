<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Shipping Address</block>
			<view slot='right' class="iconfont icon-add" @click="toAdd"></view>
		</cu-custom>
		<view class="content">
			<view class="item">
				<view class="default"></view>
				<view class="title">
					<text class="textl">Information title </text>
					<view class="right">
						<text class="iconfont icon-jj"></text>
						<text>{{tel}}</text>
					</view>
				</view>
				<view class="text-con">
					Hollywood legend Olivia de Havilland, star of "Gone With the Wind", died on Sunday at the age of 104 at her home
					in
					Paris. Publicist Lisa Goldberg said she died peacefully of natural causes.
					The doe-eyed actress beloved to millions as the sainted Melanie Wilkes in "Gone With the Wind" also won two Oscars
					and was key to improving Hollywood's contract system for actors.
					De Havilland was the sister of fellow Oscar winner Joan Fontaine, with whom she had a troubled relationship.
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '91-1888888888'
			}
		},
		methods: {
			toAdd() {
				uni.navigateTo({
					url: './addAddress'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.iconfont {
		font-size: 47rpx;
		margin-right: 30rpx;
	}

	.content {
		margin-top: 30rpx;

		.item {
			margin: 0 30rpx;
			margin-top: 20rpx;
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
			background-color: #FFFFFF;
			position: relative;

			.default {
				position: absolute;
				width: 0;
				height: 0;
				border-width: 47rpx;
				border-style: solid;
				border-color: transparent #FF7070 transparent transparent;
				border-radius: 10rpx;
				transform: rotate(45deg);
				left:-47rpx;
				top:-47rpx;
			}

			.title {
				height: 85rpx;
				margin: 0 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px dotted #DCDDDD;

				.textl {
					font-size: 30rpx;
					font-family: Myriad Pro;
					font-weight: bold;
				}

				.right {
					.iconfont {
						margin-right: 10rpx;
						font-size: 29rpx;
					}

					text {
						font-size: 26rpx;
						font-family: Microsoft YaHei UI;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						line-height: 40rpx;
					}
				}
			}

			.text-con {
				margin: 21rpx 28rpx 30rpx 28rpx;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				font-size: 24rpx;
				font-family: Bahnschrift;
				line-height: 40rpx;
			}
		}
	}
</style>
