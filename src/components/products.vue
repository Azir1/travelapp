<template>
  <div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <van-card :price="v.price" :title="v.title" :thumb="v.img" :num=v.address />
    </div>
    
  </div>
</template>

<script>
import { Card } from "vant";

export default {
  components: {
    [Card.name]: Card,
  },
  data() {
    return {
      list: [
        {
          title: "孟津特产西瓜，携带方便，色泽鲜亮",
          price: 300,
          address: "杰尔逊西瓜庄园",
          img: "img/project_01.jpg"
        },
        {
          title: "孟津特产西瓜，携带方便，色泽鲜亮",
          price: 300,
          address: "杰尔逊西瓜庄园",
          img: "img/project_02.jpg"
        },
        {
          title: "孟津特产西瓜，携带方便，色泽鲜亮",
          price: 300,
          address: "杰尔逊西瓜庄园",
          img: "img/project_03.jpg"
        },
        {
          title: "孟津特产西瓜，携带方便，色泽鲜亮",
          price: 300,
          address: "杰尔逊西瓜庄园",
          img: "img/project_04.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.van-card__title {
  font-size: 0.16rem;
  line-height: 0.2rem;
  padding: 0.1rem;
}
.van-card__price-integer {
  color: red;
}
.van-card__price-currency{
  margin-left: .1rem;
  color: red;
}
</style>