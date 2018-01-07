import Vue from 'vue'
import Router from 'vue-router'
import StatsPage from '@/components/StatsPage'
import SkillsPage from '@/components/SkillsPage'
import SpellsPage from '@/components/SpellsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stats',
      name: 'StatsPage',
      component: StatsPage
    },
    {
      path: '/skills',
      name: 'SkillsPage',
      component: SkillsPage
    },
    {
      path: '/spells',
      name: 'SpellsPage',
      component: SpellsPage
    }
  ]
})
