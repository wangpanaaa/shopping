<template>
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Message list</block>
		</cu-custom>
		<view v-if="listData.length>0">
			<view v-for="(item,index) in listData" :key="index">
				<view class="date">{{item.create_time}}</view>
				<view class="item" @tap="topages(item.id)">
					<view class="title">
						<text class="textl">{{item.title}}</text>
						<text class="cuIcon-right" style="color: #DCDDDD;"></text>
					</view>
					<view class="text-con" v-html="item.content"></view>
				</view>
			</view>
		</view>
		<nodata v-else></nodata>
		

	</view>
</template>

<script>
	import nodata from '../index/no-data.vue'
	export default {
		components:{
			nodata
		},
		data() {
			return {
				listData:[]
			}
		},
		onLoad() {
			this.$http.post('/api/config/notice').then(res=>{
				this.listData=res.data
			})
		},
		methods:{
			topages(e){
				uni.navigateTo({
					url:'/pages/index/noticedetail?id='+e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.date {
		margin: 32rpx 0;
		text-align: center;
		font-size: 26rpx;
		font-family: Myriad Pro;
		opacity: 0.8;
	}

	.item {
		margin: 0 30rpx;
		border: 1px solid rgba(220, 221, 221, 1);
		border-radius: 10px;
		background-color: #FFFFFF;

		.title {
			height: 85rpx;
			margin: 0 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #DCDDDD;

			.textl {
				font-size: 30rpx;
				font-family: Myriad Pro;
				font-weight: bold;
			}
		}

		.text-con {
			margin: 21rpx 28rpx 30rpx 28rpx;
			height: 150rpx;
			text-overflow: ellipsis;
			overflow: hidden;
			font-size:24rpx;
			font-family:Bahnschrift;
			line-height:40rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
			word-break: break-all;
		}
	}
</style>
