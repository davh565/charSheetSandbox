
<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
        <v-flex xs12>
            <skill-table :themecolor="themecolor" />
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['themecolor'],
    
  
}
</script>

<style>

</style>