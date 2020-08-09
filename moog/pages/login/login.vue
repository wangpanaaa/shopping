<template>
	<view class="box" v-if="!token">
		<cu-custom bgColor="bg-black title">
			<block slot="content">WELCOME</block>
		</cu-custom>
		<view class="login flex">
			<view class="text">LOGIN</view>
			<view class="language flex" @tap='selectLanguage'>
				<image src="../../static/images/britain.png" />
				<text style="font-size:28rpx;font-family:Bahnschrift;font-weight:bold;">English</text>
			</view>
		</view>
		<view class="from">
			<view class="phone" style="margin-top: 46rpx;">
				<view class="iconfont icon-zhanghao"></view>
				<input v-model="loginData.username" class="password" placeholder="Enter your username" style="height:94rpx">
			</view>
			<view class="phone" style="margin-top: 20rpx;">
				<view class="iconfont icon-mima"></view>
				<input v-model="loginData.password" class="password" :password="showPassword" placeholder="Entert password" style="height:94rpx" maxlength="20">
				<view class="iconfont xianshi" :class="[showPassword ? 'icon-xianshi' : 'icon-yincang']" @tap="changePassword"></view>
			</view>
			<view class="commit" @click="enter">
				SIGN IN
			</view>
			<view class="register">Register a new <text style="text-decoration: underline;margin-left: 28rpx;" @tap='navigateTo("/pages/login/register")'>Sign up</text></view>
		</view>
		
		<!-- <view class="cu-modal notice-dal" :class="versionFlga==true?'show':''">
			<view class="version-img" v-if="versionInfo">
				<text class="iconfont icon-guanbi" @tap="versionFlga=false" v-if="versionInfo.isforce===0"></text>
				<image  src="../../static/images/version.png"></image>
				<view class="box">
					<view v-html="versionInfo.note"></view>
				</view>
				<view class="flex flex-direction"><button class="update" @tap="openDown">Update Now</button></view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default {
		async onLoad() {
			const token = uni.getStorageSync('token');
			this.token=token
			this.loginData.username=this.$store.state.username || ''
			this.loginData.password=this.$store.state.password || ''
			const {...data}=await this.$http.post('/api/config/getconfig')
			uni.setStorageSync('settings',JSON.stringify(data.data))
			this.settings=data.data
			
			if(token){
				uni.showLoading()
				setTimeout(()=>{
					uni.hideLoading()
					uni.reLaunch({
						url:'../index/index'
					})
				},500)
			}else{
				//#ifdef APP-PLUS
					this.versionInfo=this.$store.state.version || {}
					if(this.versionInfo.status>0){
						this.versionFlga=true
					}
				//#endif
			}
		},
		data() {
			return {
				loginData:{
					username: '',
					password: '',
					devicetype:'',
					version:'',
				},
				versionFlga:false,
				showPassword:false,
				settings:{},
				versionInfo:{},
				token:'',
			};
		},
		methods: {
			selectLanguage(){
				uni.navigateTo({
					url:"/pages/index/settingLanguage"
				})
			},
		
			openDown(){
				//#ifdef APP-PLUS
					if(this.versionInfo){
						plus.runtime.openURL(this.versionInfo.url)
					}
				//#endif
			},
			changePassword: function() {
			    this.showPassword = !this.showPassword;
			},
			enter(){
				if(!this.loginData.username || !this.loginData.password){
					uni.showToast({
						icon:'none',
						title:'Please complete the relevant information'
					})
					return
				}
				// #ifdef APP-PLUS
					uni.getSystemInfo({
						success:(e)=>{
							this.loginData.devicetype=e.platform
							this.loginData.version=plus.runtime.versionCode
						}
					})
				// #endif
				
				this.$store.dispatch('loginUser',this.loginData);
				this.showAccountLogin = false
			},
			navigateTo(e) {
				uni.redirectTo({
					url:e
				})
			},
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
	.version-img{
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		width: 300px;
		max-width: 100%;
		border-radius: 5px;
		overflow: hidden;
		image{
			width: 100%;
			height: 290rpx;
			background:none
		}
		.icon-guanbi{
			position: absolute;
			width:58rpx;
			height:58rpx;
			background:rgba(255,255,255,1);
			border-radius:50%;
			display: flex;
			align-items: center;
			justify-content: center;
			right: 0;
			top: 20px;
			z-index: 999;
		}
		.box{
			background-color: #fff;
			margin-top: -20rpx;
			padding: 50rpx 46rpx 95rpx 46rpx;
			height: 300rpx;
			overflow: scroll;
		}
		.flex{
			background-color: #fff;
		}
		.update{
			margin:20rpx;
			height:80rpx;
			line-height: 80rpx;
			font-size: 34rpx;
			background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1));
			border-image:linear-gradient(170deg, rgba(172,142,66,1), rgba(133,108,47,1)) 2 2;
		}
	}
</style>
