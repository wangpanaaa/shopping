<template>
	<view class="box">
		
		<view class="bg-img">
<!-- 			<status></status>
			<view class="flex">
				<text class="iconfont icon-fanhui left-icon" @tap="BackPage"></text>
				<text class="title">Financial management</text>
				<span class="iconfont icon-tixian1 r-icon" @tap="navigateTo('/pages/financialRecords/index')"></span>
			</view> --> 
			<cu-custom :isBack="true">
				<block slot="content">{{$t('financialManagement').index1}}</block>
				<block slot="right">
					<view>
				<span class="iconfont icon-tixian1 r-icon" @tap="navigateTo('/pages/financialRecords/index')"></span>
					</view>
				</block>
			</cu-custom>
			<view class="count">{{ userInfo.wmp_balance }}</view>
			<view class="info-text">{{$t('financialManagement').index18}}</view>
		</view>
		<view class="total-list">
			<view class="item flex">
				<text>{{$t('financialManagement').index2}}</text>
				<text style="font-size:30rpx;color: #FAA723;">{{ userInfo.balance }}</text>
			</view>
			<view class="item flex">
				<text>{{$t('financialManagement').index3}}</text>
				<text style="font-size:30rpx;color: #12AC3D;">{{ userInfo.wmp_total }}</text>
			</view>
			<view class="item flex">
				<text>{{$t('financialManagement').index4}}</text>
				<text style="font-size:30rpx;color: #12AC3D;">{{ userInfo.wmp_yesterday }}</text>
			</view>
		</view>
		<view style="margin: 63rpx 0 36rpx 32rpx;font-size:30rpx;font-weight: bold;">{{$t('financialManagement').index5}}</view>
		<radio-group class="days-list" @change="radioChange">
			<view class="flex" v-for="(item, index) in IncomeList" :key="item.id" :class="[currentId == item.id?'opacitys':'']" @click="currentId=item.id">
				<view style="position: relative;top: -3rpx;"> 
					<view style="font-size:30rpx;font-weight:bold;">{{ item.wmp_name }}</view>
					<view style="font-size: 26rpx;color: #FAA723; margin-top: -8rpx;">{{ item.remark }}</view>
				</view>
				<radio class="red margin-left-sm" color="#222F3E" :checked="currentId === item.id" :value="item.id.toString()"></radio>
			</view>
		</radio-group>
		<view style="margin: 20rpx 0 26rpx 32rpx;font-size:30rpx;" >{{$t('financialManagement').index7}}</view>
		<input
			style="height:100rpx;margin: 0 30rpx;background-color: #fff;border-radius:10rpx;padding-left: 30rpx;"
			class="uni-input"
			:placeholder="$t('financialManagement').index8"
			v-model="amount"
			type="number"
		/>
		<view class="padding flex flex-direction">
			<button
				@tap='subTransinto'
				class="cu-btn lg"
				style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
				border:2px solid;height:110rpx;border: 1px solid rgb(143, 144, 144);"
			>
				{{$t('financialManagement').index9}}
			</button>
		</view>
	</view>
</template>

<script>
import Api from "../../common/api.js"
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
			const { ...data } = await Api.wmpinfo();
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
			const { ...data } = await Api.transinto({wmp_id:this.currentId,amount:this.amount})
			if(data.code===0){
				uni.showToast({
					title:'Successfully'
				})
				this.amount=''
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
	background-image: url(../../static/images/financlal-management.png);
	height: 360rpx;
	/* #ifdef APP-PLUS */ 
	height:calc(360rpx +  var(--status-bar-height));
	/* #endif */
	.flex {
		padding-top: 10rpx;
		align-items: center;
		justify-content: space-between;
	}
	.left-icon {
		margin-left: 30rpx;
		font-size: 36rpx;
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
		margin-top: 70rpx;
		text-align: center;
		color: #ffb745;
		font-size: 50rpx;
	}
	.info-text {
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
		border-bottom: 1px dashed #dcdddd;
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
		opacity: 0.5;
		display: flex;
		align-items: center;
		padding:0 24rpx;
		&>view{
			flex: 1;
			text-align: center;
		}
	}
}
.opacitys{
	opacity: 1 !important;
	border:2rpx solid rgba(250, 167, 35, 1);
}
</style>
