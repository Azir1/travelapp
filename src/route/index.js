import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes:[
    {name:'home',path:'/home',component:()=>import('@/pages/home/home.vue')},
    {path:'*',redirect:'/home'}
  ]
})