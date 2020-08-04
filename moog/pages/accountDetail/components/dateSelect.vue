<template>
	<view class="dateSelect">
		<view class="date">
			<span class="iconfont icon-riqi"></span>
			<picker id="Before" :value="startBefore" @change="chooseDate" start="2020-01-01" :end="today" mode="date">{{startBefore}}</picker>
			to
			<picker id="After"  :value="startAfter" @change="chooseDate" :start="startBefore" :end="today" mode="date">{{startAfter}}</picker>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				startEnd: '',
				today: '',
				startAfter: '',
				startBefore: ''
			}
		},
		created() {
			this.date()
		},
		 methods:{
			 date() {
			 	var date = new Date();
			 
			 this.startAfter=this.today = date.getFullYear() +
			 		"-" +
			 		(date.getMonth() < 9 ?
			 			"0" + (date.getMonth() + 1) :
			 			date.getMonth() + 1) +
			 		"-" +
			 		(date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
			 	this.startBefore = date.getFullYear() +
			 		"-" +
			 		(date.getMonth() < 9 ?
			 			"0" + (date.getMonth() + 1) :
			 			date.getMonth() + 1) +
			 		"-" + '01'
			 
			 },
			 chooseDate(e) {
			 	if (e.target.id === 'Before') {
			 		 this.startBefore = e.detail.value
					 if(new Date(this.startBefore).getTime()-new Date(this.startAfter).getTime()>0){
						 this.startAfter=this.today
					 }
			 	} else {
			 		 this.startAfter = e.detail.value
			 	}
				this.$emit('change',[ this.startBefore , this.startAfter])
			 },
		 }
	}
</script>

<style lang="less" scoped>
	.icon-riqi {
		font-size: 30rpx;
		margin-right: 10rpx;
	}
	
	.date {
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	
		picker {
			padding: 10rpx;
		}
	}
</style>
