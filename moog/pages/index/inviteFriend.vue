<template>
	<view class='box'>
		<view class="bg-img">
			<status></status>
			<view class="flex">
				<text class="iconfont icon-fanhui left-icon" @tap="BackPage"></text>
			</view>
			<view class="title">invite friends</view>
			<view class="info-text">Take a commission</view>
		</view>
		<view class="invitation">
			<view style="font-size:80rpx;color: #FAA723;margin-top: 44rpx;">{{userInfo.invite_earnings}}</view>
			<view style="font-size:34rpx;border-bottom:1px dashed #ccc ;margin: 0 40rpx;padding-bottom: 37rpx;">Invitation to
				experience money</view>
			<image :src="invitationSrc" style="margin-top: 27rpx;"></image>
			<view style="font-size:34rpx;color: #A8A8A8;margin-top: 20rpx;">Invite code: <text style="margin-left: 20rpx;color: #333;">{{userInfo.uid}}</text></view>
		</view>
		<view class="padding flex flex-direction">
			<button @tap="copyLinks" class="cu-btn lg" style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
		border:1px solid;height:110rpx;border: 1px solid rgb(143, 144, 144);">
				Share links
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
			userInfo:function (){
				return this.$store.state.userInfo  || JSON.parse(uni.getStorageSync('userInfo'))
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
						console.log('Copy successful, go to the browser to open it');
					}
				});
				//#endif
				// #ifdef H5
					this.copyArticle(this.userInfo.invite_link)
					uni.showToast({
						title:"Copy successful"
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
		height: 526rpx;

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
			margin-top: 156rpx;
		}

		.info-text {
			text-align: center;
			margin-top: 41rpx;
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

		image {
			width: 220rpx;
			height: 218rpx;
		}
	}
</style>
