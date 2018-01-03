<template>
  <v-app >
    <navbar :themecolor="themecolor"/>
    
    <div>
    <v-tabs v-model="active">
      <v-tabs-bar :class="themecolor" class="lighten-2" dark>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          Item {{ tab.slice(-1) }}
        </v-tabs-item>
        <v-tabs-slider color="white"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          v-for="tab in tabs"
          :key="tab"
          :id="tab"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click.native="next">next tab</v-btn>
    </div>
  </div>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex sm6>
          <stat-table :themecolor="themecolor" />
        </v-flex>
        <v-flex sm6>
          <saves-table />
        </v-flex>
        <v-flex sm12>
          <defenses-table />
        </v-flex>
        <v-flex sm6>
          <combat-table />
        </v-flex>
        <v-flex sm6>
          <maneuvers-table />
        </v-flex>
        <v-flex sm12>
          <skill-table />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        themecolor: 'blue',
        tabs: ['tab-1', 'tab-2', 'tab-3'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
      }
    }
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
input {
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

