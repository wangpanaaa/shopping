<template>
	<view class="order-box" :class="[loadModal || orderConfirm ?'noClick':'']">
		<view class="tabber">
			<cu-custom  :isBack="true">
				<block slot="content">{{$t('orderGrabbing').index1}}</block>
			</cu-custom>
			<view style="padding-top: 0rpx;font-size: 50rpx;color: #FFB745;">{{userInfo.balance}}</view>
			<view style="font-size: 26rpx;padding-top:5rpx;">Remaining available assets</view>
			<view style="color: #A8A8A8;font-size: 26rpx;padding-top: 8rpx;">
				{{$t('financialManagement').index4}}
				<text style="color: #FFB745;">{{userInfo.commission_yesterday}}</text>
			</view>
		</view>
		<view class="order-content">
			<view class="order-item flex">
				<view style="font-size: 26rpx;color: #333;">{{$t('orderGrabbing').index27}}</view>
				<view style="font-size: 30rpx;color: #FAA723;">{{userInfo.commission_today}}</view>
			</view>
			
			<view class="order-item flex">
				<view style="font-size: 26rpx;color: #333;">{{$t('orderGrabbing').index28}}</view>
				<view style="font-size: 30rpx;">{{userInfo.ordernum_today}}</view>
			</view>
			
			<view class="flex flex-direction">
				<button class="cu-btn bg-grey lg place-order" @tap="LoadModal"><text style="font-size: 30rpx;color: #111111;">Order Now</text></button>
			</view>
			<view class="order-description">
				<view class="title">{{$t('orderGrabbing').index7}}</view>
				<view style="color: #A8A8A8;font-size: 24rpx;line-height:46rpx;" v-html="explainText"></view>
			</view>
			<view class="cu-load load-modal" v-if="loadModal" >
				<!-- <video src="../../static/video/1596197044700795.mp4" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"></video> -->
				<image src="../../static/images/Loading.gif" class="modal-image"></image>
				<text>{{$t('orderGrabbing').index8}}<text class="dotting"></text></text>
				
			</view>
			<view class="cu-modal" :class="modalName == 'Image' ? 'show' : ''"  @tap.stop='noClick'>
				<view class="cu-dialog order-details">
					<image :src="goodsItem.goods_pic" mode="aspectFit"></image>
					<view class="describe">
						{{goodsItem.goods_name}}
					</view>
					<view class="Total" style="margin-top: 25rpx;">
						<text>{{$t('orderGrabbing').index10}}</text>
						<text>{{goodsItem.price}}</text>
					</view>
					<view class="Total">
						<text>{{$t('orderGrabbing').index11}}</text>
						<text>{{goodsItem.commission}}</text>
					</view>
					<view class="Total">
						<text>{{$t('orderGrabbing').index12}}</text>
						<text style="color: #FFB745;font-size: 34rpx;">{{goodsItem.refund}}</text>
					</view>
					<view class="flex">
						<button class="cu-btn cancel" @tap="goodsCancal">Cancel</button>
						<button class="cu-btn submit" @tap="submitOrder">Submit</button>
					</view>
				</view>
			</view>
			<view class="cu-modal" :class="modalName == 'noData' ? 'show' : ''" >
				<view class="cu-dialog order-details">
					<view class="icons"><text class="iconfont icon-guanbi" @tap="modalName=''"></text></view>
					<image src="../../static/images/order-no-data.png" mode="aspectFit" style="width: 218rpx;height: 218rpx;"></image>
					<view style="padding: 0 87rpx;font-size:34rpx;font-family:Myriad Pro;">
						{{noData}}
					</view>
					<view class="flex" style="margin-top: 74rpx;">
						<button class="cu-btn cancel" @tap="navigateTo('/pages/index/inviteFriend')">{{$t('orderGrabbing').index25}}</button>
						<button class="cu-btn submit" @tap="navigateTo('/pages/blance/index')">{{$t('orderGrabbing').index26}}</button>
					</view>
				</view>
			</view>
			<view class="cu-load load-modal" v-if="orderConfirm">
				<!-- <video src="../../static/video/1596197044700795.mp4" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"></video> -->
				<image src="../../static/images/gif2.gif" class="modal-image"></image>
				<text>{{confirmTitleItem}}<text class="dotting"></text></text>
				
			</view>

			<view class="cu-modal" :class="modalName == 'order-suc' ? 'show' : ''" @tap.stop='noClick'>
				<view class="cu-dialog order-suc">
					<image src="../../static/images/order-suc.png"></image>
					<view class="completed">{{$t('orderGrabbing').index18}}</view>
					<view class="order-suc-item">
						<text>{{$t('orderGrabbing').index19}}</text>
						<text>{{goodsItem.price}}</text>
					</view>
					<view class="order-suc-item">
						<text>{{$t('orderGrabbing').index20}}</text>
						<text>{{goodsItem.commission}}</text>
					</view>
					<view class="order-suc-item">
						<text>{{$t('orderGrabbing').index21}}</text>
						<text style="font-size: 34rpx;color: #FFB745;font-weight: bold;">{{goodsItem.refund}}</text>
					</view>
					<view class="flex flex-direction"><button class="cu-btn" @tap="modalName = null">Confirm</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import { mapState } from 'vuex'
	import Api from "../../common/api.js"
