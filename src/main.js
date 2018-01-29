// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueSimpleSVG from 'vue-simple-svg'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import Navbar from './components/Navbar.vue'
import Drawer from './components/Drawer.vue'
import EncounterBar from './components/EncounterBar.vue'
import TableStats from './components/TableStats.vue'
import TableDefensesFull from './components/TableDefensesFull.vue'
import TableStatsFull from './components/TableStatsFull.vue'
import TableSavesFull from './components/TableSavesFull.vue'
import CombatTable from './components/CombatTable.vue'
import ManeuversTable from './components/ManeuversTable.vue'
import SkillTable from './components/SkillTable.vue'
import ItemTable from './components/ItemTable.vue'
import StatsPage from './components/StatsPage.vue'
import router from './router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import Icon from 'vue-svg-icon/Icon.vue';

Vue.use(VueLodash, lodash)

Vue.use(VueSimpleSVG)
Vue.use(Vuetify, { theme: {
  primary: '#039BE5',
  secondary: '#4DD0E1',
  accent: '#B2EBF2',
  error: '#BF360C',
  warning: '#FFA000',
  info: '#81D4FA',
  success: '#2E7D32',
}})

Vue.component('icon', Icon);  
Vue.component('navbar',Navbar)
Vue.component('drawer',Drawer)
Vue.component('encounter-bar',EncounterBar)
Vue.component('table-stats',TableStats)
Vue.component('table-defenses-full',TableDefensesFull)
Vue.component('table-stats-full',TableStatsFull)
Vue.component('table-saves-full',TableSavesFull)
Vue.component('stats-page',StatsPage)
Vue.component('combat-table',CombatTable)
Vue.component('maneuvers-table',ManeuversTable)
Vue.component('skill-table',SkillTable)
Vue.component('item-table',ItemTable)

Vue.config.productionTip = false

export const bus = new Vue({
  testObj: 'trdft'
  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
