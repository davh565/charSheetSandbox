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
        <td class="text-xs-center">{{ props.item.total }}</td>
        <!-- <td class="text-xs-center">{{ props.item.base }}</td> -->
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.base" /> </td>
        <td class="text-xs-center"><input size="2" v-bind:value="props.item.misc" /> </td>
        <!-- <td class="text-xs-center">{{ props.item.misc }}</td> -->
      </template>
    </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Saves',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Base', sortable: false, value: 'base' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            avatar: '/static/icons/fort.svg',
            name: 'Fortitude',
            total: 4,
            base: 4,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/ref.svg',
            name: 'Reflex',
            total: 2,
            base: 3,
            misc: -1
          },
          {
            value: false,
            avatar: '/static/icons/will.svg',
            name: 'Will',
            total: 2,
            base: 2,
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
