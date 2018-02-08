<template>
  <v-toolbar
    :color="themecolor"
    :class="shade3"
    app
    clipped-left
    clipped-right
    
    fixed
    prominent
    >
    
      <!-- <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon> -->
      <v-container  fill-height class="pa-0" grid-list-md fluid v-bind="{ [`grid-list-sm`]: true }">
        <!-- <v-flex xs12 mt-4 pt-5>
             <v-progress-linear indeterminate></v-progress-linear>
          </v-flex>  -->
        <v-layout mx-0 mt-0>
        <v-btn :class="[themecolor,shade1]" mt-0 fab absolute small>  <v-icon>menu</v-icon> </v-btn>
          <v-avatar :class="[themecolor,shade3]" size="112px">
            <v-badge left color="purple" overlap>
          <v-avatar  size="96px">
              <img src="/static/avatar.png" />
            </v-avatar>
            </v-badge>
            </v-avatar>
        </v-layout>   
        <v-layout class="px-2" v-resize="onResize" row wrap justify-space-between>
          <v-flex sm9 md3>
              <v-text-field
              v-on:blur="testfunc"
              class="display-1"
              name="charName"
              label="Character Name"
              id="charName"
              :light="!dark"
              :color="themecolor"
              :class="[themecolor+'--text',shade5Text]"
              
              hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>600" sm3 md2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="alignment"
            label="Alignment"
            id="alignment"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2 lg1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="deity"
            label="Deity"
            id="deity"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="homeland"
            label="Homeland"
            id="homeland"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md2 lg1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="gender"
            label="Gender"
            id="gender"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="age"
            label="Age"
            id="age"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="Hair"
            label="Hair"
            id="hair"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="eyes"
            label="Eyes"
            id="eyes"
            :light="!dark"
            hide-details />
          </v-flex>
          
          <!-- <v-flex xs2 md1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="level"
            label="Level"
            id="level"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex xs5 md3 lg2 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="race"
            label="Race"
            id="race"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex xs5 md3 lg2>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="class"
            label="Class"
            id="class"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md3 lg2 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="playerName"
            label="Player Name"
            id="playerName"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>960" md1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="size"
            label="Size"
            id="size"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1 >
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="height"
            label="Height"
            id="height"
            :light="!dark"
            hide-details />
          </v-flex>
          <v-flex v-if="windowSize.x>1264" xs1>
            <v-text-field
            class="text--lighten-4"
            :color="themecolor"
            :class="[themecolor+'--text',shade5Text]"
            name="weight"
            label="Weight"
            id="weight"
            :light="!dark"
            hide-details />
          </v-flex> -->
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
import {bus} from '../main'
import theme from '../mixins/theme'

  export default {
    props: ['themecolor'],
    data () {
      return {
        testval: 'resr',
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
      bus.$on('toggleDark',()=>{this.dark = !this.dark})
      // console.log(this);
      // db.collection("characters").doc("6CParka0uOfCAiwqmvIK")
      //   .onSnapshot(function(doc) {
      //       console.log("Current data: ", doc && doc.data());
      //   });

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
    mixins:[theme],
  
    methods: {
      testfunc() {
        // console.log(this.characterData[0].characterName)
        db.collection("characters").doc("6CParka0uOfCAiwqmvIK").update({
            "characterName": this.characterData[0].characterName,
        })
        .then(function() {
            console.log("Document successfully updated!");
        });
      },
      toggleDrawer() {
        // console.log(this.characterData[0].firebaseId)
         bus.$emit('toggleDrawer')
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


