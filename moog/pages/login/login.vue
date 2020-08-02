<template>
	<view class="login">
		<view class="show">
			<view class="top">
				<image src="../../static/images/britain.png" />
				<view class="language" @tap='navigateTo("../index/settingLanguage")'>{{language}}</view>
			</view>
			<view class="content">
				<image class="content_img" :src="settings.logo_max"></image>
			</view>
			<view class="footer">
				<button @click="start">START SHOPPING</button>
				<view @click="signIn">Sign in</view>
			</view>
		</view>
		<view class="showAccountLogin" v-if="showAccountLogin"></view>
		<view class="main" v-if="showAccountLogin">
			<view class="top">
				<view class="text">Account login</view>
				<view class="iconfont icon-guanbi cancel" @click="cancel"></view>
			</view>
			<view class="phone">
				<view class="iconfont icon-zhanghao"></view>
				<input  v-model="loginData.username" placeholder="Please enter the account name">
			</view>
			<view class="phone">
				<view class="iconfont icon-mima"></view>
				<input v-model="loginData.password" class="password" password placeholder="Enter password ">
				<view class="enter">
					<view class="iconfont icon-fanhui1 text" @click="enter"></view>
				</view>
			</view>
			<!-- <view class="forgot" @click="forgot">Forgot my password</view> -->
		</view>
		<view class="showAccountLogin" v-if="showRegister" @click="registerCancel"></view>
		<view class="register" v-if="showRegister">
			<view class="top">
				<view class="text">Register an account</view>
				<view class="iconfont icon-guanbi cancel" @click="registerCancel"></view>
			</view>
			<view class="phone">
				<view class="iconfont icon-zhanghao"></view>
				<input  v-model="regData.username" placeholder="Please enter the account name">
			</view>
			<view class="phone">
				<view class="iconfont icon-mima"></view>
				<input v-model="regData.pwd" class="password" password placeholder="Please enter the password">
			</view>
			<view class="phone">
				<view class="iconfont icon-mima"></view>
				<input v-model="regData.repwd" class="password" password placeholder="Enter the password again">
			</view>
			<view class="phone">
				<view class="iconfont icon-iconfontzhizuobiaozhun49"></view>
				<input v-model="regData.agentid" class="password" placeholder="Please enter the invitation code">
			</view>
			<button @click="registerSub">sign up</button>
			<view class="sign">Alredy have an account? <text class="text" @click="signIn"> Sign in</text> </view>
		</view>
	</view>
</template>

