<template>
	<view class="box">
		
		<view class="bg-img">
			<status></status>
			<view class="flex">
				<text class="iconfont icon-fanhui1 left-icon" @tap="BackPage"></text>
				<text class="title">Financial management</text>
				<span class="iconfont icon-tixian1 r-icon" @tap="navigateTo('/pages/cashout/index')"></span>
			</view>
			<view class="count">{{ userInfo.wmp_balance }}</view>
			<view class="info-text">Financial amount</view>
		</view>
		<view class="total-list">
			<view class="item flex">
				<text>Total assets</text>
				<text style="font-size:30rpx;color: #FAA723;">{{ userInfo.balance }}</text>
			</view>
			<view class="item flex">
				<text>Total revenue</text>
				<text style="font-size:30rpx;color: #12AC3D;">{{ userInfo.wmp_total }}</text>
			</view>
			<view class="item flex">
				<text>Yesterday's earnings</text>
				<text style="font-size:30rpx;color: #12AC3D;">{{ userInfo.wmp_yesterday }}</text>
			</view>
		</view>
		<view style="margin: 63rpx 0 36rpx 32rpx;font-size:30rpx;">Income standard</view>
		<radio-group class="days-list" @change="radioChange">
			<view class="flex" v-for="(item, index) in IncomeList" :key="item.id">
				<view>
					<view style="font-size:30rpx;font-weight:bold;">{{ item.wmp_name }}</view>
					<view style="font-size: 26rpx;color: #FAA723;">{{ item.remark }}</view>
				</view>
				<radio class="red margin-left-sm" color="#222F3E" :checked="currentId === item.id" :value="item.id.toString()"></radio>
			</view>
		</radio-group>
		<view style="margin: 40rpx 0 36rpx 32rpx;font-size:30rpx;" >Balance transfer</view>
		<input
			style="height:100rpx;margin: 0 30rpx;background-color: #fff;border-radius:10rpx;padding-left: 30rpx;"
			class="uni-input"
			placeholder="Please enter the transfer amount"
			v-model="amount"
		/>
		<view class="padding flex flex-direction">
			<button
				@tap='subTransinto'
				class="cu-btn lg"
				style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
border:2px solid;height:110rpx;border: 1px solid rgb(143, 144, 144);"
			>
				Transfer Into
			</button>
		</view>
	</view>
</template>

<script>
import status from '../../colorui/components/istatus.vue';
// import { mapState } from 'vuex';
export default {
	components: {
		status
	},
	data() {
		return {
			IncomeList: [],
			currentId: '',
			amount:''
		};
	},
	computed: {
		userInfo:function (){
			return this.$store.state.userInfo  || JSON.parse(uni.getStorageSync('userInfo'))
		}
	},
	mounted() {
		console.log(this.userInfo);
		this.getWmpinfo();
	},
	methods: {
		BackPage() {
			uni.navigateBack({
				delta: 1
			});
		},
		async getWmpinfo() {
			const { ...data } = await this.$http.post('/api/wmp_order/wmpinfo');
			this.IncomeList = data.data;
			this.currentId=this.IncomeList[0].id
		},
		radioChange(e) {
			this.currentId=e.target.value
		},
		async subTransinto(){
			if(!this.amount || !this.currentId){
				uni.showToast({
					icon:'none',
					title:'Please complete the relevant information'
				})
				return 
			}
			const { ...data } = await this.$http.post('/api/wmp_order/transinto',{wmp_id:this.currentId,amount:this.amount});
			if(data.code===0){
				uni.showToast({
					title:'Successfully'
				})
				this.$store.dispatch('getUserUpdate');
			}
		},
		navigateTo(url) {
			uni.navigateTo({
				url:url
			})
		},
	}
};
</script>

<style lang="scss" scoped>
.box {
	font-family: Myriad Pro;
}
.bg-img {
	color: #fff;
	background-image: url(../../static/images/Place-an-order.png);
	height: 365rpx;
	.flex {
		padding-top: 20rpx;
		align-items: center;
		justify-content: space-between;
	}
	.left-icon {
		margin-left: 30rpx;
		font-size: 38rpx;
		padding: 10rpx;
	}
	.title {
		font-size: 34rpx;
	}
	.r-icon {
		font-size: 42rpx;
		padding-right: 33rpx;
	}
	.count {
		margin-top: 109rpx;
		text-align: center;
		color: #ffb745;
		font-size: 50rpx;
	}
	.info-text {
		/*  #ifdef H5  */
			margin-top: 25rpx;
		/*  #endif  */ 
		text-align: center;
		font-size: 26rpx;
	}
}
.total-list {
	margin: 52rpx 30rpx 0 48rpx;
	.item {
		font-size: 26rpx;
		line-height: 78rpx;
		justify-content: space-between;
		border-bottom: 1px solid #dcdddd;
	}
}
.days-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 30rpx;
	.flex {
		width: 330rpx;
		height: 100rpx;
		border-radius: 10rpx;
		align-items: center;
		text-align: center;
		margin-bottom: 30rpx;
		justify-content: space-evenly;
		background-color: #ffffff;
	}
}
</style>
