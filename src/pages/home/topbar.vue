<template>
  <div class="header">
    <div class="logo">
      <img src="img/logo.png" alt />
    </div>
    <van-search v-model="value" shape="round" background="#fff" placeholder="要买什么？" class="search" />
    <van-icon name="phone-o" color="#79b351" size=".3rem" />
  </div>
</template>

<script>
import { Search, Icon } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon
  }
};
</script>

<style scoped>
.header {
  height: 0.5rem;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0.1rem;
  align-items: center;
  display: flex;

  justify-content: space-evenly;
}
.logo img {
  width: 0.6rem;
  height: 0.4rem;
}
.search {
  width: 2.5rem;
}
i.van-icon.van-icon-phone-o {
    padding-right: .2rem;
}
</style>