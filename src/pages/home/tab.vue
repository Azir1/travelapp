<template>
  <div>
    <Title title='孟津旅游' img='img/index_icon05.png'></Title>

    <van-tabs v-model="activeName" animated>
      <van-tab title="旅游活动" name="a">
        <TravelList></TravelList>
      </van-tab>
      <van-tab title="旅游景区" name="b">
        <TravelList></TravelList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import TravelList from "@/components/travellist";
import Title from "@/components/title";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    TravelList,
    Title
  },
  data() {
    return {
      activeName: "a"
    };
  }
};
</script>
<style scoped>

</style>