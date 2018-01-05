import Vue from 'vue'
import Router from 'vue-router'
import StatsPage from '@/components/StatsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StatsPage',
      component: StatsPage
    }
  ]
})
