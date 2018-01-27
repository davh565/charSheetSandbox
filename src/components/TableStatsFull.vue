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
        <tr 
                         v-on:mouseover="props.item.value=true"
        v-on:mouseleave="props.item.value=false">
        <td
        :class="[ themecolor+'--text',shade5,shade4Text]"
        class=" px-2 body-2  text-xs-center text-sm-left">
            
              <span >
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
        class="px-3 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]">
          <v-btn
                         :class="[themecolor, shade2,
                                  themecolor+'--text',shade4Text]"
                         class="title"
                         fab
                         flat
          >
                            {{props.item.bonus}}
          </v-btn>


        </td>
        <td
        class="px-3 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
          <v-btn
                         :class="[themecolor, shade5,
                                  themecolor+'--text',shade4Text]"
                         class="title"
                         fab
                         flat
          >
                            {{props.item.total}}
          </v-btn>
        </td>
        <!-- <td class="text-xs-center">{{ props.item.base }}</td> -->
        <td
        class="px-3 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
        <v-badge
                    v-model="props.item.value" 
                    top 
                    right
                    overlap
                    color="none">
                    
                        <span slot="badge">
                            <v-btn
                            class="mt-4"
                             icon 
                             small
                             color="grey"
                             v-on:click="props.item.base++">
                                <v-icon>add</v-icon>
                            </v-btn>
                        </span>
                    <v-badge 
                    v-model="props.item.value" 
                    bottom 
                    right
                    overlap
                    color="none">
                        <span slot="badge">
                            <v-btn
                            class="mb-4"
                             icon 
                             small
                             color="grey"
                             v-on:click="props.item.base--">
                                <v-icon>remove</v-icon>
                            </v-btn>
                        </span>
                                         
                        <v-btn
                             color="grey"
                             :class="shade4"
                         class="title"
                         fab
                         
                         
                         >
                            {{props.item.base}}
                        </v-btn>
                    </v-badge>
                    </v-badge>
        </td>
        <td
        class="px-3 body-2 text-xs-center" 
        :class="[themecolor+'--text',shade5,shade4Text]"
        >
        <v-badge
                    v-model="props.item.value" 
                    top 
                    right
                    overlap
                    color="none"
                    >
                        <span slot="badge">
                            <v-btn
                    class="mt-4"
                             icon 
                             small
                             color="grey"
                             v-on:click="props.item.misc++">
                                <v-icon>add</v-icon>
                            </v-btn>
                        </span>
                    <v-badge 
                    v-model="props.item.value" 
                    bottom 
                    right
                    overlap
                    color="none">
                        <span slot="badge">
                            <v-btn
                    class="mb-4"
                             icon 
                             small
                             color="grey"
                             v-on:click="props.item.misc--">
                                <v-icon>remove</v-icon>
                            </v-btn>
                        </span>
                                         
                        <v-btn
                             color="grey"
                             :class="shade4"
                         class="title"
                         fab
                         
                         
                         >
                            {{props.item.misc}}
                        </v-btn>
                    </v-badge>
                    </v-badge>
        </td>
        </tr>
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



