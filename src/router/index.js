import Vue from 'vue'
import Router from 'vue-router'
import PageAbilities from '@/components/PageAbilities'
import PageStats from '@/components/PageStats'
import SkillsPage from '@/components/SkillsPage'
import ItemsPage from '@/components/ItemsPage'
import SpellsPage from '@/components/SpellsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stats',
      name: 'PageStats',
      component: PageStats
    },
    {
      path: '/abilities',
      name: 'PageAbilites',
      component: PageAbilities
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
