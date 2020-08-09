<template>
	<view class="password">
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="content">Password Management</block>
		</cu-custom>
		<form class="main" >
			<view class="text"></view>
			<view class="verification">VERIFOCATION</view>
			<view class="content">
				<view class="iconfont icon-mima"></view>
				<input name='pwd' v-model="passwd" placeholder-class='inputP':password="showPasswd" placeholder='please enter account password' />
				<view class="iconfont xianshi" :class="[showPasswd ? 'icon-xianshi' : 'icon-yincang']" @tap="showPasswd=!showPasswd"></view>
			</view>
			<view class="content">
				<view class="iconfont icon-mima"></view>
				<input name='pwd' v-model="newPasswd" placeholder-class='inputP' :password="shownewPasswd" placeholder='Please enter a new password' />
				<view class="iconfont xianshi" :class="[shownewPasswd ? 'icon-xianshi' : 'icon-yincang']" @tap="shownewPasswd=!shownewPasswd"></view>
			</view>
			<view class="content">
				<view class="iconfont icon-mima"></view>
				<input name='pwd' v-model="reNewpwd" placeholder-class='inputP' :password="showReNewpwd" placeholder='Please enter the password again' />
				<view class="iconfont xianshi" :class="[showReNewpwd ? 'icon-xianshi' : 'icon-yincang']" @tap="showReNewpwd=!showReNewpwd"></view>
			</view>
			<button form-type="submit" @tap="formSubmit">Confirm<view class="iconfont icon-huabanbeifen12"></view></button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPasswd:true,
				shownewPasswd:true,
				showReNewpwd:true,
				newPasswd:'',
				reNewpwd:'',
				passwd:'',
			}
		},
		methods: {
			formSubmit() {
				if(!this.passwd && !this.reNewpwd && !this.newPasswd){
					uni.showToast({
						icon:'none',
						title:'Please complete the relevant information'
					})
					return
				}
				let json={
					pwd:this.newPasswd,
					repwd:this.reNewpwd,
					oldpwd:this.passwd
				}
				this.$http.post('/api/login/resetPwd',json).then(res=>{
					uni.setStorageSync('token',res.data.token)
					uni.navigateBack({
						delta:1
					})
					setTimeout(()=>{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					},500)
				})
			},
		}
	}
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

	.password {
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
				.xianshi{
					width: 56rpx;
					height: 56rpx;
					font-size: 56rpx;
					margin-left: 0;
					margin-right: 30rpx;
				}
			}

			.content2 {
				margin-top: 20rpx;
				display: flex;
				width: 689rpx;
				height: 110rpx;
				.code{
					width:436rpx;
					height:110rpx;
					background:rgba(255,255,255,1);
					border:1rpx solid rgba(220, 221, 221, 1);
					border-radius:10rpx;
					display: flex;
					align-items: center;
					.iconfont {
						font-size: 40rpx;
						padding: 0 25rpx;
					}
				}
				button{
					width:236rpx;
					height:110rpx;
					background:rgba(250,167,35,1);
					opacity:0.96;
					border-radius:10rpx;
					margin: 0;
					margin-left: 17rpx;
					// padding: atuo;
					font-size:34rpx;
					font-family:Myriad Pro;
					font-weight:400;
					color:rgba(17,17,17,1);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			button{
				margin-top: 80rpx;
				width:690rpx;
				height:110rpx;
				background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
				border:2rpx solid;
				border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 2 2;
				border-radius:5rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
