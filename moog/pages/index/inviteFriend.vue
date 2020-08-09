<template>
	<view class='box'>
		<view class="bg-img">
			<status></status>
			<view class="flex">
				<text class="iconfont icon-fanhui left-icon" @tap="BackPage"></text>
			</view>
			<view class="title">{{$t('inviteFriend').index1}}</view>
			<view class="info-text">{{$t('inviteFriend').index2}}</view>
		</view>
		<view class="invitation">
			<view style="font-size:34rpx;border-bottom:1px dashed #ccc ;margin: 0 40rpx;padding-bottom: 37rpx;">{{$t('inviteFriend').index3}}</view>
			<view class="share">
				<view class="share_text">

					Share with friends and get more orders.
					Your friends download and use well can also earn a high amount of brush single income. Because of your
					recommendation, if your friend gets 100 rupees, you can also get 16%, that is, 16 rupees.
					Make money together !

				</view>
				<view style="font-size:34rpx;color: #A8A8A8;margin-top: 20rpx;">{{$t('inviteFriend').index4}}<text style="margin-left: 20rpx;color: #333;font-weight: bold;">{{userInfo.uid}}</text></view>
			</view>
		</view>
		<view class="padding flex flex-direction">
			<button @tap="copyLinks" class="cu-btn lg" style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
		border:1px solid;height:110rpx;border: 1px solid rgb(143, 144, 144);">
				{{$t('inviteFriend').index5}}
			</button>
		</view>
	</view>
</template>

<script>
	import status from '../../colorui/components/istatus.vue';
	import {
		url
	} from '../../config/baseUrl.js'
	// import {
	// 	mapState
	// } from 'vuex';
	export default {
		components: {
			status
		},
		data() {
			return {
				invitationSrc: ''
			}
		},
		computed: {
			userInfo: function() {
				return this.$store.state.userInfo || JSON.parse(uni.getStorageSync('userInfo'))
			}
		},
		mounted() {
			this.invitationSrc = url + '/api/account/qrcode/uid/' + this.userInfo.uid
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			copyLinks() {
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: this.userInfo.invite_link,
					success: function() {
						uni.showToast({
							title: "Copy successful"
						})
					}
				});
				uni.shareWithSystem({
					type: "text",
					summary: 'Just one mobile phone, you can get income every day, join to make money',
					href: this.invitationSrc,
					// imageUrl:"../../static/logo.png",
					success() {
						console.log('分享成功');
						// 分享完成，请注意此时不一定是成功分享
					},
					fail() {
						console.log('分享失败');
						// 分享失败  
					}
				})
				//#endif
				// #ifdef H5
				this.copyArticle(this.userInfo.invite_link)
				uni.showToast({
					title: "Copy successful"
				})
				// #endif
			},
			copyArticle(content) {
				let input = document.createElement("input")
				input.value = content
				input.readOnly = "readOnly"
				document.body.appendChild(input)
				input.select() // 选择对象
				input.setSelectionRange(0, content.length) //核心
				let result = document.execCommand("Copy") // 执行浏览器复制命令
				input.remove()
				return result
			}

		}
	}
</script>

<style lang="scss" scoped>
	.box {
		font-family: Myriad Pro;
	}

	.bg-img {
		color: #fff;
		background-image: url(../../static/images/invite.png);
		height: 476rpx;
		/* #ifdef APP-PLUS */
		height: calc(476rpx + var(--status-bar-height));
		/* #endif */

		.flex {
			padding-top: 20rpx;
			align-items: center;
			justify-content: space-between;
		}

		.left-icon {
			margin-left: 30rpx;
			font-size: 30rpx;
			padding: 10rpx;
		}

		.title {
			text-align: center;
			font-size: 50rpx;
			font-weight: bold;
			padding-top: 110rpx;
		}

		.info-text {
			text-align: center;
			margin-top: 18rpx;
			font-size: 30rpx;
		}
	}

	.invitation {
		text-align: center;
		margin: -60rpx 50rpx 30rpx 50rpx;
		height: 598rpx;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 10rpx;
		padding: 40rpx 0 60rpx 0;
		flex-direction: column;
		display: flex;

		.share {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&_text{
				text-align: center;
				padding: 50rpx 40rpx;
				text-indent: 1rem;
			}
		}
	}
</style>
