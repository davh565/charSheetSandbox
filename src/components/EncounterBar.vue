<template>
     <v-navigation-drawer
        :class="[themecolor, shade5]"
    app
    right
    clipped
    fixed
    :light="!dark"
    >
         <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title" @click="">
                  <v-badge bottom left overlap>
      <span slot="badge">{{20-index}}</span>
              <v-list-tile-avatar>
                
                                <simple-svg
                  v-if="item.avatar.endsWith('.svg')"
                  :filepath="item.avatar"
                  :fill="svgShade"
                  :stroke="svgShade"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
                  <img v-else :src="item.avatar">

              </v-list-tile-avatar>
                  </v-badge>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
            <v-btn :color="themecolor">
            Turn Complete

        </v-btn>

    </v-navigation-drawer>
</template>

<script>
import colorSet from 'vuetify/es5/util/colors'
import {bus} from '../main'
import theme from '../mixins/theme'
export default {
    props: ['themecolor'],
    mixins: [theme],
    data () {
        return {
            dark: true,
            colorSet: colorSet,

             items: [
          { header: 'Encounter' },
          { avatar: '/static/avatar.png', title: 'CHARNAME', subtitle: "<span class='text--primary'>28/49HP</span> &mdash;  < AC: 19 > FORT: +4" },
          { divider: true, inset: true },
          { avatar: '/static/icons/zombie.svg', title: 'Shambling Zombie', subtitle: "<span class='text--primary'>Undead</span> &mdash; Lightly Wounded" },
          { divider: true, inset: true },
          { avatar: '/static/icons/zombie2.svg', title: 'Zombie Torso', subtitle: "<span class='text--primary'>Undead</span> &mdash; Near Death" },
          { divider: true, inset: true },
          { avatar: '/static/icons/Karghothor.svg', title: 'Karghothor the Meanie', subtitle: "<span class='text--primary'>Fiend</span> &mdash; Uninjured" },
          { divider: true, inset: true },
        ],
        }
    },
    created () {
      bus.$on('toggleDark',()=>{this.dark = !this.dark})
    },
}
</script>
