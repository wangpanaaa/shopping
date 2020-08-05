<template>
	<view class="withdrawalRecordContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Recharge record</block>
			<block slot="right">
				<span class="iconfont icon-liebiao" @click="showModal"></span>
			</block>
		</cu-custom>
		<view class="nav">
			<view class="dateSelect">
				<view class="date">
					<span class="iconfont icon-riqi"></span>
					<picker id="Before" :value="start_time" @change="chooseDate" start="2020-01-01" :end="today" mode="date">{{start_time}}</picker>
					to
					<picker id="After" :value="end_time" @change="chooseDate" :start="start_time" :end="today" mode="date">{{end_time}}</picker>
				</view>
			</view>
		</view>
		<view class="swiper-area">
			<swiper>
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" @scrolltolower="loadMore">
						<view style="min-height:100%;padding-top: 20rpx;" v-if="true">
							<accountDetailList v-for="item in page.list" :key="item.id" :item="item"></accountDetailList>
						</view>
						<view class="cu-load" :class="page.bottom?'over':'loading'"></view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

		<view class="cu-modal drawer-modal justify-end drawer-zIndex" :class="modalName?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-90" @tap.stop="">
				<view style="background-color: #FFFFFF;height: 100%;">
					<view class="title">
						filter
					</view>
					<view style="padding:0 30rpx;">
						<view class="timeSelect">
							<view class="timeSelect_title">
								TIME SELECTION
							</view>
							<picker id='Before' mode="date" :value="start_time" start="2020-01-01" :end="today" @change="chooseDate"
							 data-title='start'>
								<view class="timeSelect_start">
									<span>Starting time</span>
									<view class="input"><input type="text" v-model="start_time" placeholder-class="placeholder" disabled
										 placeholder="Please enter the start time" /></view>
								</view>
							</picker>
							<picker id='After' mode="date" :value="end_time" :start="start_time" :end="today" @change="chooseDate"
							 data-title='end'>
								<view class="timeSelect_end">
									<span> End Time</span>
									<view class="input"><input type="text" v-model="end_time" placeholder-class="placeholder" disabled placeholder="Please enter the End time" /></view>
								</view>
							</picker>
							<!-- <view class="selection ">
								State selection
							</view>
							<view class="btn-list flex">

								<view class="item" v-for="(item,index) in selectData" :key='index'>
									<button type="default" class="bottom" @tap="handSelect(item)" :class="[selectClick==item?'active':'']">{{item}}</button>
								</view>
							</view> -->
							<view class="btn-fixed flex">
								<button type="default" class="bottom" style="margin-right: 25rpx;" @tap="hideModal">Cancel</button>
								<button type="default" class="bottom" style="background-color: #FAA723;border: none;" @click="subClick">Confirm</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import accountDetailList from "./components/accountDetailList.vue"
	import dateSelect from "./components/dateSelect.vue"
	import {
		throttle
	} from "@/common/util.js";
	export default {
		components: {
			accountDetailList,
			dateSelect
		},
		data() {
			return {
				page: {
					page: 1, //传递参数
					count: 10, //传递参数
					list: [], //返回参数
					bottom: false,

				},
				scrollViewHeight: '',
				start_time: '', //传递参数
				end_time: '', //传递参数
				today: '',
				fetching: false,
				modalName: false,
				selectData: ['Paid', 'Unpaid'],
				selectClick: '',
			}
		},
		mounted() {
			this.$offset(".swiper-area").then(res => {
				var Height = uni.getSystemInfoSync().screenHeight
				this.scrollViewHeight = res.height;
			});
		},
		created() {
			this.date()
			this.fetchList()
		},
		methods: {
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
				this.fetchList()
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
			showModal(e) {
				this.modalName = true
			},
			hideModal(e) {
				this.modalName = null
				this.selectClick = ''
			},
			handSelect(data) {
				this.selectClick = data
			},
			subClick() {
				this.fetchList()
				this.hideModal()
			},
			fetchList() {
				uni.showLoading()
				let json = {
					page: this.page.page,
					count: this.page.count,
					start_time: this.start_time,
					end_time: this.end_time
				}
				this.$http.post('/api/user_recharge/log', json).then(data => {
					console.log(data.data)
					this.page.list = data.data
					if (data.data.length < this.page.count) this.page.bottom = true
					uni.hideLoading()
				})

			},

			loadMore() {
				// 上拉加载
				if (this.fetching) {
					this.$msg('Please wait on')
					return
				};
				if (this.page.bottom) {
					return
				}
				this.fetching = true;
				++this.page.page
				let json = {
					page: this.page.page,
					count: this.page.count,
					start_time: this.start_time,
					end_time: this.end_time
				}
				this.$http.post('/api/account/detail', json).then(data => {
					this.fetching = false;
					this.page.list = this.page.list.concat(data.data)
					if (data.data.length <this.page.count) this.page.bottom = true
				})

			},
		}
	}
</script>

<style lang="less" scoped>
	.withdrawalRecordContain {
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
		height: 100rpx;
		color: #FFFFFF;
		background: rgba(34, 47, 62, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.drawer-zIndex {
		z-index: 9999;
		top: var(--status-bar-height); //覆盖样式;
		text-align: left;
	}

	.title {
		height: 88rpx;
		background: #222F3E;
		padding: 0 30rpx;
		line-height: 88rpx;
		color: rgba(255, 255, 255, 1);
		font-size: 34rpx;
		font-family: Myriad Pro;

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

	.selection {
		font-family: Myriad Pro;
		font-weight: bold;
		line-height: 40rpx;
	}

	.btn-list {
		margin-top: 44rpx;
		flex-wrap: wrap;
		justify-content: space-between;

		.item {
			.bottom {
				margin-top: 20rpx;
				width: 294rpx;
				height: 110rpx;
				line-height: 110rpx;
				background: rgba(246, 246, 246, 1);
				border: 1px solid rgba(220, 221, 221, 1);
				border-radius: 10rpx;
			}

			.active {
				color: #fff;
				background-color: #222F3E;
			}
		}
	}

	.btn-fixed {
		position: fixed;
		bottom: 50rpx;

		.bottom {
			width: 300rpx;
			height: 98rpx;
			background: #fff;
			border: 1px solid #222F3E;
			border-radius: 5px;
		}
	}

	.date {
		display: flex;
		justify-content: center;
		align-items: center;

		picker {
			padding: 10rpx;
		}
	}
</style>
