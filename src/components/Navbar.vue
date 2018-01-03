<template>
    <v-toolbar dark :class="themecolor" extended fixed>
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
    <v-spacer />
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>color_lens</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-toolbar-item slot="extension">
             <v-container fluid>
        <v-layout row>
          <v-flex xs4>
          </v-flex>
          <v-flex xs2>
            <v-text-field
              name="level"
              label="Level"
              id="level"
              color="white"
            ></v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-text-field
              name="input-1"
              label="Class"
              id="testing"
              color="white"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar-item>
      <v-spacer slot="extension" />
    <v-toolbar-item slot="extension">
      <v-btn icon>
      <v-icon>expand_more</v-icon>
    </v-btn>
    </v-toolbar-item>
  </v-toolbar>
</template>

<script>
  export default {
    props: ['themecolor'],
    data () {
      return {
        interval: {},
        value: 0
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

<style scoped>

</style>


