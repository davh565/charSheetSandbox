<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      fixed
      clipped
      dark
      v-model="drawer"
      app
      :class="themecolor"
      class="lighten-1"
    
      
    >
    <v-toolbar flat height='64px' :class="themecolor" class="darken-1 transparent">
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
    </v-toolbar>
 <v-divider></v-divider>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.name" :to="item.route"
      router>
          <v-list-tile-action>
            <v-avatar tile size="40%">
          <img :src="item.avatar" />
        </v-avatar> 

          </v-list-tile-action>
           <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
      </v-list>
 <v-divider></v-divider>


 <v-list>
          <v-list-group
          prepend-icon="palette">
             <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>Theme</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="dark=!dark">
              <v-list-tile-action>
                <v-avatar v-if="dark" size="20px" color="white"></v-avatar>
                <v-avatar v-else size="20px" color="black"></v-avatar>
              </v-list-tile-action>
                <v-list-tile-title v-if="dark">Light</v-list-tile-title>
                <v-list-tile-title v-else>Dark</v-list-tile-title>
            </v-list-tile>
 <v-divider></v-divider>
            <v-list-tile v-for="color in colors"
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

    <v-toolbar
    :color="themecolor"
    dark
    dense
    fixed
    clipped-left
    app
    extended>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>


    <v-flex xs8>
    <v-toolbar-title class="white--text display-1">
      <v-text-field
      class="display-1"
      name="charName"
      label="Character Name"
      id="charName"
      color="white"
      hide-details />
    </v-toolbar-title>
    </v-flex>


    <v-flex xs1 slot='extension'>
      <v-text-field
      name="level"
      label="Level"
      id="level"
      color="white" 
      hide-details />
    </v-flex>
    <v-flex xs2 slot='extension'>
      <v-text-field
      name="race"
      label="Race"
      id="race"
      color="white"
      hide-details />
    </v-flex>
    <v-flex xs2 slot='extension'>
      <v-text-field
      name="class"
      label="Class"
      id="class"
      color="white"
      hide-details />
    </v-flex>
    <v-flex xs3 slot='extension'>
      <v-text-field
      name="playerName"
      label="Player Name"
      id="playerName"
      color="white"
      hide-details />
    </v-flex>

<v-spacer />
      <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    </v-toolbar>
     <!-- <navbar :themecolor="themecolor" v-on:changeTheme="changeTheme($event)"/> -->
   <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
        <!-- <transition name="fade"> -->
      <router-view :themecolor="themecolor" />
    <!-- </transition> -->
        </v-layout>
      </v-container>
    </v-content>

    
  <v-footer app :color="themecolor" class="elevation-24" dark></v-footer>

  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        themecolor: 'blue-grey',
        drawer: null,
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
                avatar: '/static/icons/stats.svg',
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
    methods: {
      changeTheme: function(color) {
        this.themecolor = color;

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
*{
  font-family: serif;
}
::selection{
	background: rgba(0, 0, 0, .1);;
	color:white;
}



.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

#inputcell {
  padding: 0%;
}
#content {
  padding-top: 112px;
  padding-bottom: 36px;
}
td>input {
  width: 100%;
  height: 100%;
  text-align: center;
  /* margin: 0%; */
  /* background-color: rgba(0, 0, 0, 0.1) */
  background-color: rgba(127, 127, 127, 0.1)
}
input:hover {
   background-color: rgba(127, 127, 127, .5);
   outline:none;
}

#charName {
  font-size: 90%;
  font-variant: small-caps;
  text-align: left;
}
</style>

