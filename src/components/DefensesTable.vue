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
            <v-avatar tile size="2.5em">
                <img :src="props.item.avatar" />
            </v-avatar>
            {{ props.item.name }}
        </td>
        <td class="text-xs-center">{{ props.item.total }}</td>
        <td class="text-xs-center">{{ props.item.armor }}</td>
        <td class="text-xs-center">{{ props.item.shield }}</td>
        <td class="text-xs-center">{{ props.item.dex }}</td>
        <td class="text-xs-center">{{ props.item.size }}</td>
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.deflect" /> </td>
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.dodge" /> </td>
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.nat" /> </td>
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
            text: 'Defenses',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Armor', sortable: false, value: 'armor' },
          { text: 'Shield', sortable: false, value: 'shield' },
          { text: 'Dex', sortable: false, value: 'dex' },
          { text: 'Size', sortable: false, value: 'size' },
          { text: 'Deflect', sortable: false, value: 'deflect' },
          { text: 'Dodge', sortable: false, value: 'dodge' },
          { text: 'Natural Armor', sortable: false, value: 'nat' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/ac.svg',
            name: 'Armor Class',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acTouch.svg',
            name: 'Touch AC',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acFf.svg',
            name: 'Flat-Footed AC',
            total: 4,
            armor: 4,
            shield: 4,
            dex: 0,
            size: 4,
            deflect: 4,
            dodge: 0,
            nat: 4,
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
