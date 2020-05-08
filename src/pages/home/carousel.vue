<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="img/banner01.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
      <img src="img/banner02.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
      <img src="img/banner03.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
      <img src="img/banner04.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 0.65rem;
  color: #fff;
  text-align: center;
  background-color: #fff;
  height: 1.7rem;
}
img{
  width: 100%;
  height: 100%;
}
</style>