<template>
  <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        dark
        class="elevation-1"
      >
      <template slot="headers" slot-scope="props">
        <th v-for="header in props.headers" 
            :key="header.text" 
            :class="themecolor"
            class="subheading white--text">
            {{header.text}}
        </th>
      </template>
      <template slot="items" slot-scope="props">
        <td :class="themecolor"
            class="lighten-2 body-2 white--text">
            <v-avatar tile size="40%">
                <img :src="props.item.avatar" />
            </v-avatar>
            {{ props.item.name }}
        </td>
        <td :class="themecolor + ' ' + themeText"
            class="headline accent-4 text--lighten-4 text-xs-center">{{ props.item.bonus }}</td>
        <td :class="themecolor + ' ' + themeText"
            class="lighten-3 text--darken-2 text-xs-center">{{ props.item.total }}</td>
        <!-- <td class="text-xs-center">{{ props.item.base }}</td> -->
        <td :class="themecolor + ' ' + themeText" 
            class="lighten-4  text--darken-2 text-xs-center"
            id="inputcell">
            <input size="2" 
                   v-bind:value="props.item.base"/>
        </td>
        <td :class="themecolor + ' ' + themeText"
            class="lighten-4 text--darken-2 text-xs-center"
            id="inputcell">
            <input size="2" v-bind:value="props.item.misc" />
        </td>
        <!-- <td class="text-xs-center">{{ props.item.misc }}</td> -->
      </template>
    </v-data-table>
</template>

<script>
  export default {
    props: ['themecolor'],
    data () {
      return {
        headers: [
          {
            text: 'Stats',
            align: 'left',
            sortable: false,
            color: 'primary',
            value: 'name'
          },
          { text: 'Bonus', sortable: false, value: 'bonus' },
          { text: 'Total', sortable: false, value: 'total' },
          { text: 'Base', sortable: false, value: 'base' },
          { text: 'Misc', sortable: false, value: 'misc' },
        ],
        items: [
          {
            value: false,
            name: 'Strength',
            avatar: '/static/icons/str.svg',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/dex.svg',
            name: 'Dexterity',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cons.svg',
            name: 'Constitution',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/int.svg',
            name: 'Intelligence',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/wis.svg',
            name: 'Wisdom',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cha.svg',
            name: 'Charisma',
            bonus: '+0',
            total: 10,
            base: 10,
            misc: 0
          }
        ]
      }
    },
    computed: {
      themeText: function() {
        return this.themecolor+'--text'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr>* {
  font-variant: small-caps;
}
</style>