<script>
	// import user from '../../common/user.js'
	export default {
		async onLoad() {
			const {...data}=await this.$http.post('/api/config/getconfig')
			uni.setStorageSync('settings',JSON.stringify(data.data))
			const token = uni.getStorageSync('token');
			if(token){
				uni.showLoading()
				setTimeout(()=>{
					uni.hideLoading()
					uni.redirectTo({
						url:'../index/index'
					})
				},300)
			}
		},
		data() {
			return {
				loginData:{
					username: '',
					password: ''
				},
				settings:JSON.parse(uni.getStorageSync('settings')) || {},
				language: 'English',
				showAccountLogin: false,
				showRegister: false,
				regData:{
					username:'',
					pwd:'',
					repwd:'',
					agentid:'',
				}
			};
		},
		methods: {
			start() {
				this.showRegister = true
			},
			signIn() {
				this.showAccountLogin = true
				this.showRegister = false
			},
			cancel(){
				this.showAccountLogin = false
			},
			enter(){
				if(!this.loginData.username || !this.loginData.password){
					uni.showToast({
						title:'请完善相关信息'
					})
					return
				}
				this.$store.dispatch('loginUser',this.loginData);
				this.showAccountLogin = false
			},
			forgot(){
				this.showAccountLogin = false
				this.showRegister = true
			},
			registerCancel(){
				this.showAccountLogin = false
				this.showRegister = false
			},
			registerSub(){
				if(!this.regData.username || !this.regData.pwd ||!this.regData.repwd){
					uni.showToast({
						title:'请完善相关信息'
					})
					return
				}
				this.$store.dispatch('register',this.regData);
				this.showRegister = false
			},
			navigateTo(e) {
				uni.navigateTo({
					url:e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		background: url('../../static/images/login-bg.png');
		height: 100%;
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		.show {
			.top {
				display: flex;
				padding-top: 107rpx;
				padding-right: 57rpx;
				justify-content: flex-end;

				image {
					width: 35rpx;
					height: 35rpx;
				}

				.language {
					padding-left: 22rpx;
					font-size: 28rpx;
					font-family: Bahnschrift;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);
				}
			}

			.content {
				display: flex;
				margin-top: 187rpx;
				justify-content: center;

				&_img {
					width: 220rpx;
					height: 220rpx;
				}
			}

			.footer {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;
				float: bottom;
				width: 100%;
				bottom: 202rpx;

				button {
					height: 110rpx;
					width: 600rpx;
					margin: 0 75rpx;
					background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
					border: 2rpx solid;
					border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
					border-radius: 5rpx;
				}

				view {
					margin-top: 72rpx;
					font-size: 40rpx;
					font-family: Myriad Pro;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 40rpx;
				}
			}
		}

		.showAccountLogin {
			background: #000;
			top: 0rpx;
			height: 100%;
			opacity: 0.4;
			width: 100%;
			position: absolute;
			z-index: 100;
		}
		.main{
			position: absolute;
			bottom: 0rpx;
			width: 100%;
			height: 525rpx;
			z-index: 200;
			background:rgba(246,246,246,1);
			box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.3);
			opacity:0.98;
			display: flex;
			flex-direction: column;
			align-items: center;
			.top{
				height: 110rpx;
				display: flex;
				position: relative;
				width: 100%;
				justify-content: center;
				align-items: center;
				font-size:34rpx;
				font-family:Myriad Pro;
				font-weight:400;
				color:rgba(0,0,0,1);
				background:rgba(255,255,255,0.8);
				box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.3);
				.cancel{
					position: absolute;
					right: 40rpx;
				}
			}
			
			.phone{
				width:678rpx;
				height:100rpx;
				background:rgba(255,255,255,1);
				border:1rpx solid rgba(220,221,221,1);
				border-radius:10rpx;
				display: flex;
				align-items: center;
				justify-items: center;
				margin-top: 25rpx;
				.iconfont{
					font-size: 40rpx;
					width:26rpx;
					height:41rpx;
					margin-left: 35rpx;
					margin-right: 37rpx;
				}
				input{
					width: 100%;
					margin-right: 20rpx;
				}
				.enter{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 96rpx;
					height: 100%;
					background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
					border:2rpx solid;
					border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 2 2;
					border-radius:0px 10rpx 10rpx 0px;
					.text{
						transform: rotate(180deg);
						font-size:36rpx;
					}
				}
			}
			.forgot{
				margin-top: 50rpx;
				font-size:34rpx;
				font-family:Myriad Pro;
				font-weight:400;
				text-decoration:underline;
				color:rgba(51,51,51,1);
				line-height:15rpx;
			}
		}
		.register{
			position: absolute;
			bottom: 0rpx;
			width: 100%;
			height: 928rpx;
			z-index: 200;
			background:rgba(246,246,246,1);
			box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.3);
			opacity:0.98;
			display: flex;
			flex-direction: column;
			align-items: center;
			.top{
				height: 110rpx;
				display: flex;
				position: relative;
				width: 100%;
				justify-content: center;
				align-items: center;
				font-size:34rpx;
				font-family:Myriad Pro;
				font-weight:400;
				color:rgba(0,0,0,1);
				background:rgba(255,255,255,0.8);
				box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.3);
				.cancel{
					position: absolute;
					right: 40rpx;
				}
			}
			
			.phone{
				width:678rpx;
				height:100rpx;
				background:rgba(255,255,255,1);
				border:1rpx solid rgba(220,221,221,1);
				border-radius:10rpx;
				display: flex;
				align-items: center;
				justify-items: center;
				margin-top: 25rpx;
				.iconfont{
					font-size: 40rpx;
					width:26rpx;
					height:41rpx;
					margin-left: 35rpx;
					margin-right: 37rpx;
				}
				input{
					width: 100%;
					margin-right: 20rpx;
				}
				.enter{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 96rpx;
					height: 100%;
					background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
					border:2rpx solid;
					border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 2 2;
					border-radius:0px 10rpx 10rpx 0px;
					.text{
						transform: rotate(180deg);
						font-size:36rpx;
					}
				}
			}
			button{
				margin: 52rpx 30rpx 0 30rpx;
				width:690rpx;
				height:110rpx;
				background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
				border:2rpx solid;
				border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 2 2;
				border-radius:5rpx;
			}
			.sign{
				margin-top: 48rpx;
				font-size:34rpx;
				font-family:Myriad Pro;
				font-weight:400;
				color:rgba(51,51,51,1);
				line-height:15rpx;
				display: flex;
				.text{
					text-decoration:underline;
				}
			}
		}
	}
</style>
