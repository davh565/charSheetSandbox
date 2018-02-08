<template>
  <v-app :dark="dark">


    <drawer
    v-on:changeTheme="changeTheme"
    v-on:toggleDark="toggleDark" 
    />

    <navbar
    :themecolor="themecolor"
    />
   <v-content class="scroll-y">
      <v-container :class="[themecolor+' lighten-2']" fluid fill-height>
        <v-layout justify-center align-center>
          <router-view :themecolor="themecolor" />
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-btn
            :color="themecolor"
            class="mb-4"
            dark
            fab
            hover
            bottom
            fixed
            right
            
            @click="encounterBar = !encounterBar"
        > -->
    <!-- <encounter-bar
    :themecolor="themecolor"
    :encounterBar="encounterBar"
     /> -->
  <v-footer
  :color="themecolor"
  app
  class="elevation-24"
  light
  />
  </v-app>
</template>

<script>
import {bus} from './main'
import theme from './mixins/theme'


  export default {
    data () {
      return {
        encounterBar: null,
        themecolor: 'brown',
        dark: true,
      }
    },
    created () {
    bus.$on('toggleDark',()=>{this.dark = !this.dark})
    },
    methods: {
      toggleDark: function() {
        this.dark = !this.dark;
      },
      changeTheme: function(color) {
        this.themecolor = color;

      }
    },
    mixins: [theme]
  }
</script>

<style>
*{
  font-family: 'Cinzel', serif;
  font-weight: 600;
  
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
  background-color: rgba(255, 255, 255, 0.05)
}
input:hover {
   background-color: rgba(255, 255, 255, .2);
   outline:none;
}

#charName {
  font-size: 90%;
  font-variant: small-caps;
  text-align: left;
}


.input-group--text-field {
  color: blueviolet;
}

/* width */
::-webkit-scrollbar {
    width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #263238; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #607D8B; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #455A64; 
}
</style>

