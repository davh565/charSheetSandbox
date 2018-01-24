<template>
  <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        
        class="elevation-1"
      >
      <template slot="headers" slot-scope="props">
        <th v-for="header in props.headers" 
            :key="header.text"
            :class="[themecolor, themecolor+'--text',shade4,shade5Text]"
            class="px-1 subheading">
          <span v-html="header.text"></span>
        </th>
      </template>
      <template slot="items" slot-scope="props">
        <td
        :class="[themecolor, themecolor+'--text',shade5,shade5Text]"
        class=" px-3 body-2  text-xs-center text-sm-left">
            <v-tooltip bottom class="hidden-sm-and-up">
              <span slot="activator">
                <v-avatar tile class="px-2">
                  <simple-svg
                  :filepath="props.item.avatar"
                  :fill="svgShade"
                  :stroke="svgShade"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
                </v-avatar>
              </span>
                <span>{{ props.item.name }}</span>
            </v-tooltip>
              <span class="hidden-xs-only">
                <v-avatar tile class="px-2">
                  <simple-svg
                  :filepath="props.item.avatar"
                  :fill="svgShade"
                  :stroke="svgShade"
                  :width="'32px'"
                  :height="'32px'"
                  :id="'custom-id'"
                  @ready=""
                  />
                </v-avatar>
                <span :class="[themecolor+'--text',shade3,shade5Text]" class="px-2">{{ props.item.name }}</span>
              </span>
        </td>
        <td 
        :class="[themecolor, themecolor+'--text',shade3,shade5Text]"
        class="px-0  title text-xs-center">
        {{ props.item.total }}
        </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]"><input size="2" v-bind:value="props.item.statBonus" /> </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]"><input size="2" v-bind:value="props.item.rank" /> </td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]">{{ props.item.classBonus }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]">{{ props.item.classSkill }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]">{{ props.item.misc }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor, themecolor+'--text',shade5,shade5Text]"><input size="2" v-bind:value="props.item.statType" /> </td>
      </template>
    </v-data-table>
</template>

<script>
import colorSet from 'vuetify/es5/util/colors'
import theme from '../mixins/theme'
import {bus} from '../main'
  export default {
    props: ['themecolor'],

    mixins:[theme],
     created () {
      bus.$on('toggleDark',()=>{this.dark = !this.dark})
     },
    data () {
      
      return {
        dark: true,
        colorSet: colorSet,
        headers: [
          {
            text: 'Skills',
            align: 'left',
            sortable: false,

            value: 'name'
          },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Stat', sortable: false, value: 'statBonus' },
          { text: 'Rank', sortable: false, value: 'rank' },
          { text: 'Misc', sortable: false, value: 'misc' },
          { text: 'Class<br />Bonus', sortable: false, value: 'classBonus' },
          { text: 'Class<br />Skill', sortable: false, value: 'classSkill' },
          { text: 'Ability<br />Score', sortable: false, value: 'statType' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Acrobatics',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'DEX',
          },
          {
            value: false,
            avatar: '/static/icons/appraise.svg',
            name: 'Appraise',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'INT',
          },
          {
            value: false,
            avatar: '/static/icons/bluff.svg',
            name: 'Bluff',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/climb.svg',
            name: 'Climb',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'STR',
          },
          {
            value: false,
            avatar: '/static/icons/craft.svg',
            name: 'Craft',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'INT',
          },
          {
            value: false,
            avatar: '/static/icons/diplomacy.svg',
            name: 'Diplomacy',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/disableDevice.svg',
            name: 'Disable Device',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/disguise.svg',
            name: 'Disguise',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/escapeArtist.svg',
            name: 'Escape Artist',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/fly.svg',
            name: 'Fly',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/handleAnimal.svg',
            name: 'Handle Animal',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/heal.svg',
            name: 'Heal',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/intimidate.svg',
            name: 'Intimidate',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/knowledge.svg',
            name: 'Knowledge:',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'DEX',
          },
          {
            value: false,
            avatar: '/static/icons/arcana.svg',
            name: 'Arcana',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'INT',
          },
          {
            value: false,
            avatar: '/static/icons/dungeoneering.svg',
            name: 'Dungeoneering',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/engineering.svg',
            name: 'Engineering',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'STR',
          },
          {
            value: false,
            avatar: '/static/icons/geography.svg',
            name: 'Geography',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'INT',
          },
          {
            value: false,
            avatar: '/static/icons/history.svg',
            name: 'History',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/local.svg',
            name: 'Local',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/nature.svg',
            name: 'Nature',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/nobility.svg',
            name: 'Nobility',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/planes.svg',
            name: 'Planes',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/religion.svg',
            name: 'Religion',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/linguistics.svg',
            name: 'Linguistics',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/perception.svg',
            name: 'Perception',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/perform.svg',
            name: 'Perform:',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'STR',
          },
          {
            value: false,
            avatar: '/static/icons/profession.svg',
            name: 'Profession:',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'INT',
          },
          {
            value: false,
            avatar: '/static/icons/ride.svg',
            name: 'Ride',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/senseMotive.svg',
            name: 'Sense Motive',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/slightOfHand.svg',
            name: 'Slight Of Hand',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/spellcraft.svg',
            name: 'Spellcraft',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/stealth.svg',
            name: 'Stealth',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/survival.svg',
            name: 'Survival',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/swim.svg',
            name: 'Swim',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
          {
            value: false,
            avatar: '/static/icons/useMagicDevice.svg',
            name: 'Use Magic Device',
            total: '+4',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
