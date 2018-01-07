<template>
  <v-app dark>
 <div>
     <navbar :themecolor="themecolor" v-on:changeTheme="changeTheme($event)"/>
<v-container fluid id="content">
  <transition name='fade'>
      <router-view :themecolor="themecolor"
        transition="slide-x-transition" />
    </transition>
    </v-container>
  </div>
    
  <v-footer app :color="themecolor" class="elevation-24" dark></v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        themecolor: 'blue',
        
      }
    },
    methods: {
      changeTheme: function(color) {
        this.themecolor = color;

      }
    },
  }
</script>

<style>
::selection{
	background: rgba(0, 0, 0, .1);;
	color:white;
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
}
input:hover {
   background-color: rgba(255, 255, 255, .3);
   outline:none;
}

#charName {
  font-size: 90%;
  font-variant: small-caps;
  text-align: left;
}
</style>

