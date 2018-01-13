// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueSimpleSVG from 'vue-simple-svg'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import Navbar from './components/Navbar.vue'
import StatTable from './components/StatTable.vue'
import SavesTable from './components/SavesTable.vue'
import DefensesTable from './components/DefensesTable.vue'
import CombatTable from './components/CombatTable.vue'
import ManeuversTable from './components/ManeuversTable.vue'
import SkillTable from './components/SkillTable.vue'
import StatsPage from './components/StatsPage.vue'
import router from './router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

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

Vue.component('navbar',Navbar)
Vue.component('stat-table',StatTable)
Vue.component('stats-page',StatsPage)
Vue.component('saves-table',SavesTable)
Vue.component('defenses-table',DefensesTable)
Vue.component('combat-table',CombatTable)
Vue.component('maneuvers-table',ManeuversTable)
Vue.component('skill-table',SkillTable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