export default {
	data() {
		return {
			loadModal: false,
			modalName: null,
			orderConfirm: false,
			goodsItem:{},
			explainText:'',
			confirmTitle:['Ordering','Filling in the receiving information','Payment successful','Order submission','Writing comments','Order completed'],
			confirmTitleItem:'Ordering',
			current:0,
			noData:'',
		};
	},
	computed: {
		userInfo:function (){
			return this.$store.state.userInfo  || JSON.parse(uni.getStorageSync('userInfo'))
		}
	},
	async onLoad() {
		const data=await Api.orderdescription()
		this.explainText=data.data
	},
	methods: {
		navigateTo(url){
			uni.redirectTo({
				url:url
			})
		},
		noClick(){
			
		},
		BackPage() {
			uni.navigateBack({
				delta: 1
			});
		},
		async goodsCancal(){
			this.modalName = null
			await Api.orderConfirm({orderid:this.goodsItem.orderid,status:2}) 
		},
		async LoadModal(e) {
			const data=await Api.orderMkorder();
			if(!data.data){
				this.loadModal = false;
				this.modalName = 'noData';
				this.noData=data.msg
			}else{
				this.loadModal = true;
				setTimeout(() => {
					this.loadModal = false;
					this.modalName = 'Image';
					this.goodsItem=data.data
				}, 5000);
			}
			
		},
		async submitOrder() {
			this.current=0;
			this.modalName = null;
			this.orderConfirm = true;	
			let times=setInterval(()=>{
				if(++this.current<6){
					this.confirmTitleItem=this.confirmTitle[this.current]
				}else{
					this.orderConfirm = false;
					this.modalName = 'order-suc';
					clearInterval(times)
			 	 Api.orderConfirm({orderid:this.goodsItem.orderid,status:1}).then(()=>{
						this.$store.dispatch('getUserUpdate');
					})
				}
			},Math.floor(Math.random()*4+4)*500)
		}
	}
};
</script>

<style lang="scss" scoped>
.noClick{
	pointer-events: none;
}
.order-box {
	font-family:Myriad Pro;
	.tabber {
		position: relative;
		height: 315rpx;
		/* #ifdef APP-PLUS */
		height:calc(315rpx +  var(--status-bar-height));
		/* #endif */
		background: url(../../static/images/Place-an-order.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat; 
		color: #fff;
		text-align: center;

		.cuIcon-back{
			font-size: 19px;
		}
	}

	.order-content {
		margin: 30rpx;

		.order-item {
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1px solid #dcdddd;
			justify-content: space-between;
		}

		.flex-direction {
			margin-top: 86rpx;

			.place-order {
				height: 60px;
				background-color: #faa41a;
			}
		}

		.order-description {
			margin-top: 114rpx;
			background-color: #fff;
			border-radius: 5rpx;
			padding: 38rpx 15rpx 44rpx 20rpx;

			.title {
				color: #faa723;
				font-size: 30rpx;
				height: 46rpx;
			}
		}
	}
}
.cu-load.load-modal uni-image{
	width: 100%;
	height: 150px;
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
.icons{
	display: flex;
	justify-content: flex-end;
}

.icon-guanbi{
	width: 60rpx;
	height: 60rpx;
	background-color: rgb(255, 255, 255);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10rpx 10rpx 0 0;
}

.cu-load.load-modal::after {
	display: none;
}
.cu-dialog{
	width: 300px;
}
.order-details {
	background-color: #fff;
	image {
		width: 400rpx;
		height: 400rpx;
		margin: 20rpx 0;
		
	}

	.describe {
		padding: 23rpx 40rpx;
		color: #333333;
		line-height: 35rpx;
		font-size: 28rpx;
		font-family: Myriad Pro;
		border-bottom: 1px solid #dcdddd;
	}
	.Total {
		display: flex;
		font-size: 26rpx;
		font-family: Myriad Pro;
		line-height: 47rpx;
		justify-content: space-between;
		color: #333333;
		padding: 0 40rpx;
	}
	.flex {
		font-size: 34rpx;
		margin: 39rpx 13rpx 27rpx 15rpx;
	}
	.cancel {
		height: 80rpx;
		background: rgba(255, 255, 255, 1);
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 50%;
		margin-right: 12rpx;
	}
	.submit {
		height: 80rpx;
		background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
		border: 2rpx solid #797979;
		border-radius: 5px;
		width: 50%;
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
		margin: 0 40rpx 50rpx 40rpx;
	}
	.cu-btn {
		height: 84rpx;
		background-color: #faa723;
		font-family: Myriad Pro;
		font-size: 34rpx;
	}
}
.dotting {
    display: inline-block; min-width: 2px; min-height: 2px;
    box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; 
    animation: dot 2s infinite step-start both;
	vertical-align: bottom;
}
.dotting::before { content: ''; }
:root .dotting { margin-right: 8px; } /* IE9+,FF,CH,OP,SF */

@-webkit-keyframes dot {
    25% { box-shadow: none; }
    50% { box-shadow: 2px 0 currentColor; }
    75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor; }
}
@keyframes dot {
    25% { box-shadow: none; }
    50% { box-shadow: 2px 0 currentColor; }
    75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor; }
}
</style>
