import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WaterfallResto from '@/views/WaterfallResto.vue'
import FishingLake from '@/views/FishingLake.vue'
import Ecotainment from '@/views/Ecotainment.vue'
import FunctionRoom from '@/views/FunctionRoom.vue'
import VerticalGarden from '@/views/VerticalGarden.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/waterfall-resto',
    name: 'waterfallresto',
    component: WaterfallResto
  },
  {
    path: '/fishing-lake',
    name: 'fishinglake',
    component: FishingLake
  },
  {
    path: '/ecotainment',
    name: 'ecotainment',
    component: Ecotainment
  },
  {
    path: '/function-room',
    name: 'FunctionRoom',
    component: FunctionRoom
  },
  {
    path: '/vertical-garden',
    name: 'FunctionRoom',
    component: VerticalGarden
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
