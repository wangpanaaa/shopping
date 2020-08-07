<template>
	<view class="box">
		<cu-custom bgColor="bg-black" :isBack="true" backRoute="/pages/login/login">
			<block slot="content">CREATE ACCOUNT</block>
		</cu-custom>
		<view class="login flex">
			<view class="text">CREATE ACCOUNT</view>
			<view class="language flex" @tap='navigateTo("/pages/index/settingLanguage")'>
				<image src="../../static/images/britain.png" />
				<text style="font-size:28rpx;font-family:Bahnschrift;font-weight:bold;">English</text>
			</view>
		</view>
		<view class="from">
			<view class="phone" style="margin-top: 46rpx;">
				<view class="iconfont icon-zhanghao"></view>
				<input v-model="regData.username" class="password" placeholder="Enter your username" style="height:94rpx">
			</view>
			<view class="phone" style="margin-top: 20rpx;">
				<view class="iconfont icon-mima"></view>
				<input v-model="regData.password" class="password" :password="showPassword" placeholder="Set password" style="height:94rpx" maxlength="20">
				<view class="iconfont xianshi" :class="[showPassword ? 'icon-xianshi' : 'icon-yincang']" @tap="changePassword"></view>
			</view>
			<view class="phone" style="margin-top: 20rpx;">
				<view class="iconfont icon-mima"></view>
				<input v-model="regData.repwd" class="password" :password="showRepwd" placeholder="Enter the password again" style="height:94rpx" maxlength="20">
				<view class="iconfont xianshi" :class="[showRepwd ? 'icon-xianshi' : 'icon-yincang']" @tap="changeRepwd"></view>
			</view>
			<view class="phone" style="margin-top: 20rpx;">
				<view class="iconfont icon-mima"></view>
				<input v-model="regData.agentid" class="password" placeholder="Entert then code" style="height:94rpx">
			</view>
			
			<view class="commit" @click="registerSub">
				SIGN UP
			</view>
			<view class="register">Alredy have an account? <text style="text-decoration: underline;margin-left: 28rpx;" @tap='navigateTo("/pages/login/login")'>Sign in</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		async onLoad() {
			// this.loginData.username=this.$store.state.username || ''
			// this.loginData.password=this.$store.state.password || ''
			const {...data}=await this.$http.post('/api/config/getconfig')
			uni.setStorageSync('settings',JSON.stringify(data.data))
			this.settings=data.data
			const token = uni.getStorageSync('token');
			if(token){
				uni.showLoading()
				setTimeout(()=>{
					uni.hideLoading()
					uni.redirectTo({
						url:'../index/index'
					})
				},500)
			}
		},
		data() {
			return {
				// loginData:{
				// 	username: '',
				// 	password: ''
				// },
				settings:{},
				showRepwd:true,
				showPassword:true,
				// language: 'English',
				// showAccountLogin: false,
				// showRegister: false,
				regData:{
					username:'',
					pwd:'',
					repwd:'',
					agentid:'',
				}
			};
		},
		methods: {
			// start() {
			// 	this.showRegister = true
			// },
			// signIn() {
			// 	this.showAccountLogin = true
			// 	this.showRegister = false
			// },
			// cancel(){
			// 	this.showAccountLogin = false
			// },
			// enter(){
			// 	if(!this.loginData.username || !this.loginData.password){
			// 		uni.showToast({
			// 			title:'Please complete the relevant information'
			// 		})
			// 		return
			// 	}
			// 	this.$store.dispatch('loginUser',this.loginData);
			// 	this.showAccountLogin = false
			// },
			// forgot(){
			// 	this.showAccountLogin = false
			// 	this.showRegister = true
			// },
			// registerCancel(){
			// 	this.showAccountLogin = false
			// 	this.showRegister = false
			// },
			registerSub(){
				if(!this.regData.username || !this.regData.pwd ||!this.regData.repwd){
					uni.showToast({
						icon:"none",
						title:'Please complete the relevant information'
					})
					return
				}
				this.$store.dispatch('register',this.regData);
				this.showRegister = false
			},
			navigateTo(e) {
				uni.redirectTo({
					url:e
				})
			},
			changePassword() {
			    this.showPassword = !this.showPassword;
			},
			changeRepwd(){
				this.showRepwd = !this.showRepwd;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		background-color: #000;
		text-align: center;
		height:88rpx;
		line-height: 88rpx;
		color: #FFFFFF;
		font-size:34rpx;
		font-family:Myriad Pro;
	}
	.login{
		margin: 58rpx 40rpx 50rpx 50rpx;
		justify-content: space-between;
		align-items: center;
		image {
			width: 35rpx;
			height: 35rpx;
		}
		.text{
			font-size:40rpx;
			font-family:Myriad Pro;
			font-weight:bold;
		}
	}
	.from{
		margin: 0 30rpx;
		background-color: #fff;
		padding: 0 35rpx;
		border:1px solid rgba(220,221,221,1);
		border-radius:1px;
		.phone{
			height:100rpx;
			background:rgba(255,255,255,1);
			border:1rpx solid rgba(220,221,221,1);
			border-radius:10rpx;
			display: flex;
			align-items: center;
			justify-items: center;
			margin-top: 25rpx;
			.iconfont{
				width:35rpx;
				height:40rpx;
				margin-left: 35rpx;
				margin-right: 37rpx;
			}
			.xianshi{
				width: 56rpx;
				height: 56rpx;
				font-size: 48rpx;
				margin-left: 0;
				margin-right: 10rpx;
			}
			input{
				width: 100%;
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
	}
	.commit {
		margin-top: 62rpx;
		height: 110rpx;
		background: linear-gradient(180deg, rgba(247, 222, 162, 1), rgba(240, 194, 80, 1));
		// border: 1rpx solid ;
		border-image: linear-gradient(170deg, rgba(172, 142, 66, 1), rgba(133, 108, 47, 1)) 2 2;
		border-radius: 5rpx;
		font-family: Myriad Pro;
		font-weight: 400;
		text-align: center;
		line-height: 55px;
		font-size: 34rpx;
		color: #111111;
	}
	.register{
		text-align: center;
		margin-top: 45rpx;
		font-size:34rpx;
		margin-bottom: 94rpx;
		font-family:Myriad Pro;
	}
</style>
