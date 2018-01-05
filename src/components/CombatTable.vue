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
            class="blue white--text">
          {{header.text}}
        </th>
      </template>
      <template slot="items" slot-scope="props">
        <td class="blue lighten-2 white--text text-xs-left">
            <v-avatar tile size="40%">
                <img :src="props.item.avatar" />
            </v-avatar>
            {{ props.item.name }}
        </td>
        <td class="text-xs-center">{{ props.item.attack }}</td>
        <td class="text-xs-center">{{ props.item.stat }}</td>
        <td class="text-xs-center">{{ props.item.size }}</td>
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.misc" /> </td>
      </template>
    </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Combat',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Attack', sortable: false, value: 'attack' },
          { text: 'Stat', sortable: false, value: 'stat' },
          { text: 'Size', sortable: false, value: 'size' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/melee.svg',
            name: 'Melee',
            attack: 0,
            stat: 10,
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/finesse.svg',
            name: 'Finesse',
            attack: 0,
            stat: 10,
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/ranged.svg',
            name: 'Ranged',
            attack: 0,
            stat: 10,
            size: 10,
            misc: 0
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
