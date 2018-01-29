
<template>
    <v-container fluid grid-list-md>
        <v-layout align-start row wrap>
          <v-flex xs12>
            <v-toolbar :class="themecolor">
            </v-toolbar>
          </v-flex>
            <v-flex xs6 lg4 >
                <v-layout row wrap>
                    <v-flex  >
                        <table-stats :themecolor="themecolor" 
                        :title="'Stats'" :items="stats" >
                        </table-stats>
                    </v-flex>
                    <v-flex  >
                        <table-stats :themecolor="themecolor" 
                        :title="'Combat'" :items="combat" >
                        </table-stats>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6 lg4  >
                <v-layout row wrap>
                    <v-flex  >
                        <table-stats :themecolor="themecolor" 
                        :title="'Saves'" :items="saves" >
                            <table-saves-full :themecolor="themecolor" />    
                            </table-stats>
                    </v-flex>
                    <v-flex   >
                        <table-stats :themecolor="themecolor" 
                        :title="'Defenses'" :items="defenses" >
                        </table-stats>
                    </v-flex>
                    <v-flex>
                        <table-stats :themecolor="themecolor" 
                        :title="'Combat Maneuvers'" :items="maneuvers" >
                        </table-stats>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6 lg4>
                <table-stats :themecolor="themecolor" 
                :title="'Skills'" :items="skills" >
                </table-stats>
            </v-flex>
            </v-flex>
            <v-flex xs12>
                <table-stats :themecolor="themecolor" 
                :title="'Misc'" :items="other" >
                </table-stats>
            </v-flex>
        </v-layout>
    </v-container>
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
        stats: [
          {
            value: false,
            name: 'Strength',
            avatar: '/static/icons/str.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/dex.svg',
            name: 'Dexterity',
            bonus: '+2',
            total: 13,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cons.svg',
            name: 'Constitution',
            bonus: '+3',
            total: 16,
            base: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/int.svg',
            name: 'Intelligence',
            bonus: '-1',
            total: 9,
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
        ],
        saves: [
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
        ],
        defenses: [
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
        ],
        combat: [
          {
            value: false,
            avatar: '/static/icons/melee.svg',
            name: 'Melee',
            total: 0,
            bab: 0,
            stat: 10,
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/finesse.svg',
            name: 'Finesse',
            total: 0,
            bab: 0,
            stat: 10,
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/ranged.svg',
            name: 'Ranged',
            total: 0,
            bab: 0,
            stat: 10,
            size: 10,
            misc: 0
          }
        ],
        maneuvers: [
          {
            value: false,
            avatar: '/static/icons/cmb.svg',
            name: 'CMB',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmbFin.svg',
            name: 'CMB (Finesse)',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          },
          {
            value: false,
            avatar: '/static/icons/cmd.svg',
            name: 'CMD',
            total: 0,
            stat: 10,
            bab: '+6',
            size: 10,
            misc: 0
          }
        ],
        skills: [
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
        ],
        other: [
          {
            value: false,
            name: 'Initiative',
            avatar: '/static/icons/init.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Hit Points',
            avatar: '/static/icons/hp.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'DR',
            avatar: '/static/icons/dr.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Speed',
            avatar: '/static/icons/speed.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'SR',
            avatar: '/static/icons/sr.svg',
            bonus: '+4',
            total: 18,
            base: 10,
            misc: 0
          },
          {
            value: false,
            name: 'Hero Points',
            avatar: '/static/icons/hero.svg',
            bonus: '+4',
            total: 18,
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