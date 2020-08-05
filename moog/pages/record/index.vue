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
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[0].data.triggered"
					 :refresher-enabled="tabs[0].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
						<view style="height:100%" v-if="true">
							<all :list="tabs[0].data.list"></all>
							<view class="cu-load" :class="tabs[0].data.bottom?'over':'loading'"></view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[1].data.triggered"
					 :refresher-enabled="tabs[1].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
						<view style="height:100%" v-if="true">
							<pending :list="tabs[1].data.list"></pending>
							<view class="cu-load" :class="tabs[1].data.bottom?'over':'loading'"></view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[2].data.triggered"
					 :refresher-enabled="tabs[2].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
						<view style="height:100%" v-if="true">
							<completed :list="tabs[2].data.list"></completed>
							<view class="cu-load" :class="tabs[2].data.bottom?'over':'loading'"></view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[3].data.triggered"
					 :refresher-enabled="tabs[3].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
						<view style="height:100%" v-if="true">
							<cancelled :list="tabs[3].data.list"></cancelled>
							<view class="cu-load" :class="tabs[3].data.bottom?'over':'loading'"></view>
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
	import {throttle} from "@/common/util.js";
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
						data: {
							page: 1, //传递参数
							count: 5, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Pending',
						left: '25.5%',
						data: {
							page: 1, //传递参数
							count: 5, //传递参数
							status: 0, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Completed',
						left: '52.5%',
						data: {
							page: 1, //传递参数
							count: 5, //传递参数
							status: 1, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Cancelled',
						left: '80.5%',
						data: {
							page: 1, //传递参数
							count: 5, //传递参数
							status: 2, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					}
				],
				currentTabs: 0,
				scrollViewHeight: 0,
				fetching:false
			}
		},
		onLoad() {
			uni.showLoading()
			this.tabs.forEach((v, i) => {
				let json
				if (v.name === 'All') {
					json = {
						page: v.data.page,
						count: v.data.count,
					}
				} else {
					json = {
						page: v.data.page,
						count: v.data.count,
						status: v.data.status
					}
				}
				this.$http.post('/api/order/log', json).then(data => {
					v.data.list = data.data
					if (data.data.length < v.data.count) v.data.bottom = true
					if (v.name === 'All') uni.hideLoading()
				})
			})
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
			swiperStart(e) {
				this.tabs[this.currentTabs].data.isTop = false
			},
			swiperEnd() {
				this.tabs[this.currentTabs].data.isTop = true
			},
			'onRefresh': throttle(function() {
				if (this.fetching) return;
				this.fetching = true;
				this.refresh()
			}, 10),
			'onRestore': throttle(function() {
				this.tabs[this.currentTabs].data.triggered = 'restore'
			}, 1000),
			scroll(e) {
				if (e.detail.scrollTop != 0) {
					this.$nextTick(() => {
						this.tabs[this.currentTabs].data.isTop = false
					})

				} else {
					this.$nextTick(() => {
						this.tabs[this.currentTabs].data.isTop = true
					})
				}
			},
			toupper() {
				this.$nextTick(() => {
					this.tabs[this.currentTabs].data.isTop = true
				})
			},
			change(e) {
				// swiper index 变化时触发
				this.currentTabs = e.detail.current;
				setTimeout(() => {
					this.tabs[this.currentTabs].data.triggered = 'restore'
				}, 500)
			},
			loadMore() {
				// 上拉加载
				if (this.fetching){
					this.$msg('Please wait on')
					 return
				};
				if (this.tabs[this.currentTabs].data.bottom){
					return 
				}
				++this.tabs[this.currentTabs].data.page
				let json
				if (this.tabs[this.currentTabs].name === 'All') {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
					}
				} else {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						status: this.tabs[this.currentTabs].data.status
					}
				}
				
				this.$http.post('/api/order/log', json).then(data => {
					this.fetching = false;
					this.tabs[this.currentTabs].data.list = this.tabs[this.currentTabs].data.list.concat(data.data)
					if (data.data.length <this.tabs[this.currentTabs].data.count) this.tabs[this.currentTabs].data.bottom = true
				})

			},
			refresh() {
				// 下拉刷新,数据初始化，没有备份p、c的值，更改data的p、c值需要一起更改下面p、c的值
				this.tabs[this.currentTabs].data.page = 1;
				this.tabs[this.currentTabs].data.count = 5;
				this.tabs[this.currentTabs].data.list = [];
				this.tabs[this.currentTabs].data.bottom= false;
				console.log(this.tabs[this.currentTabs].data)
				let json
				if (this.tabs[this.currentTabs].name === 'All') {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
					}
				} else {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						status: this.tabs[this.currentTabs].data.status
					}
				}
				this.fetching = true;
				let beginTime = new Date().getTime()
				this.$http.post('/api/order/log', json).then(data => {
					this.tabs[this.currentTabs].data.list = data.data
					if (data.data.length <this.tabs[this.currentTabs].data.count) this.tabs[this.currentTabs].data.bottom = true
					if (this.tabs[this.currentTabs].name === 'All') uni.hideLoading()
				}).finally(r => {
					//下拉刷新 计算接口响应时间，如果小于1s自己加延迟否则刷新组件会失效，框架导致
					let totalTime=new Date().getTime() - beginTime
					if ( totalTime < 1000) {
						console.log('刷新小于1秒')
						setTimeout(() => {
							this.fetching = false;
							this.tabs[this.currentTabs].data.triggered = false
						}, totalTime>500?500:1000)
					} else {
						this.fetching = false;
						this.tabs[this.currentTabs].data.triggered = false
						console.log('刷新大1秒');
					}
				})

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

<style lang="less" scoped>
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

	.swiper-area {
		flex: 1;

		uni-swiper {
			height: 100%;
		}
	}
</style>
