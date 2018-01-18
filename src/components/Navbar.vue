<template>
  <v-toolbar
    :color="themecolor"
    dark
    prominent
    fixed
    clipped-left
    app
    extended>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-container  fill-height class="pa-0" grid-list-md fluid v-bind="{ [`grid-list-sm`]: true }">
        <v-layout mr-2 mt-3>
          <v-avatar size="92px">
              <img src="/static/avatar.png" />
            </v-avatar>
        </v-layout>    
        <v-layout v-resize="onResize" row wrap justify-space-between>
          <v-flex sm9 md3>
              <v-text-field
              class="display-1 text--lighten-4"
              name="charName"
              label="Character Name"
              id="charName"
              :color="themecolor"
              :value="characterData[0].characterName"
              hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>600" sm3 md2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="alignment"
            label="Alignment"
            id="alignment"
            :value="characterData[0].alignment"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2 lg1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="deity"
            label="Deity"
            id="deity"
            :value="characterData[0].deity"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="homeland"
            label="Homeland"
            id="homeland"
            :value="characterData[0].homeland"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2 lg1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="gender"
            label="Gender"
            id="gender"
            :value="characterData[0].gender"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="age"
            label="Age"
            id="age"
            :value="characterData[0].age"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="Hair"
            label="Hair"
            id="hair"
            :value="characterData[0].hair"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="eyes"
            label="Eyes"
            id="eyes"
            :value="characterData[0].eyes"
            hide-details />
          </v-flex>
          <v-flex xs2 md1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="level"
            label="Level"
            id="level"
            :value="characterData[0].level"
            hide-details />
          </v-flex>
          <v-flex xs5 md3 lg2 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="race"
            label="Race"
            id="race"
            :value="characterData[0].race"
            hide-details />
          </v-flex>
          <v-flex xs5 md3 lg2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="class"
            label="Class"
            id="class"
            :value="characterData[0].class"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md3 lg2 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="playerName"
            label="Player Name"
            id="playerName"
            :value="characterData[0].playerName"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="size"
            label="Size"
            id="size"
            :value="characterData[0].size"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="height"
            label="Height"
            id="height"
            :value="characterData[0].height"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            name="weight"
            label="Weight"
            id="weight"
            :value="characterData[0].weight"
            hide-details />
          </v-flex>
        </v-layout>
    <v-flex xs1 slot="extension" class="hidden-lg-and-up text-xs-right">
      <v-btn icon slot>
      <v-icon>expand_more</v-icon>
    </v-btn>
    </v-flex>
      </v-container>
    

    </v-toolbar>
</template>


<script>
import colorSet from 'vuetify/es5/util/colors'
import db from './firebaseInit'

  export default {
    props: ['themecolor'],
    data () {
      return {
        characterData: [],
        windowSize: {
          x: 0,
          y: 0
        },
        colorSet: colorSet,
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
    created () {
      db.collection('characters').get().then
      (querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'firebaseId': doc.id,
            'age': doc.data().age,
            'alignment': doc.data().alignment,
            'characterId': doc.data().characterId,
            'characterName': doc.data().characterName,
            'class': doc.data().class,
            'deity': doc.data().deity,
            'eyes': doc.data().eyes,
            'gender': doc.data().gender,
            'hair': doc.data().hair,
            'height': doc.data().height,
            'homeland': doc.data().homeland,
            'level': doc.data().level,
            'playerName': doc.data().playerName,
            'race': doc.data().race,
            'size': doc.data().size,
            'weight': doc.data().weight,
          }
          this.characterData.push(data)
        })
      })
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
        // console.log(this.characterData[0].firebaseId)
         this.$emit('toggleDrawer')
      },
      changeTheme: function(color) {
        this.themecolor = color;
      },
       onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.onResize(),
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


