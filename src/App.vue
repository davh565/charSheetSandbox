<template>
  <v-app :dark="dark">
    <drawer
    v-on:changeTheme="changeTheme"
    v-on:toggleDark="toggleDark" 
    v-bind:drawer="drawer" />

    <navbar
    v-on:toggleDrawer="toggleDrawer"
    :themecolor="themecolor" />

   <v-content 
   :class="themecolor"
   class="darken-4">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
      <router-view :themecolor="themecolor" />
        </v-layout>
      </v-container>
    </v-content>

  <v-footer app :color="themecolor" class="elevation-24" dark></v-footer>
  </v-app>
</template>

<script>
import colorSet from 'vuetify/es5/util/colors'

  export default {
    data () {
      return {
        colorSet: colorSet,
        themecolor: 'blue-grey',
        drawer: null,
        interval: {},
        dark: true,
        value: 0,
        
        
      }
    },
    computed: {
      textColorLight: function(){
        return this.themecolor+"--text text--lighten-4"
      },
      textColorDark: function(){
        return this.themecolor+"--text text--darken-4"
      },
      svgColor: function(){
        return eval('this.colorSet.'+this.camelCase+".darken4")
      },
      camelCase: function() {
            return this._.camelCase(this.themecolor)
        }
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      toggleDark: function() {
        this.dark = !this.dark;
      },
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
</style>

