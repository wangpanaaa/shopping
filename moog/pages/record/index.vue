<template>
	<view class="recordCotain" :class="[orderConfirm ?'noClick':'']">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">{{$t('order').index1}}</block>
			<block slot="right">
				<span class="iconfont icon-kefu" @tap='navigateTo("/pages/customerSerice/index")'></span>
			</block>
		</cu-custom>
		<view class="head">
<!-- 			<view class="head_title">
				<p>This data is provided by Tesco </p>
				<p>Grab Order Record </p>
			</view> -->
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
		
		<view class="cu-load load-modal" v-if="orderConfirm">
			<!-- <video src="../../static/video/1596197044700795.mp4" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"></video> -->
			<image src="../../static/images/gif2.gif" class="modal-image"></image>
			<text>
				{{ confirmTitleItem }}
				<text class="dotting"></text>
			</text>
		</view>
		
		<view class="cu-modal" :class="modalName == 'order-suc' ? 'show' : ''" @tap.stop="noClick">
			<view class="cu-dialog order-suc">
				<image src="../../static/images/order-suc.png"></image>
				<view class="completed">order Completed</view>
				<view class="order-suc-item">
					<text>Total order amount</text>
					<text>{{goodsItem.price}}</text>
				</view>
				<view class="order-suc-item">
					<text>{{$t('order').index8}}</text>
					<text>{{goodsItem.commission}}</text>
				</view>
				<view class="order-suc-item">
					<text>{{$t('order').index10}}</text>
					<text style="font-size: 34rpx;color: #FFB745;font-weight: bold;">{{goodsItem.refund}}</text>
				</view>
				<view class="flex flex-direction"><button class="cu-btn" @tap="hidwModalName">Confirm</button></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import all from "./components/all.vue"
	import pending from "./components/pending.vue"
	import completed from "./components/completed.vue"
	import cancelled from "./components/cancelled.vue"
	import {throttle} from "@/common/util.js";
	import Api from "../../common/api.js"
	export default {
		components: {
			all,
			pending,
			completed,
			cancelled,
		},
		data() {
			return {
				
				current: 0,
				modalName: null,
				orderConfirm: false,
				confirmTitle: ['Ordering', 'Filling in the receiving information', 'Payment successful', 'Order submission', 'Writing comments', 'Order completed'],
				confirmTitleItem: 'Ordering',
				goodsItem:{},
				
				
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
		  	Api.orderLog(json).then(data => {
					v.data.list = data.data
					if (data.data.length < v.data.count) v.data.bottom = true
					if (v.name === 'All') uni.hideLoading()
				})
			})
			uni.$on('onCancels',data=>{
				uni.showLoading()
			Api.orderConfirm({ orderid: data.data.id, status: 2 }).then(res => {
					uni.hideLoading()
					if (res.code === 0) {
						uni.showToast({
							icon: 'none',
							title: res.msg
						});
						this.onRefresh()
					}
				});
			})
			
			uni.$on('onSubmits',data=>{
				this.current = 0;
				this.orderConfirm = true;
				this.goodsItem=data.data
				let times = setInterval(() => {
					if(++this.current<6){
						this.confirmTitleItem=this.confirmTitle[this.current]
					}else{
						this.orderConfirm = false;
						this.modalName = 'order-suc';
						clearInterval(times)
						Api.orderConfirm({orderid:data.data.id,status:1}).then(res=>{
							if (res.code == 0) {
								uni.showToast({
									icon: 'none',
									title: res.msg
								});
							}
							this.$store.dispatch('getUserUpdate');
						})
					}
				}, Math.floor(Math.random() * 4 + 4) * 500);
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
			noClick(){
				
			},
			hidwModalName(){
				this.modalName=null;
				this.onRefresh()
			},
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
				
			  Api.orderLog(json).then(data => {
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
				Api.orderLog(json).then(data => {
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
			navigateTo(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.noClick{
		pointer-events: none;
	}
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
	.cu-modal.show{
		z-index: 9999;
	}
	.head {
		padding: 0rpx 30rpx 0 30rpx;
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
			border-radius: 6rpx;
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
	.cu-load.load-modal uni-image {
		width: 100%;
		height: 150px;
	}
	
	.cu-load.load-modal::after {
		display: none;
	}
	
	.cu-load.load-modal {
		width: auto;
		height: 380rpx;
		margin-left: 75rpx;
		margin-right: 75rpx;
		padding-top: 10rpx;
		text {
			font-size: 30rpx;
			font-family: Myriad Pro;
			margin-bottom: 20rpx;
		}
	}
	
	.order-suc {
		width: auto;
		margin-left: 75rpx;
		margin-right: 75rpx;
		image {
			margin: 62rpx 125rpx 0 125rpx;
			width: 350rpx;
			height: 260rpx;
		}
		.completed {
			font-size: 38rpx;
			font-weight: bold;
			padding: 40rpx 0;
			margin: 0 31rpx 60rpx 31rpx;
			border-bottom: 1px solid #dcdddd;
		}
		.order-suc-item {
			display: flex;
			justify-content: space-between;
			margin: 0 42rpx;
			line-height: 47rpx;
			font-size: 26rpx;
			font-family: Myriad Pro;
		}
		.flex-direction {
			margin: 43rpx 40rpx 50rpx 40rpx;
		}
		.cu-btn {
			height: 84rpx;
			background-color: #faa723;
			font-family: Myriad Pro;
			font-size: 34rpx;
		}
	}
	.dotting {
		display: inline-block;
		min-width: 2px;
		min-height: 2px;
		box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;
		animation: dot 2s infinite step-start both;
		vertical-align: bottom;
	}
	.dotting::before {
		content: '';
	}
	:root .dotting {
		margin-right: 8px;
	} /* IE9+,FF,CH,OP,SF */
	
	@-webkit-keyframes dot {
		25% {
			box-shadow: none;
		}
		50% {
			box-shadow: 2px 0 currentColor;
		}
		75% {
			box-shadow: 2px 0 currentColor, 6px 0 currentColor;
		}
	}
	@keyframes dot {
		25% {
			box-shadow: none;
		}
		50% {
			box-shadow: 2px 0 currentColor;
		}
		75% {
			box-shadow: 2px 0 currentColor, 6px 0 currentColor;
		}
	}
	
</style>
