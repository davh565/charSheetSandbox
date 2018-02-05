
<template>
    <v-container fluid grid-list-sm >
        <v-layout align-start row wrap>
                    <v-flex  md4 lg3>
                        <table-stats :themecolor="themecolor" 
                        :title="'Stats'" :items="stats" >
                        <table-stats-full :themecolor="themecolor" />
                        </table-stats>
                    </v-flex>
                    <v-flex  md4 lg3>
                        <table-stats :themecolor="themecolor" 
                        :title="'Combat'" :items="combat" >
                        </table-stats>
                    </v-flex>
            <v-flex  md4 lg3>
                <table-stats :themecolor="themecolor" 
                :title="'Skills'" :items="skills" >
                <skill-table :themecolor="themecolor" />
                </table-stats>
            </v-flex>
        </v-layout>
        <v-layout align-start row wrap>

          <!-- <v-flex xs12>
            <v-toolbar :class="[themecolor,shade3]">
            </v-toolbar> -->

                    <v-flex  md4 lg3  >
                        <table-stats :themecolor="themecolor" 
                        :title="'Saves'" :items="saves" >
                            <table-saves-full :themecolor="themecolor" />    
                            </table-stats>
                    </v-flex>
                    <v-flex  md4 lg3   >
                        <table-stats :themecolor="themecolor" 
                        :title="'Defenses'" :items="defenses" >
                        </table-stats>
                    </v-flex>
            <!-- <v-flex xs12>
                <table-stats :themecolor="themecolor" 
                :title="'Misc'" :items="other" >
                </table-stats>
            </v-flex> -->
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
        stats: [
          {
            value: false,
            name: 'STR',
            avatar: '/static/icons/str.svg',
            bonus: '+2',
            total: 14,
            base: 14,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/dex.svg',
            name: 'DEX',
            bonus: '+4',
            total: 18,
            base: 18,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cons.svg',
            name: 'CON',
            bonus: '+3',
            total: 16,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/int.svg',
            name: 'INT',
            bonus: '+3',
            total: 16,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/wis.svg',
            name: 'WIS',
            bonus: '+1',
            total: 12,
            base: 12,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cha.svg',
            name: 'CHA',
            bonus: '+5',
            total: 20,
            base: 20,
            misc: 0
          }
        ],
        saves: [
          {
            value: false,
            avatar: '/static/icons/fort.svg',
            name: 'FORT',
            total: '+5',
            stat: 3,
            base: 2,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/ref.svg',
            name: 'REF',
            total: '+9',
            stat: 4,
            base: 5,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/will.svg',
            name: 'WILL',
            total: '+6',
            stat: 1,
            base: 5,
            misc: 0
          }
        ],
        defenses: [
          {
            value: false,
            avatar: '/static/icons/ac.svg',
            name: 'Armor Class',
            total: 20,
            armor: 5,
            shield: 0,
            dex: 4,
            size: 0,
            deflect: 0,
            dodge: 0,
            nat: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acTouch.svg',
            name: 'Touch AC',
            total: 15,
            armor: 0,
            shield: 0,
            dex: 4,
            size: 0,
            deflect: 0,
            dodge: 0,
            nat: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/acFf.svg',
            name: 'Flat-Footed AC',
            total: 16,
            armor: 5,
            shield: 0,
            dex: 0,
            size: 0,
            deflect: 0,
            dodge: 0,
            nat: 0,
            misc: 0
          }
        ],
        combat: [
          {
            value: false,
            avatar: '/static/icons/melee.svg',
            name: 'Melee',
            total: '+7',
            bab: 5,
            stat: 0,
            size: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/finesse.svg',
            name: 'Finesse',
            total: '+9',
            bab: 5,
            stat: 0,
            size: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/ranged.svg',
            name: 'Ranged',
            total: '+9',
            bab: 5,
            stat: 0,
            size: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmb.svg',
            name: 'CMB',
            total: 7,
            stat: 2,
            bab: '+5',
            size: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmbFin.svg',
            name: 'CMB (Finesse)',
            total: 11,
            stat: 4,
            bab: '+5',
            size: 0,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmd.svg',
            name: 'CMD',
            total: 21,
            stat: 6,
            bab: '+5',
            size: 0,
            misc: 10
          }
        ],
        skills: [
          {
            value: false,
            avatar: '/static/icons/acrobatics.svg',
            name: 'Acrobatics',
            total: '+8',
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
            total: '+7',
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
            total: '+12',
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
            total: '+6',
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
            total: '+3',
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
            total: '+15',
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
            total: '+8',
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
            total: '+14',
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
            total: '+10',
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
            total: '+9',
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
            total: '+5',
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
            total: '+9',
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
            total: '+6',
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
            total: '+3',
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
            total: '+3',
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
            total: '+7',
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
            total: '+3',
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
            total: '+7',
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
            total: '+11',
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
            total: '+3',
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
            total: '+11',
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
            total: '+3',
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
            total: '+7',
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
            total: '+3',
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
            total: '+11',
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
            total: '+5',
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
            total: '+1',
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
            total: '+11',
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
            total: '+8',
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
            total: '+13',
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
            total: '+12',
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
            total: '+2',
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
            total: '+2',
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
            total: '+5',
            statBonus: 4,
            rank: 0,
            misc: 0,
            classBonus: 0,
            classSkill: 'Yes',
            statType: 'CHA',
          },
        ],
        other: [
          {
            value: false,
            name: 'Initiative',
            avatar: '/static/icons/init.svg',
            total: '+3',
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Hit Points',
            avatar: '/static/icons/hp.svg',
            bonus: '110',
            total: 1116,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'DR',
            avatar: '/static/icons/dr.svg',
            total: 0,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Speed',
            avatar: '/static/icons/speed.svg',
            total: 30,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'SR',
            avatar: '/static/icons/sr.svg',
            total: 0,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Hero Points',
            avatar: '/static/icons/hero.svg',
            bonus: '4',
            total: 7,
            base: 10,
            misc: 0
          },
        ]
        }
    }

  
}
</script>

<style>

</style>