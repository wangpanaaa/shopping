<template>
	<view class="team">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Team Report</block>
			<block slot="right">
				<view>
					<span class="iconfont icon-baobiao" style="font-size: 40rpx;"></span>
					<span class="iconfont icon-liebiao" style='margin:0 30rpx 0 47rpx;font-size: 38rpx;'></span>
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
					<picker id="Before" :value="start_time" @change="chooseDate" start="2020-01-01" :end="today" mode="date">{{start_time}}</picker>
					to
					<picker id="After"  :value="end_time" @change="chooseDate" :start="start_time" :end="today" mode="date">{{end_time}}</picker>
				</view>
			</view>
		</view>
		 <view class="swiper-area">
		 	<swiper :acceleration="false" :current="currentTabs" @change="change" @transition="swiperStart" @animationfinish="swiperEnd">
		 		<swiper-item>
		 			<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
		 			 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[0].data.triggered"
		 			 :refresher-enabled="tabs[0].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
		 				<view style="min-height:100%;padding-top: 20rpx;" v-if="true">
		 				<view style="background: #0081FF;height: 40px;"  v-for="(item,index) in tabs[0].data.list" :key="tabs[0].name+item.id" >
		 					{{index}}
		 				</view>
		 				</view>
		 				<view class="cu-load" :class="tabs[0].data.bottom?'over':'loading'"></view>
		 			</scroll-view>
		 		</swiper-item>
		 
		 		<swiper-item>
		 			<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
		 			 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[1].data.triggered"
		 			 :refresher-enabled="tabs[1].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
		 				<view style="min-height:100%;padding-top: 20rpx" v-if="true">
							<view style="background: #0081FF;height: 40px;"  v-for="(item,index) in tabs[1].data.list" :key="tabs[1].name+item.id" >
								{{index}}
							</view>
		 				</view> 
		 				<view class="cu-load" :class="tabs[1].data.bottom?'over':'loading'"></view>
		 			</scroll-view>
		 		</swiper-item>
		 
		 		<swiper-item>
		 			<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
		 			 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[2].data.triggered"
		 			 :refresher-enabled="tabs[2].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
		 				<view style="min-height:100%;padding-top: 20rpx" v-if="true">
		 				<view style="background: #0081FF;height: 40px;"  v-for="(item,index) in tabs[2].data.list" :key="tabs[2].name+item.id" >
		 					{{index}}
		 				</view>
		 				</view>
		 				<view class="cu-load" :class="tabs[2].data.bottom?'over':'loading'"></view>
		 			</scroll-view>
		 		</swiper-item>
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px',background:'#f5f5f5' }" :refresher-threshold="100"
					 refresher-background="#f5f5f5" @scroll="scroll" @scrolltolower="loadMore" :refresher-triggered="tabs[3].data.triggered"
					 :refresher-enabled="tabs[3].data.isTop" @scrolltoupper="toupper" @refresherrefresh="onRefresh" @refresherrestore="onRestore">
						<view style="min-height:100%;padding-top: 20rpx" v-if="true">
						<view style="background: #0081FF;height: 40px;"  v-for="(item,index) in tabs[3].data.list" :key="tabs[3].name+item.id" >
							{{index}}
						</view>
						</view>
						<view class="cu-load" :class="tabs[3].data.bottom?'over':'loading'"></view>
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
							<picker id='Before' mode="date" :value="start_time" start="2020-01-01" :end="today" @change="chooseDate" data-title='start'>
								<view class="timeSelect_start">
									<span>Starting time</span>
									<view class="input"><input type="text" v-model="start_time"  placeholder-class="placeholder" disabled placeholder="Please enter the start time" /></view>
								</view>
							</picker>
							<picker id='After'  mode="date" :value="end_time" :start="start_time" :end="today" @change="chooseDate" data-title='end'>
								<view class="timeSelect_end">
									<span> End Time</span>
									<view class="input"><input type="text" v-model="end_time" placeholder-class="placeholder" disabled placeholder="Please enter the End time" /></view>
								</view>
							</picker>
							<view class="selection ">
								State selection
							</view>
							<view class="btn-list flex">
								
								<view class="item" v-for="(item,index) in selectData" :key='index'>
									<button type="default" class="bottom" @tap="handSelect(item)" :class="[selectClick==item?'active':'']">{{item}}</button>
								</view>
							</view>
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
	import dateSelect from "pages/accountDetail/components/dateSelect.vue"
		import {throttle} from "@/common/util.js";
	export default {
		components:{
			dateSelect
		},
		data(){
			return {
				start_time:'',//传递参数
				end_time:'',//传递参数
				today:'',
				tabs: [{
						name: 'All',
						left: '12.5%',
						start_time:'',//传递参数
						end_time:'',//传递参数
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'First',
						left: '37.5%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 1, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Secondary',
						left: '62.5%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 2, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					},
					{
						name: 'Tertiary',
						left: '87.5%',
						data: {
							page: 1, //传递参数
							count: 10, //传递参数
							type: 2, //传递参数
							list: [], //返回参数
							bottom: false,
							isTop: true,
							triggered: 'restore'
						}
					}
				],
			scrollViewHeight: '',
			currentTabs: 0,
			fetching:false,
			modalName: '',
			selectData:['Paid','Unpaid'],
			selectClick:'',
			}
		},
		created() {
			this.date()
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
			date() {
				var date = new Date();
			
			this.end_time=this.today = date.getFullYear() +
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
		
			fetchList(){
				this.tabs.forEach((v, i) => {
					let json
					if (v.name === 'All') {
						v.data.page=1
						json = {
							page: v.data.page,
							count: v.data.count,
							start_time:this.start_time,
							end_time:this.end_time
						}
					} else {
								v.data.page=1 
						json = {
							page: v.data.page,
							count: v.data.count,
							type: v.data.type,
							start_time:this.start_time,
							end_time:this.end_time
						}
					}
					this.$http.post('/api/account/detail', json).then(data => {
						v.data.list = data.data
						if (data.data.length <v.data.count)v.data.bottom = true
						if (v.name === 'All') uni.hideLoading()
					})
				})
			},
			
			swiperStart(e) {
				this.tabs[this.currentTabs].data.isTop = false
			},
			swiperEnd() {
				this.tabs[this.currentTabs].data.isTop = true
			},
			'onRefresh': throttle(function() {
				if (this.fetching){
					this.$msg('Please wait on')
					 return
				};
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
					this.fetching=true
				 ++this.tabs[this.currentTabs].data.page
				let json
				if (this.tabs[this.currentTabs].name === 'All') {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						start_time:this.start_time,
						end_time:this.end_time
					}
				} else {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						type: this.tabs[this.currentTabs].data.type,
						start_time:this.start_time,
						end_time:this.end_time
					}
				}
		
				this.$http.post('/api/account/detail', json).then(data => {
					this.fetching = false;
					console.log(this.fetching)
					this.tabs[this.currentTabs].data.list = this.tabs[this.currentTabs].data.list.concat(data.data)
					console.log(this.tabs[this.currentTabs].data.list)
					if (data.data.length <this.tabs[this.currentTabs].data.count) this.tabs[this.currentTabs].data.bottom = true
				})
		
			},
			refresh() {
				// 下拉刷新,数据初始化，没有备份p、c的值，更改data的p、c值需要一起更改下面p、c的值
				this.tabs[this.currentTabs].data.page = 1;
				this.tabs[this.currentTabs].data.count = 10;
				this.tabs[this.currentTabs].data.list = [];
				this.tabs[this.currentTabs].data.bottom = false;
				console.log(this.tabs[this.currentTabs].data)
				let json
				if (this.tabs[this.currentTabs].name === 'All') {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						start_time:this.start_time,
						end_time:this.end_time
					}
				} else {
					json = {
						page: this.tabs[this.currentTabs].data.page,
						count: this.tabs[this.currentTabs].data.count,
						type: this.tabs[this.currentTabs].data.type,
						start_time:this.start_time,
						end_time:this.end_time
					}
				}
				this.fetching = true;
				let beginTime = new Date().getTime()
				this.$http.post('/api/account/detail', json).then(data => {
					this.tabs[this.currentTabs].data.list = data.data
					if (data.data.length <this.tabs[this.currentTabs].data.count) this.tabs[this.currentTabs].data.bottom = true
					if (this.tabs[this.currentTabs].name === 'All') uni.hideLoading()
				}).finally(r => {
					//下拉刷新 计算接口响应时间，如果小于1s自己加延迟否则刷新组件会失效，框架导致
					let totalTime = new Date().getTime() - beginTime
					if (totalTime < 1000) {
						console.log('刷新小于1秒')
						setTimeout(() => {
							this.fetching = false;
							this.tabs[this.currentTabs].data.triggered = false
						}, totalTime > 500 ? 500 : 1000)
					} else {
						this.fetching = false;
						this.tabs[this.currentTabs].data.triggered = false
						console.log('刷新大1秒');
					}
				})
		
			},
			showModal(e) {
		
				this.modalName = true
			},
			hideModal(e) {
				this.modalName = null
				this.selectClick=''
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
			handSelect(data){
				this.selectClick=data
			},
			subClick(){
				this.fetchList()
				this.hideModal()
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
	.selection{
		font-family:Myriad Pro;
		font-weight:bold;
		line-height:40rpx;
	}
	.btn-list{
		margin-top: 44rpx;
		flex-wrap: wrap;
		justify-content: space-between;
		.item {
			.bottom{
				margin-top: 20rpx;
				width:294rpx;
				height:110rpx;
				line-height: 110rpx;
				background:rgba(246,246,246,1);
				border:1px solid rgba(220, 221, 221, 1);
				border-radius:10rpx;
			}
			.active{
				color: #fff;
				background-color: #222F3E;
			}
		}
	}
	.btn-fixed{
		position: fixed;
		bottom:50rpx;
		.bottom{
			width:300rpx;
			height:98rpx;
			background:#fff;
			border:1px solid #222F3E;
			border-radius:5px;
		}
	}
	
</style>
