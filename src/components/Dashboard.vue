<template>

    <v-container fluid class="dash">
        <h2>Charts go here.</h2>

        <v-row>
            <v-col cols="12">
                <!-- For Global wins. Bubble Chart -->
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6">
                <BarGraph></BarGraph>
            </v-col>

            <v-col cols="6">
                <!-- For Treemap -->
            </v-col>
        </v-row>
    </v-container>

    <!-- TODO: Bubble Chart will be the biggest -->
    <!-- TODO: Bar chart and treemap will be of equal size beneith the bubble chart -->
    <!-- TODO: Parse data -->
    
</template>

<script>
import BarGraph from './BarGraph.vue'
export default {
    components: {BarGraph},
    name: 'Dashboard'
    
}
</script>

<style lang="sass" scoped>
    .dash
        height: fit-content
        background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1))
        padding: 32px
</style>