<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Shipping Address</block>
			<view slot='right' class="iconfont icon-add" @click="toAdd"></view>
		</cu-custom>
		<view class="content">
			<view class="item" v-for="item in listData" :key='item.id' @click="toAdd(item)">
				<view class="default" v-if="item.isdefault===1"></view>
				<view class="title">
					<text class="textl">{{item.realname}} </text>
					<view class="right">
						<text class="iconfont icon-jj"></text>
						<text>{{item.telephone}}</text>
					</view>
				</view>
				<view class="text-con">
					{{item.detail}}
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData:[]
			}
		},
		async onShow() {
			const data=await this.$http.post('/api/user/address')
			this.listData=data.data
		},
		methods: {
			toAdd(item) {
				let data=''
				if(item){
					data=encodeURIComponent(JSON.stringify(item))
				}
				uni.navigateTo({
					url: './addAddress?data='+data
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
