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
        <th>
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
                    pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '',themecolor]"
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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right" :class="[shade2]">{{ props.item.enchant }}</td>
        <td class="text-xs-right">{{ props.item.attack }}</td>
        <td class="text-xs-right">{{ props.item.damage }}</td>
        <td class="text-xs-right">{{ props.item.critical }}</td>
        <td class="text-xs-right">{{ props.item.range }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.special}}</td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
import {bus} from '../main'
import theme from '../mixins/theme'

export default {
        mixins:[theme],
        props: ['themecolor'],
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
