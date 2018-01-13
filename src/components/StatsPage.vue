
<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
        <v-flex xs12>
            <stat-table :themecolor="themecolor" />
        </v-flex>
        <v-flex xs12>
            <saves-table />
        </v-flex>
        <v-flex xs12>
            <defenses-table />
        </v-flex>
        <v-flex xs12>
            <combat-table />
        </v-flex>
        <v-flex xs12>
            <maneuvers-table />
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