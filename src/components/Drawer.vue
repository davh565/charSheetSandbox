<template>
  <v-navigation-drawer
    :class="[themecolor, shade5]"
    app
    clipped
    fixed
    :light="!dark"
    mini-variant
    permanent
    v-model="drawerState"
  >
  <v-list dense>
    <v-list-tile
    :key="item.name"
    :to="item.route"
    v-for="item in items"
    router
    >
      <v-list-tile-action>
        <v-tooltip bottom>
          <v-avatar tile size="40%" slot="activator">
            <simple-svg
            :filepath="item.avatar"
            :fill="svgShade"
            :height="'32px'"
            :id="'custom-id'"
            :stroke="svgShade"
            :width="'32px'"
            @ready=""
            />
          </v-avatar>
          <span>{{item.name}}</span> 
        </v-tooltip>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title
        :class="[themecolor+'--text',shade4Text]"
        
        >
          {{ item.name }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>

  <v-list dense>
      <v-list-group
      prepend-icon="palette"
      >
        <v-list-tile  slot="activator">
          <v-list-tile-content>
            <v-list-tile-title :class="[themecolor+'--text',shade4Text]">Theme</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toggleDark()">
          <v-list-tile-action>
            <v-avatar v-if="dark" size="20px" color="white" />
            <v-avatar v-else size="20px" color="black" />
          </v-list-tile-action>
          <v-list-tile-title
          :class="[themecolor+'--text',shade3Text]"
          v-if="dark"
          >
            Light
          </v-list-tile-title>
          <v-list-tile-title
          :class="[themecolor+'--text',shade2Text]"
          v-else
          >
            Dark
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile
        :class="[themecolor+'--text',shade2Text]"
        :key="color"
        v-for="color in colors"
        @click="changeTheme(color)"
        >
          <v-list-tile-action>
            <v-avatar size="20px" :color="color" />
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
import {bus} from '../main'
import theme from '../mixins/theme'

  export default {
      props: ['drawer'],
    data () {
      return {
        drawerState: true,
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
    mixins: [theme],
    
    methods: {
      changeTheme: function(color) {
        this.$emit('changeTheme',color);
        this.themecolor = color;
      },
      toggleDark: function() {
        bus.$emit('toggleDark');
        this.dark = !this.dark;
      }
    },
    created () {
      bus.$on('toggleDrawer',()=>{this.drawerState = !this.drawerState})
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

