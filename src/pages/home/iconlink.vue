<template>
  <div>
    <van-row>

      <van-col span="6" class="icon" v-for="(v,i) in arr" :key="i">
      <img :src="v.img" alt="">
      {{v.title}}
      </van-col>
     
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from "vant";
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      arr: [
        { title: "孟津旅游", img: "img/index_icon01.png" },
        { title: "特产商城", img: "img/index_icon02.png" },
        { title: "美丽乡村", img: "img/index_icon03.png" },
        { title: "新闻资讯", img: "img/index_icon04.png" }
      ]
    };
  }
};
</script>

<style scoped>
.icon{
  padding: .2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}
img{
  width: .5rem;
}
</style>