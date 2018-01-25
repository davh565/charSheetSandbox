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
            :class="[themecolor, themecolor+'--text',shade3,shade5Text]"
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
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.armor }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.shield }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.dex }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.size }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]"><input size="2" v-bind:value="props.item.deflect" /> </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]"><input size="2" v-bind:value="props.item.dodge" /> </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]"><input size="2" v-bind:value="props.item.nat" /> </td>
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
            text: 'Defenses',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Armor', sortable: false, value: 'armor' },
          { text: 'Shield', sortable: false, value: 'shield' },
          { text: 'Dex', sortable: false, value: 'dex' },
          { text: 'Size', sortable: false, value: 'size' },
          { text: 'Deflect', sortable: false, value: 'deflect' },
          { text: 'Dodge', sortable: false, value: 'dodge' },
          { text: 'Natural<br />Armor', sortable: false, value: 'nat' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/ac.svg',
            name: 'Armor Class',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acTouch.svg',
            name: 'Touch AC',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acFf.svg',
            name: 'Flat-Footed AC',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
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
