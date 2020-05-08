<template>
  <div>
    <div class="title">
    <h4>更多特产</h4>
      <van-icon name="arrow" />
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  components:{
    [Icon.name]:Icon
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0;
}

.title h4 {
  font-size: 0.2rem;
  color: #666;
  margin-left: 0.08rem;
}
.space {
  background: #eee;
  height: 0.1rem;
  width: 100%;
}
</style>