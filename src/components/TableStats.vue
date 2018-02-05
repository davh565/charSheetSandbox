<template>
    <v-card>
        <v-toolbar dense
        class="py-1"
        :class="[themecolor, themecolor+'--text',shade3,shade5Text]" >
            <v-btn flat block large 
            v-on:click.stop="dialog=true">
               {{title}}
            </v-btn>
        </v-toolbar>
        <v-list  fluid
        style="max-height: 357px"
        class="scroll-y"
      
            
        >
            <template v-for="(item, index) in items" >
                <v-list-tile avatar action
                :key="item.name"
                v-on:mouseover="item.value=true"
                v-on:mouseleave="item.value=false" >
                    <v-list-tile-action class="mx-2" >
                        <!-- <v-btn
                        fab
                        >
                            <object type="image/svg+xml" :data="item.avatar" width="48" height="48" style="fill:red" />
                        </v-btn> -->
                        
                       <v-avatar :class="[themecolor,shade2]" size="48px" >
                            <simple-svg
                            class="mt-2"
                        :filepath="item.avatar"
                        :fill="svgShade"
                        :height="'32px'"
                        :stroke="svgShade"
                        :width="'32px'"
                        @ready=""
                         />
                       </v-avatar>
                    </v-list-tile-action>
                    <v-list-tile-title :class="[themeText,shade4Text]" >
                        {{item.name}}
                    </v-list-tile-title>
                    <v-list-tile-action v-if="item.bonus">
                        <v-avatar :class="themecolor" size="36px" >
                            {{item.bonus}}
                        </v-avatar> 
                    </v-list-tile-action>
                    <v-list-tile-action>
                        <v-badge top right overlap
                        v-model="item.value" 
                        class="" >
                            <span slot="badge">
                                <v-btn icon small
                                :color="themecolor+' accent-1'"
                                v-on:click="item.total++">
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </span>
                    <v-badge bottom right overlap
                    v-model="item.value" 
                    :color="themecolor+' accent-1'">
                        <span slot="badge">
                            <v-btn icon small
                             :color="themecolor+' accent-1'"
                             v-on:click="item.total--">
                                <v-icon>remove</v-icon>
                            </v-btn>
                        </span>
                    
                        
                        <v-avatar
                        class=""
                        :class="[themecolor,shade5]"
                        >
                        
                            {{item.total}}
                        </v-avatar>
                    </v-badge>
                    </v-badge>
                </v-list-tile-action>
                <v-list-tile-content>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider  v-if="index<items.length-1" />
            </template>
        </v-list>

        <v-dialog v-model="dialog" max-width="650" >
            <v-card class="ma-2" >
                <slot />
            </v-card>
        </v-dialog>

    </v-card>
</template>
    

<script>
import colorSet from 'vuetify/es5/util/colors'
import theme from '../mixins/theme'
import {bus} from '../main'
  export default {
    props: ['themecolor','title','items'],
    mixins:[theme],
    created () {
      bus.$on('toggleDark',()=>{this.dark = !this.dark})
     },
    data () {
      return {
          dialog: false,
        dark: true,
        colorSet: colorSet,
        
      }
    },
    computed: {
      themeText: function() {
        return this.themecolor+'--text'
      }
    },
    mixins:[theme],
    methods: {
        mouseOver(item) {
            item.value=!item.value
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

