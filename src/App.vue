<template>
  <v-app :dark="dark">

    <navbar
    :themecolor="themecolor"
    />

    <drawer
    v-on:changeTheme="changeTheme"
    v-on:toggleDark="toggleDark" 
    />

   <v-content >
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view :themecolor="themecolor" />
        </v-layout>
      </v-container>
    </v-content>
    <encounter-bar
    :themecolor="themecolor"
     />
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
        themecolor: 'blue-grey',
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

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	/* background-color: #F5F5F5; */
}
::-webkit-scrollbar
{
	width: 12px;
	background-color: rgba(255, 255, 255, .2);
}
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgba(255, 255, 255, .5);
}
.input-group--text-field {
  color: blueviolet;
}
</style>

