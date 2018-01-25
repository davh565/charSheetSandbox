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
          {{ props.item.bonus }}
        </td>
        <td
        class="px-0 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
          {{ props.item.total }}
        </td>
        <!-- <td class="text-xs-center">{{ props.item.base }}</td> -->
        <td
        class="px-0 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
          <input
          size="2" 
          v-bind:value="props.item.base"/>
        </td>
        <td 
        class="px-0 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
          <input size="2" v-bind:value="props.item.misc" />
        </td>
        <!-- <td class="text-xs-center">{{ props.item.misc }}</td> -->
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
            text: 'Stats',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Bonus', sortable: false, value: 'bonus' },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Base', sortable: false, value: 'base' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            name: 'Strength',
            avatar: '/static/icons/str.svg',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/dex.svg',
            name: 'Dexterity',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cons.svg',
            name: 'Constitution',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/int.svg',
            name: 'Intelligence',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/wis.svg',
            name: 'Wisdom',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cha.svg',
            name: 'Charisma',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          }
        ]
      }
    },
    computed: {
      themeText: function() {
        return this.themecolor+'--text'
      }
    },
    mixins:[theme]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr>* {
  font-variant: small-caps;
}
</style>

