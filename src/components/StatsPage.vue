
<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
        <v-flex sm6>
            <stat-table :themecolor="themecolor" />
        </v-flex>
        <v-flex sm6>
            <saves-table />
        </v-flex>
        <v-flex sm12>
            <defenses-table />
        </v-flex>
        <v-flex sm6>
            <combat-table />
        </v-flex>
        <v-flex sm6>
            <maneuvers-table />
        </v-flex>
        <v-flex sm12>
            <skill-table />
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