<template>

<v-data-table
    v-model="selected"
    :headers="headers"
    :items="items"
    select-all
    :pagination.sync="pagination"
    item-key="name"
    class="elevation-1"
  >
    <template slot="headers" slot-scope="props">
      <tr>
        <th :class="[themecolor, themecolor+'--text',shade3,shade5Text]"
        class="px-1 subheading">
          <v-checkbox
          
            primary
            hide-details
            @click.native="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable',
                    pagination.descending ? 'desc' : 'asc',
                    header.value === pagination.sortBy ? 'active' : '',
                    themecolor,
                    themecolor+'--text',
                    shade3,
                    shade5Text]"
          class="px-1 subheading"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            primary
            hide-details
            :input-value="props.selected"
          ></v-checkbox>
        </td>
        <td :class="[themecolor+'--text',shade5,shade4Text]" class="px-2">{{ props.item.name }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[themecolor+'--text',shade5,shade4Text]">{{ props.item.enchant }}</td>
        <td :class="[themecolor, themecolor+'--text',shade5,shade5Text]"
        class="px-0  title text-xs-center">{{ props.item.attack }}</td>
        <td :class="[themecolor, themecolor+'--text',shade4,shade5Text]"
        class="px-0  subheading text-xs-center">{{ props.item.damage }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[ themecolor+'--text',shade5,shade4Text]">{{ props.item.critical }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[ themecolor+'--text',shade5,shade4Text]">{{ props.item.range }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[ themecolor+'--text',shade5,shade4Text]">{{ props.item.type }}</td>
        <td class="px-0 body-2 text-xs-center" :class="[ themecolor+'--text',shade5,shade4Text]">{{ props.item.special}}</td>
      </tr>
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
        pagination: {
        sortBy: 'name'
      },
      selected: [],
        headers: [
                      {
            text: 'Melee',
            align: 'left',
            sortable: false,

            value: 'name'
          },
          { text: 'Enchant', sortable: false, value: 'enchant' },
          { text: 'Attack', sortable: false, value: 'attack' },
          { text: 'Damage', sortable: false, value: 'damage' },
          { text: 'Critical', sortable: false, value: 'critical' },
          { text: 'Range', sortable: false, value: 'range' },
          { text: 'Type', sortable: false, value: 'type' },
          { text: 'Special', sortable: false, value: 'special' },
        ],
        items: [
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Thing of Something',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Sword of Swordiness',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Bow of Bows',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Devilish Dagger',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Holy Hand Grenade of Antioch',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'ShortSword',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Throwing Knife',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
                   {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Throwing Knife',
            enchant: '+4',
            attack: '+9',
            damage: '1d4+5',
            critical: '19-20 / x2',
            range: '10 ft',
            type: 'P or S',
            special: 'light',
          },
        ]
    } 
  },
     methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
     }
}
</script>
<style scoped>

</style>
