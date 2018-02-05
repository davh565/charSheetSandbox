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
        <v-expansion-panel>
    <v-expansion-panel-content v-for="(item,i) in items" :key="i">
      <div slot="header">{{item.name}}</div>
      <v-card>
        <v-card-text>{{item.content}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

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
    }
  }
</script>

<style>

</style>

