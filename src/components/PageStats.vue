
<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
        <v-flex xs6 lg4>
            <table-stats :themecolor="themecolor" />
        </v-flex>
        <v-flex xs12 lg6>
            <saves-table :themecolor="themecolor" />
        </v-flex>
        <v-flex xs12>
            <defenses-table :themecolor="themecolor" />
        </v-flex>
        <v-flex xs12 lg6>
            <combat-table :themecolor="themecolor" />
        </v-flex>
        <v-flex xs12 lg6>
            <maneuvers-table :themecolor="themecolor" />
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['themecolor']
  
}
</script>

<style>

</style>