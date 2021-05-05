<template>

    <v-container fluid class="dash">
        <H1>Formula One: Pitstop Data Visualization</H1>

        <v-row>
            <v-col cols="12">
                <BubbleChart></BubbleChart>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6">
                <BarGraph></BarGraph>
            </v-col>

            <v-col cols="6">
                <TreeMap></TreeMap>
            </v-col>
        </v-row>
    </v-container>

    <!-- TODO: Bubble Chart will be the biggest -->
    <!-- TODO: Bar chart and treemap will be of equal size beneith the bubble chart -->
    <!-- TODO: Parse data -->
    
</template>

<script>
import BarGraph from './BarGraph.vue'
import BubbleChart from './BubbleChart'
import TreeMap from './TreeMap'

export default {
    components: { BarGraph, BubbleChart, TreeMap },
    name: 'Dashboard'
    
}
</script>

<style lang="sass" scoped>
    .dash
        height: fit-content
        background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1))
        padding: 32px

        H1
            text-align: center
</style>