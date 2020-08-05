<template>
	<view class="withdrawalRecordContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Withdrawals record</block>
			<block slot="right">
				<span class="iconfont icon-liebiao" @click="showModal"></span>
			</block>
		</cu-custom>
		<view class="nav">
			<dateSelect @change="dateSelectChange"></dateSelect>
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
				start_time: '',
				end_time: '',
				fetching:false
			}
		},
		mounted() {
			this.$offset(".swiper-area").then(res => {
				var Height = uni.getSystemInfoSync().screenHeight
				this.scrollViewHeight = res.height;
			});
		},
		methods: {
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
			fetchList() {
				uni.showLoading()
				let json = {
					page: this.page.page,
					count: this.page.count,
					start_time: this.start_time,
					end_time: this.end_time
				}
				this.$http.post('/api/account/withdrawal_list', json).then(data => {
					this.page.list = data.data
					if (data.data.length <this.page.count) this.page.bottom = true
					uni.hideLoading()
				})

			},
			dateSelectChange(e) {
				this.start_time = e[0]
				this.end_time = e[1]
				this.fetchList()
			},
			loadMore() {
				// 上拉加载
				if (this.fetching){
					this.$msg('Please wait on')
					 return
				};
				if (this.page.bottom){
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
					if (data.data.length == 0) this.page.bottom = true
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
</style>
