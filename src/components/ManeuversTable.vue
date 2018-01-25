<template>
  <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        
        class="elevation-1"
      >
      <template slot="headers" slot-scope="props">
        <th v-for="header in props.headers" 
            :key="header.text"
            :class="[themecolor, themecolor+'--text',shade3 ,shade5Text]"
            class="px-1 subheading">
          <span v-html="header.text"></span>
        </th>
      </template>

      <template slot="items" slot-scope="props">
        <td
        :class="[ themecolor+'--text',shade5,shade4Text]"
        class=" px-3 body-2  text-xs-center text-sm-left">
            <v-tooltip bottom class="hidden-sm-and-up">
              <span slot="activator">
                <v-avatar tile class="px-2">
                  <simple-svg
                  :filepath="props.item.avatar"
                  :fill="svgShade"
                  :stroke="svgShade"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
                </v-avatar>
              </span>
                <span>{{ props.item.name }}</span>
            </v-tooltip>
              <span class="hidden-xs-only">
                <v-avatar tile class="px-2">
                  <simple-svg
                  :filepath="props.item.avatar"
                  :fill="svgShade"
                  :stroke="svgShade"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
                </v-avatar>
                <span :class="[themecolor+'--text',shade5,shade4Text]" class="px-2">{{ props.item.name }}</span>
              </span>
        </td>
        <td 
        :class="[themecolor, themecolor+'--text',shade5,shade5Text]"
        class="px-0  title text-xs-center">
          {{ props.item.total }}
        </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.stat }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.bab }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.size }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]"><input size="2" v-bind:value="props.item.misc" /> </td>
      </template>
    </v-data-table>
</template>

<script>
  import colorSet from 'vuetify/es5/util/colors'
import theme from '../mixins/theme'
import {bus} from '../main'
  export default {
    props: ['themecolor'],

    mixins:[theme],
     created () {
      bus.$on('toggleDark',()=>{this.dark = !this.dark})
     },
    data () {
      return {
        dark: true,
        colorSet: colorSet,
        headers: [
          {
            text: 'Maneuvers',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Stat', sortable: false, value: 'stat' },
          { text: 'BAB', sortable: false, value: 'bab' },
          { text: 'Size', sortable: false, value: 'size' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/cmb.svg',
            name: 'CMB',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmbFin.svg',
            name: 'CMB (Finesse)',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmd.svg',
            name: 'CMD',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
