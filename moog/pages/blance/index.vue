<template>
	<view class="blacnceContain">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Account Balance</block>
			<block slot="right">
				<span class="iconfont icon-kefu" @tap='navigateTo("/pages/customerSerice/index")'></span>
			</block>
		</cu-custom>
		<view class="head_tabs" >
			<span :class="{tabsChecked:currentTabs==index}" v-for="(item,index) in tabs" :key="index" @click="currentTabs=index">{{item.name}}</span>
			<view :style="{left:tabs[currentTabs].left}" class="line" v-if="tabs.length>1"></view>
		</view>
		<view class="swiper-area">
			<swiper :acceleration="false" :current="currentTabs" @change="change">
				<swiper-item v-for="(item,index) in tabs" :key="index" >
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5">
						<view style="height:100%" v-if="true">
							<pay @commit="commit" :card="item.card" :payRadio="item.channel_list"></pay>
						</view>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	import pay from "./components/pay.vue"
	export default {
		components: {
			pay,
		},
		data() {
			return {
				tabs: [],
				currentTabs: 0,
				scrollViewHeight: 0,
				id:''
			}
		},
		onLoad() {
			uni.showLoading()
			this.$http.post('/api/user_recharge/card').then(data => {
				data.data.forEach((v,i)=>{
				this.tabs.push({
					name:v.group_name,
					card:v.card,
					left:(12.5+i*25)+'%',
					id:v.id,
					channel_list:v.channel_list
			  	})
				})
					uni.hideLoading()
			})
		},
		mounted() {
			this.$offset(".swiper-area").then(res => {
				var Height = uni.getSystemInfoSync().screenHeight
				console.log(Height);
				this.scrollViewHeight = res.height;
			});
		},
		methods: {
			change(e) {
				this.currentTabs =e.detail.current;
	
			},
			navigateTo(url,e) {
				uni.navigateTo({
					url:url
				})
				
			},
			commit(e,radio){
				 if(!e){
					 this.$msg('Please select the amount')
					 return
				 }
				 let id=this.tabs[this.currentTabs].id
				 let channel_id=this.tabs[this.currentTabs].channel_list[radio].channel_id
				uni.navigateTo({
					url: `/pages/payment/index?channel_id=${channel_id}&id=${id}&amount=${e}`
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
		margin:20rpx auto 40rpx auto;
		box-shadow: 0px 6rpx 24rpx 8rpx rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, .96);
		height: 92rpx;
		display: flex;
		align-items: center;
		position: relative;
		span {
			width: 25%;
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
		}

		.tabsChecked {
			color: rgba(51, 51, 51, 1);
			font-weight: bold;
		}
	}
</style>
