<template>
	<view class="login">
		<view class="show">
			<view class="top">
				<image src="../../static/images/britain.png" />
				<view class="language">{{language}}</view>
			</view>
			<view class="content">
				<image class="content_img" src="../../static/images/Logo.png"></image>
			</view>
			<view class="footer">
				<button @click="start">START SHOPPING</button>
				<view>Sign in</view>
			</view>
		</view>
		<view class="showAccountLogin" v-if="showAccountLogin">
		</view>
		<view class="main" v-if="showAccountLogin">
			<view class="top">
				<view class="text">Account login</view>
				<view class="cancel">X</view>
			</view>
			<view class="phone">
				<image src="../../static/images/Logo.png"/>
				<input  placeholder="Enter Username / Phone number ">
			</view>
			<view class="phone">
				<image src="../../static/images/Logo.png"/>
				<input class="password" password placeholder="Enter password ">
				<view class="enter">
					<view class="text">→</view>
				</view>
			</view>
			<view class="forgot">Forgot my password</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				language: 'English',
				showAccountLogin: false
			};
		},
		methods: {
			start() {
				this.showAccountLogin = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		background: url('../../static/images/title_bg.png');
		height: 1624rpx;
		position: relative;

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
				bottom: 220rpx;

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
				image{
					background: #000;
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
						font-size:36rpx;
						font-family:SFProText;
						font-weight:500;
						color:rgba(17,17,17,1);
						line-height:15rpx;
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
	}
</style>
