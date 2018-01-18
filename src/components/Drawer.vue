<template>
<v-navigation-drawer
      fixed
      clipped
      dark
      v-model="drawer"
      app
      permanant
      mini-variant
      :class="themecolor"
      class="darken-3"
    
      
    >
    <!-- <v-toolbar flat height='64px' :class="themecolor" class="darken-1 transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
          <img src="/static/avatar.png" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>CHARNAME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar> -->
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.name" :to="item.route"
      router>
          <v-list-tile-action>
            <v-avatar tile size="40%">
          <simple-svg
                  
                  :filepath="item.avatar"
                  :fill="svgColorLight"
                  :stroke="svgColorLight"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
        </v-avatar> 

          </v-list-tile-action>
           <v-list-tile-content>
          <v-list-tile-title :class="textColorLight">{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
      </v-list>


 <v-list dense>
          <v-list-group>
             <v-list-tile  slot="activator">
             <v-list-tile-action>
            <v-avatar tile size="40%">
          <simple-svg
                  
                  :filepath="'/static/icons/theme.svg'"
                  :fill="svgColorLight"
                  :stroke="svgColorLight"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
        </v-avatar> 
          </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title :class="textColorLight">Theme</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="toggleDark()">
              <v-list-tile-action>
                <v-avatar v-if="dark" size="20px" color="white"></v-avatar>
                <v-avatar v-else size="20px" color="black"></v-avatar>
              </v-list-tile-action>
                <v-list-tile-title :class="textColorLight" v-if="dark">Light</v-list-tile-title>
                <v-list-tile-title :class="textColorLight" v-else>Dark</v-list-tile-title>
            </v-list-tile>
            <v-list-tile :class="textColorLight" v-for="color in colors"
            v-bind:key="color"
            @click="changeTheme(color)">
              <v-list-tile-action>
                <v-avatar size="20px" :color="color"></v-avatar>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{color}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>

  
    </v-navigation-drawer>
</template>

<script>
import colorSet from 'vuetify/es5/util/colors'

  export default {
      props: ['drawer'],
    data () {
      return {
        colorSet: colorSet,
        themecolor: 'blue-grey',
        interval: {},
        dark: true,
        value: 0,
        colors: ['red', 'pink', 'purple',
                  'deep-purple', 'indigo', 'blue-grey',
                  'blue','light-blue','cyan',
                  'teal', 'green', 'light-green',
                  'lime','yellow','amber','orange',
                  'deep-orange', 'brown'],
        items: [
              {
                name: 'Stats',
                route: 'stats',
                avatar: '/static/icons/stats2.svg',
              },
              {
                name: 'Skills',
                route: 'skills',
                avatar: '/static/icons/skills.svg',

              },
              {
                name: 'Abilities',
                route: 'abilites',
                avatar: '/static/icons/abilities.svg',
              },
              {
                name: 'Items',
                route: 'items',
                avatar: '/static/icons/items.svg',
              },
              {
                name: 'Spells',
                route: 'spells',
                avatar: '/static/icons/spells.svg',
              },
        ]
        
      }
    },
    computed: {
      textColorLight: function(){
        return this.themecolor+"--text text--lighten-4"
      },
      textColorDark: function(){
        return this.themecolor+"--text text--darken-4"
      },
      svgColorLight: function(){
        return eval('this.colorSet.'+this.camelCase+".lighten4")
      },
      svgColorDark: function(){
        return eval('this.colorSet.'+this.camelCase+".darken4")
      },
      camelCase: function() {
            return this._.camelCase(this.themecolor)
        }
    },
    methods: {
      changeTheme: function(color) {
        this.$emit('changeTheme',color);
        this.themecolor = color;
      },
      toggleDark: function() {
        this.$emit('toggleDark');
        this.dark = !this.dark;
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 0) {
          return (this.value = 100)
        }
        this.value -= 10
      }, 1000)
    },
  }
</script>

<style>
</style>

