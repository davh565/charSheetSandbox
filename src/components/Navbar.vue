<template>
  <v-toolbar app :color="themecolor" dark tabs>

    <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-progress-circular
      v-bind:size="56"
      v-bind:width="8"
      v-bind:rotate="360"
      v-bind:value="value"
      color="red">
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
      color="white" />
    </v-toolbar-title>
    <v-flex xs2>
      <v-text-field
      name="level"
      label="Level"
      id="level"
      color="white" />
    </v-flex>
    <v-flex xs4>
      <v-text-field
      name="input-1"
      label="Class"
      id="testing"
      color="white" />
    </v-flex>

    <v-spacer />

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-menu offset-y>
      <v-btn icon slot="activator">
        <v-icon>color_lens</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="color in colors" :key="color" @click="changeTheme(color)">
          <v-list-tile-title>
            <v-avatar size="20px" :color="color">
            </v-avatar>
            <!-- {{color}} -->
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-tabs
    :color="themecolor"
    slot="extension"
    v-model="tab"
    align-with-title>
      <v-tabs-slider color="white" />
      <v-tab
      :to="item.route"
      router
      v-for="(item, i) in items"
      :key="i"
      :href="'#tab-' + (i + 1)" >
        <v-avatar tile size="40%">
          <img :src="item.avatar" />
        </v-avatar> 
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
  export default {
    props: ['themecolor'],
    data () {
      return {
        interval: {},
        value: 0,
        color: 'red',
        colors: ['red', 'pink', 'purple',
                  'deep-purple', 'indigo', 'blue-grey',
                  'blue','light-blue','cyan',
                  'teal', 'green', 'light-green',
                  'lime','yellow','amber','orange',
                  'deep-orange', 'brown'],
        active: null,
        tab: null,
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
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        interval: {},
        value: 0
      }
    },
    methods: {
    changeTheme (color){
      this.$emit('changeTheme',color)
    },
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
    },
  }
</script>

<style scoped>

</style>


