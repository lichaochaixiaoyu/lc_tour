import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 首页
import Index from '../views/Index.vue'
// 详情
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path:'/details/:lid',
    component:Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
