<template>
	<view class="add_address">
		<cu-custom bgColor="bg-black" :isBack="true"><block slot="content">Add address</block></cu-custom>
		<form class="main">
			<view class="text">Receive identity information</view>
			<view class="verification">RECEIVE</view>
			<view class="content">
				<view class="iconfont icon-zhanghao"></view>
				<input name="name" placeholder-class="inputP" v-model="fromData.realname" placeholder="Please enter your real name" />
			</view>
			<view class="content">
				<view class="iconfont icon-jj"></view>
				<input name="tel" placeholder-class="inputP" v-model="fromData.telephone" placeholder="Please enter your mobile phone number" />
			</view>
			<view class="text">Delivery address information</view>
			<view class="verification">ADDRESS</view>
			<view class="content">
				<view class="iconfont icon-dizhi"></view>
				<input name="region" placeholder-class="inputP" v-model="fromData.region" placeholder="Please enter a region" />
			</view>
			<view class="detailed_address"><textarea placeholder-class="inputP" v-model="fromData.detail" placeholder="Please enter detailed address"></textarea></view>
			<view class="content2">
				<text>Set as the default address</text>
				<switch @change="todefault" color="#FF7070" :checked="fromData.isdefault==1?true:false"></switch>
			</view>
			<button form-type="submit" @click="deleteAddress" v-if="fromData.id">
				<view class="iconfont icon-shanchu"></view>
				Delete
			</button>
			<view class="flex flex-direction">
				<button
					@tap="subTransinto"
					class="cu-btn lg"
					style="background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
			border:2px solid;height:100rpx;border: 1px solid rgb(143, 144, 144);color: #333;margin-bottom: 50rpx;"
				>
					Okay
				</button>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fromData:{
				isdefault: 1,
				realname: '',
				telephone: '',
				region: '',
				detail: '',
				id: ''
			}
		};
	},
	onLoad(e) {
		let data=''
		if(e.data){
			data=JSON.parse(decodeURIComponent(e.data))
		}
		if(data.id){
			this.fromData=Object.assign(this.fromData,data)
		}
	},
	methods: {
		todefault(e) {
			this.isdefault = e.target.value?1:0;
		},
		async deleteAddress(){
			uni.showLoading()
			const res=await this.$http.post('/api/user/delAddress',{id:this.fromData.id})
			uni.navigateBack();
			setTimeout(() => {
				uni.showToast({
					icon: 'success',
					title: res.msg
				});
			}, 1000);
		},
		async subTransinto(){
			if(!this.fromData.realname && !this.fromData.telephone  && !this.fromData.region && !this.fromData.detail){
				uni.showToast({
					icon:'none',
					title:'Please complete the relevant information'
				})
				return
			}
			uni.showLoading()
			const res=await this.$http.post('/api/user/addAddress',this.fromData)
			uni.navigateBack();
			setTimeout(() => {
				uni.showToast({
					icon: 'success',
					title: res.msg
				});
			}, 1000);
		}
	}
};
</script>

<style lang="scss" scoped>
.inputP {
	font-size: 26rpx;
	font-family: Myriad Pro;
	font-weight: 400;
	color: rgba(168, 168, 168, 1);
	line-height: 40rpx;
	opacity: 0.5;
}

input {
	width: 100%;
	padding-right: 25rpx;
	font-size: 26rpx;
	font-family: Myriad Pro;
	font-weight: 400;
	color: rgba(168, 168, 168, 1);
	line-height: 40rpx;
}

.add_address {
	height: 100%;
	background-color: #f6f6f6;
	display: flex;
	flex-direction: column;

	.main {
		padding: 0 30rpx;

		.text {
			padding-top: 60rpx;
			font-size: 24rpx;
			font-family: Myriad Pro;
			font-weight: 400;
			color: rgba(168, 168, 168, 1);
			line-height: 40rpx;
		}

		.verification {
			padding-top: 18rpx;
			padding-bottom: 31rpx;
			font-size: 40rpx;
			font-family: Myriad Pro;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			line-height: 40rpx;
		}

		.content {
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			width: 689rpx;
			height: 110rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
			.iconfont {
				font-size: 40rpx;
				padding: 0 25rpx;
			}
		}
		.content2 {
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 689rpx;
			height: 110rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
			padding: 0 30rpx;
			switch {
				// background: rgb(255, 112, 112) !important;
			}
		}
		.detailed_address {
			margin-top: 20rpx;
			width: 689rpx;
			height: 230rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(220, 221, 221, 1);
			border-radius: 10rpx;
			textarea {
				padding: 44rpx 87rpx;
				width: 100%;
				margin: 0;
			}
		}
		button {
			margin-top: 20rpx;
			width: 690rpx;
			height: 110rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #f44c4c;
			font-size: 28rpx;
			view {
				font-size: 33rpx;
				margin-right: 10rpx;
			}
		}
	}
}
</style>
