<template>
    <v-card>
        <v-dialog
        v-model="dialog"
        max-width="650"
      >
      <v-card class="ma-2">
      <table-stats-full :themecolor="themecolor" />
           </v-card>
        </v-dialog>
        <v-toolbar dense
         :class="[themecolor, themecolor+'--text',shade3,shade5Text]"
         class="py-1">
            <!-- <v-toolbar-title > -->
                <v-btn  flat block large
                
                 v-on:click.stop="dialog=true">
                    Stats
                    </v-btn>
                <!-- </v-toolbar-title> -->
        </v-toolbar>
        <v-list two-line>
            <template
             v-for="(stat, index) in stats"
            >
            

            <v-list-tile
             :key="stat.name"
             avatar action
             v-on:mouseover="stat.value=true"
             v-on:mouseleave="stat.value=false"
             >
                <v-list-tile-avatar>
                  <simple-svg
            :filepath="stat.avatar"
            :fill="svgShade"
            :height="'32px'"
            :id="'custom-id'"
            :stroke="svgShade"
            :width="'32px'"
            @ready=""
            />
                </v-list-tile-avatar>
                <v-list-tile-title :class="[themeText,shade4Text]" >
                    {{stat.name}}
                </v-list-tile-title>
                <v-list-tile-action>
                    <v-badge
                    v-model="stat.value" 
                    top 
                    right
                    overlap
                    class="mb-2"
                    >
                        <span slot="badge">
                            <v-btn
                             icon 
                             small
                             :color="themecolor+' accent-1'"
                             v-on:click="stat.total++">
                                <v-icon>add</v-icon>
                            </v-btn>
                        </span>
                    <v-badge 
                    v-model="stat.value" 
                    bottom 
                    right
                    overlap
                    :color="themecolor+' accent-1'">
                        <span slot="badge">
                            <v-btn
                             icon 
                             small
                             :color="themecolor+' accent-1'"
                             v-on:click="stat.total--">
                                <v-icon>remove</v-icon>
                            </v-btn>
                        </span>
                    <v-badge
                    
                    bottom 
                    left 
                    overlap
                     
                    :color="themecolor+' '+shade1">
                        <span slot="badge" class="subheading">
                            <v-btn
                          icon 
                          fab
                             small
                             :color="themecolor+' '"
                             v-on:click="">
                         {{stat.bonus}}
                        </v-btn>
                         </span>
                        
                        <v-btn
                         :class="[themecolor, shade5,
                                  themecolor+'--text',shade4Text]"
                         class="title"
                         fab
                         flat
                         
                         
                         >
                            {{stat.total}}
                        </v-btn>
                    </v-badge>
                    </v-badge>
                    </v-badge>
                </v-list-tile-action>
                <v-list-tile-content>
                </v-list-tile-content>
                
                <!-- <v-list-tile-action>
                </v-list-tile-action> -->
            </v-list-tile>
            <v-divider v-if="index<stats.length-1" />
            </template>
        </v-list>
    </v-card>
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
          dialog: false,
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
        stats: [
          {
            value: false,
            name: 'Strength',
            avatar: '/static/icons/str.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/dex.svg',
            name: 'Dexterity',
            bonus: '+2',
            total: 13,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cons.svg',
            name: 'Constitution',
            bonus: '+3',
            total: 16,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/int.svg',
            name: 'Intelligence',
            bonus: '-1',
            total: 9,
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
    mixins:[theme],
    methods: {
        mouseOver(stat) {
            stat.value=!stat.value
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr>* {
  font-variant: small-caps;
}
</style>

