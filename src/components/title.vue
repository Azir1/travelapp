<template>
  <div>
    <div class="title">
      <img :src=img alt />
      <h4>{{title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props:['title','img']
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
.title img {
  width: 0.4rem;
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