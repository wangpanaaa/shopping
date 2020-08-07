<template>
	<view class="page">
		<view class="personal">
			<cu-custom bgColor="bg-black" :isBack="true"><block slot="content">Personal information</block></cu-custom>
			<view class="info">
				<view class="img">
					<image :src="userImg" @click="previewImg(userImg)"></image>
					<image class="xiugai" src="../../static/images/xiugai.png" mode="aspectFill"  @click="portrait = true"></image>
				</view>
				<text class="username">{{ userInfo.username }}</text>
				<text class="code">Invitation code: {{ userInfo.uid }}</text>
			</view>
			<view class="main">
				<view class="cell">
					<view class="left">
						<view class="iconfont icon-jj"></view>
						<text>My Phone Number</text>
					</view>
					<text>{{ userInfo.tel }}</text>
				</view>
				<view class="cell" @click="topages('/pages/payment/cardInfos')">
					<view class="left">
						<view class="iconfont icon-icon"></view>
						<text>My Bank Card</text>
					</view>
					<view class="right">
						<text>{{ userInfo.bank_account }}</text>
						<view class="iconfont icon-huabanbeifen12"></view>
					</view>
				</view>
				<view class="cell" @click="topages('/pages/password/index')">
					<view class="left">
						<view class="iconfont icon-mima"></view>
						<text>Password Management</text>
					</view>
					<view class="right"><view class="iconfont icon-huabanbeifen12"></view></view>
				</view>
				<view class="cell" @click="topages('/pages/address/address')">
					<view class="left">
						<view class="iconfont icon-dizhi"></view>
						<text>Shipping Address</text>
					</view>
					<view class="right"><view class="iconfont icon-huabanbeifen12"></view></view>
				</view>
			</view>
		</view>
		<view class="portrait" v-if="portrait"></view>
		<view class="content" v-if="portrait">
			<image v-for="(item, index) in urlList" :src="item.img" :key="item.id" :class="index == clickData.id - 1 ? 'click' : ''" @tap="handClick(item)"></image>
			<view class="footer">
				<button class="cancel" @click="portrait = false">Cancel</button>
				<button class="confirm" @click="confirm">Confirm</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			clickData: '',
			portrait: false,
			userImg: '',
			username: 'Jonathan999',
			code: '888',
			tel: '199****8888',
			card: '****888',
			urlList: [
				{
					id: 1, 
					img: require('../../static/images/face/face1.png')
				},
				{
					id: 2,
					img: require('../../static/images/face/face2.png')
				},
				{
					id: 3,
					img: require('../../static/images/face/face3.png')
				},
				{
					id: 4,
					img: require('../../static/images/face/face4.png')
				},
				{
					id: 5,
					img: require('../../static/images/face/face5.png')
				},
				{
					id: 6,
					img: require('../../static/images/face/face6.png')
				},
				{
					id: 7,
					img: require('../../static/images/face/face7.png')
				},
				{
					id: 8,
					img: require('../../static/images/face/face8.png')
				},
				{
					id: 9,
					img: require('../../static/images/face/face9.png')
				},
				{
					id: 10,
					img: require('../../static/images/face/face10.png')
				},
				{
					id: 11,
					img: require('../../static/images/face/face11.png')
				},
				{
					id: 12,
					img: require('../../static/images/face/face12.png')
				},
				{
					id: 13,
					img: require('../../static/images/face/face13.png')
				},
				{
					id: 14,
					img: require('../../static/images/face/face14.png')
				},
				{
					id: 15,
					img: require('../../static/images/face/face15.png')
				},
				{
					id: 16,
					img: require('../../static/images/face/face16.png')
				}
			]
		};
	},
	computed: {
		userInfo: function() {
			console.log(this.$store.state.userInfo)
			return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'));
		}
	},
	mounted() {
		this.userImg = uni.getStorageSync('randomImg');
	},
	methods: {
		previewImg (arr, index) {
		  uni.previewImage({
		    current: index,
		    urls: typeof arr == 'string' ? [arr] : arr,
		    indicator: "number"
		  })
		},
		topages(e) {
			uni.navigateTo({
				url: e
			});
		},
		confirm() {
			this.userImg = this.clickData.img;
			uni.setStorageSync('randomImg', this.clickData.img);
			this.portrait = false;
		},
		handClick(e) {
			this.clickData = e;
			this.previewImg(e.img)
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background: #ffffff;
	height: 100%;
	position: relative;
	.personal {
		background: #ffffff;
		height: 100%;
		background: #ffffff;
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

				.xiugai {
					width: 50rpx;
					height: 50rpx;
					color: #faa81e;
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
				font-size: 26rpx;
				font-family: Myriad Pro;
				font-weight: 400;
				color: rgba(168, 168, 168, 1);
				line-height: 40rpx;
			}
		}

		.main {
			margin-top: 50rpx;

			.cell {
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 108rpx;

				.left {
					display: flex;

					.iconfont {
						font-size: 45rpx;
						margin-top: -10rpx;
						margin-right: 20rpx;
					}

					> text {
						font-size: 28rpx;
						font-family: Myriad Pro;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}
				}

				text {
					font-size: 28rpx;
					font-family: Myriad Pro;
					font-weight: 400;
					color: rgba(168, 168, 168, 1);
					margin-right: 30rpx;
				}

				.right {
					display: flex;
					align-items: center;
					.iconfont {
						font-size: 20rpx;
					}

					text {
						margin-right: 7rpx;
					}
				}
			}
		}
	}

	.portrait {
		background: #000;
		top: 0rpx;
		height: 100%;
		opacity: 0.4;
		width: 100%;
		position: absolute;
		z-index: 10000;
	}

	.content {
		background: #fff;
		position: absolute;
		display: flex;
		z-index: 10001;
		flex-wrap: wrap;
		bottom: 0;
		padding-top: 48rpx;
		image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			margin: 10rpx 15rpx;
		}
		.click {
			border: 2px solid;
		}
		.footer {
			display: flex;
			font-size: 34rpx;
			font-family: Myriad Pro;
			font-weight: 400;
			color: rgba(17, 17, 17, 1);
			margin: 54rpx 30rpx 68rpx 30rpx;
			.cancel {
				width: 330rpx;
				height: 98rpx;
				background: rgba(255, 255, 255, 1);
				border: 1rpx solid rgba(34, 47, 62, 1);
				border-radius: 5rpx;
			}

			.confirm {
				margin-left: 30rpx;
				width: 330rpx;
				height: 98rpx;
				background: rgba(250, 167, 35, 1);
				border-radius: 5rpx;
			}
		}
	}
}
</style>
