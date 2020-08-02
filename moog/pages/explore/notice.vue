<template>
  <view class="notice_contain">
    <view class="card_item"
          v-for="index in 6"
          :key="index">

      <view class="card_time">2020-07-30 17:48</view>

      <view class="card_content">

        <view class="card_title"
              @click="todetail">
          <view class="title_left text_ellipsis">
            Information title
          </view>
          <view class="cuIcon-right"></view>
        </view>

        <view class="card_text">Hollywood legend Olivia de Havilland, star of "Gone With the Wind", died on Sunday at the age of 104 at her home in Paris. Publicist Lisa Goldberg said she died peacefully of natural causes. The doe-eyed actress beloved to millions as the sainted Melanie Wilkes in "Gone With the Wind" also won two Oscars and was key to improving Hollywood's contract system for actors. De Havilland was the sister of fellow Oscar winner Joan Fontaine, with whom she had a troubled relationship.</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    todetail () {
      console.log('查看详情')
    }
  },
}
</script>

<style lang="less" scoped>
.notice_contain {
  padding: 0 30rpx 20rpx;
  /*  display: flex;
  justify-content: center; */
}

.card_item {
  // width: 690rpx;
  color: #333333;

  .card_time {
    height: 78rpx;
    line-height: 78rpx;
    font-size: 26rpx;
    text-align: center;
  }
}

.card_content {
  padding: 30rpx 30rpx;
  border: 1rpx solid rgba(220, 221, 221, 1);
  border-radius: 10rpx;
  background: #ffffff;

  .card_title {
    padding-bottom: 22rpx;
    display: flex;
    justify-content: space-between;
    border-bottom: 1rpx dashed rgba(220, 221, 221, 1);

    .title_left {
      font-size: 30rpx;
      font-weight: bold;
    }
  }

  .card_text {
    padding-top: 20rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-all;
  }
}

.text_ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
