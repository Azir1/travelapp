<template>
  <div>
  <Topbar></Topbar>
  <Carousel></Carousel>
  <IconLink></IconLink>
  <Tab></Tab>
  <Specialty></Specialty>
  <Beautiful></Beautiful>
  <BottomBar></BottomBar>
  </div>
</template>

<script>
import Topbar from './topbar'
import Carousel from './carousel'
import IconLink from './iconlink'
import Tab from './tab'
import Specialty from '@/components/specialty'
import Beautiful from '@/components/beautiful'
import BottomBar from '@/components/bottombar'
export default {
  components:{
    Topbar,
    Carousel,
    IconLink,
    Tab,
    Specialty,
    Beautiful,
    BottomBar
  }
}
</script>

<style scoped>

</style>