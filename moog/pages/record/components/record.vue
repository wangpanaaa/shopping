<template>
	<view class="recordCotain">
		<view class="recordHead">
			<view class="recordHead_left">
				<view class="recordHead_left_time">
					<span>Time</span> <span>2020-07-13</span> <span>12:17:50</span>
				</view>
				<view class="recordHead_left_number">
					<span>Number</span> <span>2020071312217398050</span>
				</view>
			</view>
			<view :class="['recordHead_button',buttonStatus[status]]">
				{{buttonStatus[status]}}
			</view>
		</view>
		<view class="recordContent">
			<view class="recordContent_image">
				<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" mode="aspectFill"></image>
			</view>
			<p>
				European style sofa chair neoclassical solid wood leisure chair small household Type single sofa reception
				negotiation chair bedroom tiger chair
			</p>
		</view>
		<view class="recordFoot">
			<view class="recordFoot_item">
				<span>order Tota</span><span>₹ 1350</span>
			</view>
			<view class="recordFoot_item">
				<span> Commission</span><span>₹ 1350</span>
			</view>
			<view class="recordFoot_item">
				<span>Estimated refund</span><span style="color: #ffb44e;font-size: 16px;font-weight: bold;">₹ 1350</span>
			</view>
			<view class="recordFoot_button" v-if="status==2">
				   <button type="default">Cancel</button>
					 <button type="default">Submit</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttonStatus: {
					1: 'Completed',
					2: 'Pending',
					3: 'Cancelled',
				}
			}
		},
		props:{
			status:{
				type:String,
				default:'1'
			}
		}
	}
</script>

<style lang="less">
	.recordCotain {
		background-color: #FFFFFF;
		border-radius: 5px;
		padding: 15px 10px;

		.recordHead {
			display: flex;
			border-bottom: 1px solid #F6F6F6;
			padding-bottom: 12px;

			&_left {
				flex: 1;

				&_time span {
					display: inline-block;

					&:nth-child(1) {
						width: 53px;
						color: #A8A8A8;
						font-size: 12px;
					}

					&:nth-child(n+2) {
						width: 70px;
						color: #33333;
						font-size: 12px;
					}

				}

				&_number span {
					display: inline-block;

					&:nth-child(1) {
						width: 53px;
						color: #A8A8A8;
						font-size: 12px;
					}

					&:nth-child(n+2) {
						color: #33333;
						font-size: 12px;
					}
				}
			}

			&_button {
				width: 77px;
				height: 20px;
				background: rgba(0, 160, 117, 1);
				border-radius: 3px;
				line-height: 20px;
				font-size: 13px;
				font-family: Myriad Pro;
				text-align: center;
				color: #FFFFFF;
			}

			.Completed {
				background: rgba(0, 160, 117, 1);
			}

			.Pending {
				background: rgba(255, 112, 112, 1);
			}

			.Cancelled {
				background: rgba(164, 164, 164, 1);
			}
		}

		.recordContent {
			padding: 15px 0;
			display: flex;
			border-bottom: 1px solid #F6F6F6;

			&_image {
				width: 60px;
				height: 60px;
				padding: 2px;
				box-sizing: border-box;
				border: 1px solid rgba(220, 221, 221, 1);
				border-radius: 5px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			p {
				flex: 1;
				margin-left: 10px;
				text-align: justify;
			}
		}

		.recordFoot {
			padding-top: 15px;
			display: flex;
			flex-direction: column;

			&_item {
				display: flex;
				justify-content: space-between;
				&:nth-child(n+2){
					margin-top: 6px;
				}
			}
			&_button{
				display: flex; justify-content: space-between;
				margin-top: 15px;
				button{
					width: 150px;
					height: 50px;
					line-height: 50px;
					color: #222F3E;
					background: #FFFFFF;
					border:1px solid rgba(34,47,62,1);
					border-radius:3px;
					&:nth-child(2){
						background:linear-gradient(180deg,rgba(247,222,162,1),rgba(240,194,80,1))
					}
				}
			}
		}
	}
</style>
