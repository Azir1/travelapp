<template>
  <div>
    <Title title="特产商城" img='img/index_icon06.png'></Title>
    <Products></Products>
    <More></More>
  </div>
</template>

<script>
import Title from "@/components/title";
import Products from './products'
import More from './more'
export default {
  components:{
    Title,
    Products,
    More

  }
}
</script>

<style scoped>

</style>