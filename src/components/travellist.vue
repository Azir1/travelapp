// 旅游列表组件
<template>
  <div>
    <div v-for="(v,i) in list" :key="i" class="list">
      <van-image width="100%" :src="v.img" />
      <div class="num">
        <h4>{{v.person}}/{{v.total}}人报名
        
        <h5>出发时间{{v.time}}</h5>
        </h4>
        <van-button type="primary">查看详情</van-button>
      </div>
      <div class="info">
        <h3>{{v.title}}</h3>
        <p>{{v.info|text}}...</p>
      </div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage ,Button} from "vant";
export default {
  components: {
    [VanImage.name]: VanImage,
    [Button.name]:Button
  },
  data() {
    return {
      list: [
        {
          title: "黄河小浪底",
          info:
            "小浪底景区分为四大精华景区：西霞湖、大坝湿地公园、张岭半岛度假区、黄河三峡。四大景区特色各异，东西相映，恰如镶嵌在母亲河上的四颗珍珠，成为令世人瞩目的旅游热点",
          time: "2020/1/20",
          person: "20",
          total: "30",
          img: "img/trip_list_01.jpg"
        },
        {
          title: "黄河小浪底",
          info:
            "小浪底景区分为四大精华景区：西霞湖、大坝湿地公园、张岭半岛度假区、黄河三峡。四大景区特色各异，东西相映，恰如镶嵌在母亲河上的四颗珍珠，成为令世人瞩目的旅游热点",
          time: "2020/1/20",
          person: "20",
          total: "30",
          img: "img/trip_list_02.jpg"
        },
        {
          title: "黄河小浪底",
          info:
            "小浪底景区分为四大精华景区：西霞湖、大坝湿地公园、张岭半岛度假区、黄河三峡。四大景区特色各异，东西相映，恰如镶嵌在母亲河上的四颗珍珠，成为令世人瞩目的旅游热点",
          time: "2020/1/20",
          person: "20",
          total: "30",
          img: "img/trip_list_01.jpg"
        }
      ]
    };
  },
  filters:{
    text(val){
      return val.substr(0,40)
    }
  }
};
</script>

<style scoped>
.space {
  height: 0.1rem;
  background: #eee;
  width: 100%;
}
.num {
  position: absolute;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 .2rem;
  box-sizing: border-box;
  color: #eee;
  align-items: center;
}
.list{
  position: relative;
}
.info{
  padding: .1rem .2rem;
}
h3{
  font-size: .2rem;
  padding-bottom: .1rem;
}
p{
  color: #666;
}
</style>