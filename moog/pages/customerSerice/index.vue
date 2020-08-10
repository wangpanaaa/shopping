<template>
	<view>
		<view class="custom_head">
			<cu-custom :isBack="true" style="color:#ffffff;"></cu-custom>
			<view class="head_text">{{$t('customerSerice').index1}}</view>
		</view>
		
		<view class="custom_content">
			<view class="content_item" v-for="(item,index) in list" :key='index'>
				<view class="item_left">
					<image :src="item.headimg" class="img_valtor"></image>
					<view class="left_msg">
						<view class="msg_name text_ellipsis">{{item.nickname}}</view>
						<view class="msg_phone text_ellipsis">
							<view class="cuIcon-phone icon_phone"></view>
							{{item.whatsapp}}
						</view>
					</view>
				</view>
				<button class="item_right" @tap="toCopy(item.whatsapp)">{{$t('customerSerice').index2}}</button>
			</view>
		</view>

	</view>
</template>

<script>
	import Api from "../../common/api.js"
	export default {
		data() {
			return {
				list: [],
			};
		},
		async mounted() {
			const list = await Api.getKefuList()
			this.list = list.data
		},
		methods: {
			toCopy(e) {
				uni.setClipboardData({
					data: e,
					success: function() {
						uni.showToast({
							icon:"none",
							title:"Copy Success"
						})
					}
				});
			}
		},
	}
</script>

<style lang="less">
	.text_ellipsis {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.custom_head {
		position: relative;
		height: 474rpx;
		background: url("~@/static/images/custom-server.png") no-repeat;
		background-size: 100% 100%;

		.head_text {
			position: absolute;
			left: 50%;
			bottom: 90rpx;
			transform: translateX(-50%);
			color: #ffffff;
			font-size: 34rpx;
		}
	}

	.custom_content {
		padding: 10rpx 0 0;
	}

	.content_item {
		padding: 0 30rpx;
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #ffffff;

		.item_left {
			padding: 20rpx 0;
			flex: 1;
			display: flex;

			.img_valtor {
				margin-right: 34rpx;
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
			}

			.left_msg {
				padding-top: 22rpx;

				.msg_name {
					width: 310rpx;
					padding-bottom: 15rpx;
					font-size: 30rpx;
				}

				.msg_phone {
					width: 310rpx;
					font-size: 26rpx;

					.icon_phone {
						padding-right: 14rpx;
						display: inline-block;
						font-size: 35rpx;
						color: green;
					}
				}
			}
		}

		.item_right {
			width: 200rpx;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 26rpx;
			background: linear-gradient(180deg,
				rgba(247, 222, 162, 1),
				rgba(240, 194, 80, 1));

			border-image: linear-gradient(170deg,
				rgba(172, 142, 66, 1),
				rgba(133, 108, 47, 1)) 2 2;
			border-radius: 5rpx;
		}
	}
</style>
