import Vue from 'vue'
import Router from 'vue-router'
import StatsPage from '@/components/PageStats'
import SkillsPage from '@/components/SkillsPage'
import ItemsPage from '@/components/ItemsPage'
import SpellsPage from '@/components/SpellsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stats',
      name: 'PageStats',
      component: StatsPage
    },
    {
      path: '/skills',
      name: 'SkillsPage',
      component: SkillsPage
    },
    {
      path: '/items',
      name: 'ItemsPage',
      component: ItemsPage
    },
    {
      path: '/spells',
      name: 'SpellsPage',
      component: SpellsPage
    }
  ]
})
