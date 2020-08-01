<template>
	<view class="blacnceContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Grab Order Record</block>
			<block slot="right">
				<span class="iconfont icon-kefu"></span>
			</block>
		</cu-custom>
		<view class="head_tabs">
			<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
			<view :style="{left:tabs[currentTabs].left}" class="line"></view>
		</view>
		<view class="swiper-area">
			<swiper :current="currentTabs" @change="change" @transition="swiperStart" @animationfinish="swiperEnd">
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">

							<dokypay></dokypay>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">

							<cashfree></cashfree>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<mypay></mypay>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<chrrp></chrrp>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import dokypay from "./components/dokypay.vue"
	import cashfree from "./components/cashfree.vue"
	import mypay from "./components/mypay.vue"
	import chrrp from "./components/chrrp.vue"
	export default {
		components: {
			dokypay,
			cashfree,
			mypay,
			chrrp,
		},
		data() {
			return {
				tabs: [{
						name: 'DokyPay',
						left: '13.5%',
					},
					{
						name: 'Cashfree',
						left: '41.5%',
					},
					{
						name: 'Mypay',
						left: '64.5%',
					},
					{
						name: 'CHrrp',
						left: '85%',
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
	.blacnceContain {
		height: 100%;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.icon-kefu {
		font-size: 50rpx;
		padding-right: 30rpx;
	}

	.swiper-area {
		flex: 1;
		overflow: hidden;
		uni-swiper {
			height: 100%;
		}
	}

	.head_tabs {
		width: calc(100% - 30px);
		margin:10px auto 20px auto;
		box-shadow: 0px 3px 12px 4px rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, .96);
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;

		span {
			color: rgba(168, 168, 168, 1);
			font-size: 14px;
		}

		.line {
			width: 9px;
			height: 5px;
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
</style>
