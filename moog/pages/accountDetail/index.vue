<template>
	<view class="accountDetailContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Grab Order Record</block>
			<block slot="right">
				<span class="iconfont icon-liebiao"></span>
			</block>
		</cu-custom>
		<view class="nav">
			<view class="head_tabs">
				<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
				<view :style="{left:tabs[currentTabs].left}" class="line" v-if="tabs.length>1"></view>
			</view>
			<view class="date">
				<!-- 			 :value="date"  :end="endDate" -->
				<span class="iconfont icon-riqi"></span>
				<picker id="Before" :value="startBefore" @change="chooseDate" start="2020-01-01" :end="today" mode="date">{{startBefore}}</picker>
				to
				<picker id="After"  :value="startAfter" @change="chooseDate" :start="startBefore" :end="today" mode="date">{{startAfter}}</picker>
			</view>
		</view>
		<view class="swiper-area">
			<swiper :acceleration="false" :current="currentTabs" @change="change" @transition="swiperStart" @animationfinish="swiperEnd">
				<swiper-item v-for="(item,index) in tabs" :key="index">
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<accountDetailList></accountDetailList>
						</view>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>


	</view>
</template>

<script>
	import accountDetailList from "./components/accountDetailList.vue"
	export default {
		components:{accountDetailList},
		data() {
			return {
				tabs: [{
						name: 'All',
						left: '16.65%',
						data: {
							page: 1, //传递参数
							count: 30, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Transfer out',
						left: '50%',
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
						name: 'Transfer IN',
						left: '83.35%',
						data: {
							page: 1, //传递参数
							count: 5, //传递参数
							status: 1, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					}
				],
				scrollViewHeight: '',
				currentTabs: 0,
				startEnd: '',
				today: '',
				startAfter: '',
				startBefore: ''
			}
		},
		created() {
			this.date()
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
			date() {
				var date = new Date();

			this.startAfter=this.today = date.getFullYear() +
					"-" +
					(date.getMonth() < 9 ?
						"0" + (date.getMonth() + 1) :
						date.getMonth() + 1) +
					"-" +
					(date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
				this.startBefore = date.getFullYear() +
					"-" +
					(date.getMonth() < 9 ?
						"0" + (date.getMonth() + 1) :
						date.getMonth() + 1) +
					"-" + '01'

			},
			chooseDate(e) {
				if (e.target.id === 'Before') {
					this.startBefore = e.detail.value
				} else {
					this.startAfter = e.detail.value
				}

			},
			change(e) {
				this.currentTabs = e.detail.current;
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

<style lang="less" scoped>
	.accountDetailContain {
		height: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f6f6f6;
	}

	.icon-liebiao {
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

	.nav {
		padding: 30rpx;
		height: 230rpx;
		color: #FFFFFF;
		background: rgba(34, 47, 62, 1);

		.icon-riqi {
			font-size: 30rpx;
			margin-right: 10rpx;
		}

		.date {
			margin-top: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			picker {
				padding: 10rpx;
			}
		}

	}

	.head_tabs {
		width: calc(100%);
		box-shadow: 0px 6rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, .96);
		height: 92rpx;
		display: flex;
		align-items: center;
		position: relative;

		span {
			flex: 1;
			color: rgba(168, 168, 168, 1);
			font-size: 28rpx;
			display: inline-block;
			text-align: center;
		}

		.line {
			width: 18rpx;
			height: 10rpx;
			background: rgba(51, 51, 51, 1);
			position: absolute;
			bottom: 0;
			left: 8.5%;
			transition: left .3s;
			transform: translateX(-50%);
		}

		.tabsChecked {
			color: rgba(51, 51, 51, 1);
			font-weight: bold;
		}
	}
</style>
