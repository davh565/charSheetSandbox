<template>
  <v-app dark>
    <!-- <navbar :themecolor="themecolor"/> -->
    <!-- <v-toolbar :themecolor="themecolor" fixed app>

    </v-toolbar> -->
  <div app>
    <v-toolbar app :color="themecolor" dark tabs>
      <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-progress-circular
        v-bind:size="56"
        v-bind:width="8"
        v-bind:rotate="360"
        v-bind:value="value"
        color="red"
      >
      <v-avatar size="48px">
        <img src="/static/avatar.png" />
      </v-avatar>
    </v-progress-circular>

    
    <v-toolbar-title class="white--text display-1">
        <v-text-field
              class="display-1"
              name="name"
              label="Character Name"
              id="charName"
              color="white"
            ></v-text-field>
        </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-tabs
      
        centered
        color="cyan"
        slot="extension"
        slider-color="yellow"
        v-model="model"
      >
        <v-tab
          v-for="i in 3"
          :key="i"
          :href="`#tab-${i}`"
        >
          Item {{ i }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :id="`tab-${i}`"
      >
        <v-card flat app>
          <v-card-text app v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>

    <v-container fluid>
      <router-view :themecolor="themecolor"></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        themecolor: 'blue',
        tabs: ['tab-1', 'tab-2', 'tab-3'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        interval: {},
        value: 0
      }
    },
    methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
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

