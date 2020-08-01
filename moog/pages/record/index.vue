<template>
	<view class="recordCotain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Grab Order Record</block>
			<block slot="right">
				<span class="iconfont icon-kefu"></span>
			</block>
		</cu-custom>
		<view class="head">
			<view class="head_title">
				<p>This data is provided by Tesco </p>
				<p>Grab Order Record </p>
			</view>
			<view class="head_bg">
				<image src="../../static/images/recordHeadBg.png" mode=""></image>
			</view>
			<view class="head_tabs">
				<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
				<view :style="{left:tabs[currentTabs].left}" class="line"></view>
			</view>
		</view>
		<view class="swiper-area">
			<swiper :current="currentTabs" @change="change" @transition="swiperStart" @animationfinish="swiperEnd">
				<swiper-item>
					<scroll-view scroll-y  :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<all></all>
							<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<pending></pending>
								<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<completed></completed>
								<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<cancelled></cancelled>
							<view class="cu-load bg-white" :class="!false?'loading':'over'"></view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import all from "./components/all.vue"
	import pending from "./components/pending.vue"
	import completed from "./components/completed.vue"
	import cancelled from "./components/cancelled.vue"
	export default {
		components: {
			all,
			pending,
			completed,
			cancelled,
		},
		data() {
			return {
				tabs: [{
						name: 'All',
						left: '8.5%',
					},
					{
						name: 'Pending',
						left: '25.5%',
					},
					{
						name: 'Completed',
						left: '52.5%',
					},
					{
						name: 'Cancelled',
						left: '80.5%',
					}
				],
				currentTabs: 0,
				scrollViewHeight: 0
			}
		},
		mounted() {
			this.$offset(".swiper-area").then(res => {
				console.log(res);
				var Height = uni.getSystemInfoSync().screenHeight
				console.log(Height);
				this.scrollViewHeight = res.height;
			});
		},
		methods: {
			change({
				detail: {
					current
				}
			}) {
				// swiper index 变化时触发
				this.currentTabs = current;
				// setTimeout(() => {
				//   this.nav[this.current].triggered = 'restore'
				// }, 500)
			},
			swiperStart(e) {
				// this.nav[this.current].isTop = false
			},
			swiperEnd() {
				// this.nav[this.current].isTop = true
			},
			$offset(selector) {
				// 获取组件内元素的 offset 信息
				return new Promise(resolve =>
					uni
					.createSelectorQuery()
					.in(this)
					.select(selector)
					.boundingClientRect(data => resolve(data))
					.exec()
				);
			},
		}
	}
</script>

<style lang="less">
	.recordCotain {
		height: 100%;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
	}

	.icon-kefu {
	font-size: 50rpx;
	padding-right: 30rpx;
	}

	.head {
		padding: 24rpx 30rpx 0 30rpx;
		position: relative;

		&_title>p {
			&:nth-child(1) {
				color: #A8A8A8;
				font-size: 24rpx;
			}

			&:nth-child(2) {
				margin-top: 4rpx;
				color: #333333;
				font-weight: bold;
				font-size: 36rpx;
			}
		}

		&_bg {
			margin-top: 16rpx;
			width: 100%;
			height: 180rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		&_tabs {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			width: calc(100% - 45px);
			box-shadow: 0px 6rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
			border-radius: 23px;
			background: rgba(255, 255, 255, .96);
			height: 92rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 0 24rpx;
			position: relative;

			span {
				color: rgba(168, 168, 168, 1);
				font-size: 28rpx;
			}

			.line {
				width: 18rpx;
				height: 10rpx;
				background: rgba(51, 51, 51, 1);
				position: absolute;
				bottom: 0;
				left: 8.5%;
				transition: left .3s;
			}

			.tabsChecked {
				color: rgba(51, 51, 51, 1);
				font-weight: bold;
			}
		}
	}
.swiper-area{
	padding: 0 30rpx;
	flex: 1;
	uni-swiper{
		height: 100%;
	}
}
</style>
