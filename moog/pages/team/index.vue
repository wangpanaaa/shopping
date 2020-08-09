<template>
	<view class="team">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Team Report</block>
			<block slot="right">
				<view>
					<!-- <span class="iconfont icon-tuandui" style="font-size: 40rpx;padding: 20rpx;" @tap='topages("/pages/team/members")'></span> -->
			<!-- 		<span class="iconfont icon-liebiao" style='margin:0 30rpx 0 47rpx;font-size: 38rpx;'></span> -->
				</view>
			</block>
		</cu-custom>
		<view class="nav">
			<view class="head_tabs">
				<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
				<view :style="{left:tabs[currentTabs].left}" class="line" v-if="tabs.length>1"></view>
			</view>
			<view class="dateSelect">
				<view class="date">
					<span class="iconfont icon-riqi"></span>
					<picker id="Before" :value="tabs[currentTabs].time.start_time" @change="chooseDate" start="2020-01-01" :end="today" mode="date">{{tabs[currentTabs].time.start_time}}</picker>
					to
					<picker id="After" :value="tabs[currentTabs].time.end_time" @change="chooseDate" :start="start_time" :end="today" mode="date">{{tabs[currentTabs].time.end_time}}</picker>
				</view>
			</view>
		</view>
		
		<view class="swiper-area">
			<swiper :acceleration="false" :current="currentTabs" @change="change">
				<swiper-item :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" v-for="(value,index) in tabs" :key="index">
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }">
						<view style="min-height:100%;padding-top: 20rpx;" v-if="true">
							<teamList :charge="value.list"></teamList>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import teamList from "./compoments/teamList.vue"
	export default {
		components: {
			teamList
		},
		data() {
			return {
				tabs: [{
						name: 'All',
						left: '5%',
						type: 0,
						team: [], 
						list: [],
						time:{
							start_time: '',
							end_time: '',
						}
					},
					{
						name: 'TODAY',
						left: '20%',
						type: 1,
						team: [], //返回参数
						list: [],
						time:{
							start_time: '',
							end_time: '',
						}
					},
					{
						name: 'YESTERDAY',
						left: '45%',
						type: 2,
						team: [], //返回参数
						list: [],
						time:{
							start_time: '',
							end_time: '',
						}
					},
					{
						name: 'WEEK',
						left: '69%',
						type: 3,
						team: [], //返回参数
						list: [],
						time:{
							start_time: '',
							end_time: '',
						}
					},
					{
						name: 'MONTH',
						left: '88%',
						type: 5,
						team: [], //返回参数
						list: [],
						time:{
							start_time: '',
							end_time: '',
						}
					}
				],
				start_time: '', //传递参数
				end_time: '', //传递参数
				today: '',
				scrollViewHeight: '',
				currentTabs: 0,
				fetching: false,
			}
		},

		onLoad() {
			// this.date()
			this.fetchList()
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
			change(e) {
				// swiper index 变化时触发
				this.currentTabs = e.detail.current;

			},
			fetchList() {
				this.tabs.forEach((v, i) => {
					let json={
							type: v.type
						}
					this.$http.post('/api/user/teamstatistics', json).then(data => {
						// v.team = data.data.team
						v.list = data.data.list
							v.time=data.data.time
						if (v.name === 'All'){
						
							 uni.hideLoading()
						}
					})
				})
			},
			date() {
				var date = new Date();

				this.end_time = this.today = date.getFullYear() +
					"-" +
					(date.getMonth() < 9 ?
						"0" + (date.getMonth() + 1) :
						date.getMonth() + 1) +
					"-" +
					(date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
				this.start_time = date.getFullYear() +
					"-" +
					(date.getMonth() < 9 ?
						"0" + (date.getMonth() + 1) :
						date.getMonth() + 1) +
					"-" + '01'
			},
			chooseDate(e) {
				console.log(e.target)
				if (e.target.id === 'Before') {
					if (new Date(e.detail.value).getTime() - new Date(this.end_time).getTime() > 0) {
						this.start_time = e.detail.value
						this.end_time = e.detail.value

					} else {
						this.start_time = e.detail.value
					}
				} else {
					if (new Date(this.start_time).getTime() - new Date(e.detail.value).getTime() > 0) {
						console.log(1)
						this.start_time = e.detail.value
						this.end_time = e.detail.value

					} else {
						this.end_time = e.detail.value
					}
				}
				let json = {
							start_time: this.start_time,
							end_time: this.end_time
						}
				this.$http.post('/api/user/teamstatistics', json).then(data => {
						this.tabs[0].list = data.data.list
						this.tabs[0].time=data.data.time
						this.currentTabs=0
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
			topages(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.team {
		height: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f6f6f6;
	}

	.nav {
		padding: 30rpx;
		height: 230rpx;
		color: #FFFFFF;
		background: rgba(34, 47, 62, 1);
	}

	.swiper-area {
		flex: 1;
		overflow: hidden;

		uni-swiper {
			height: 100%;
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
		justify-content: space-around;
		span {
			// flex: 1;
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

	.date {
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		picker {
			padding: 10rpx;
		}
	}

	.timeSelect {
		&_title {
			padding: 45rpx 0 66rpx 0rpx;
			font-size: 34rpx;
			font-family: Myriad Pro;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}

		&_start,
		&_end {
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			font-size: 28rpx;
			font-family: Myriad Pro;
			font-weight: bold;
			display: flex;

			>span {
				width: 200rpx;
			}

			.input {
				flex: 1;
				padding: 0 30rpx;
				padding-bottom: 15rpx;
				border-bottom: 1px solid #dddede;
				position: relative;
				margin-bottom: 50rpx;

				&::after {
					content: '';
					display: block;
					position: absolute;
					width: 0;
					height: 0;
					border-color: #ea6114 transparent;
					/*上下颜色 左右颜色*/
					border-width: 0 0 20rpx 20rpx;
					border-style: solid;
					right: 0;
					bottom: 0;
				}

				input {
					font-size: 30rpx;
					font-family: Myriad Pro;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}

				.placeholder {
					font-size: 26rpx;
					font-family: Myriad Pro;
					font-weight: 400;
					color: rgba(51, 51, 51, .4);
				}
			}

		}

	}
</style>
