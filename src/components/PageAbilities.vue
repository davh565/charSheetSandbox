
<template>
    <v-container fluid grid-list-md>
        <v-layout align-start row wrap>

          <!-- <v-flex xs12>
            <v-toolbar :class="[themecolor,shade3]">
            </v-toolbar> -->

          <!-- </v-flex> -->
            <v-flex xs6 >
                <v-layout row wrap>
                    <v-flex  >
                        <list-abilities :themecolor="themecolor" 
                        :title="'Human'" :items="race" >
                        </list-abilities>
                    </v-flex>
                    <v-flex  >
                        <list-abilities :themecolor="themecolor" 
                        :title="'Oracle'" :items="class1" >
                        </list-abilities>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import colorSet from 'vuetify/es5/util/colors'
import theme from '../mixins/theme'
import {bus} from '../main'
  export default {
    props: ['themecolor'],
    mixins:[theme],
    data () {
        return {
          dark:true,
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
        race: [
          {
            value: false,
            name: 'Bonus Feat',
            // bonus: '30',
            content: 'Humans select one extra feat at 1st level.'
          },
          {
            value: false,
            name: 'Skilled',
            // bonus: '30',
            content: ' Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.'
          },
          
        ],
        class1: [
          {
            value: false,
            name: 'Mystery',
            bonus: 'Intrigue',
            content: 'Each oracle draws upon a divine mystery to grant her spells and powers. This mystery also grants additional class skills and other special abilities. This mystery can represent a devotion to one ideal, prayers to deities that support the concept, or a natural calling to champion a cause. For example, an oracle with the waves mystery might have been born at sea and found a natural calling to worship the gods of the oceans, rivers, and lakes, be they benign or malevolent. Regardless of its source, the mystery manifests in a number of ways as the oracle gains levels. An oracle must pick one mystery upon taking her first level of oracle. Once made, this choice cannot be changed. At 2nd level, and every two levels thereafter, an oracle learns an additional spell derived from her mystery. These spells are in addition to the number of spells given on Table: Oracle Spells Known. They cannot be exchanged for different spells at higher levels.'
          },
          {
            value: false,
            name: "Oracle's Curse",
            bonus: '30',
            content: 'Humans have a base speed of 30 feet.'
          },
          {
            value: false,
            name: 'Revelations',
            // bonus: '30',
            content: 'Humans select one extra feat at 1st level.'
          },
          {
            value: false,
            name: 'Mystery Spells',
            // bonus: '30',
            content: ' Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.'
          },
          
        ]
        }
    }

  
}
</script>

<style>

</style>