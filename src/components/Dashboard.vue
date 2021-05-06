<template>

    <v-container fluid class="dash">
        <v-card light flat class="info">
            <v-container>
                <v-card-title>Formula One: Pitstop Data Visualization</v-card-title>
                <v-card-text class="white--text">The first visualization, the packed bubble chart, indicates the highest ratio of global wins based on 2010 to 2020 data from a compilation of data gathered from Formula 1 racing. Within the data, the construct with the highest number of global wins is categorized by the size of the bubble with the largest bubble indicating the highest number of wins and the smallest bubble indicating the least number of wins. Each bubble is color-coded to correlate with the nationality that each construct represents. Within this data, it indicates that the top three nationalities with the highest ratio from 2010 to 2020 were British, Italian, and German.</v-card-text>

                <v-card-text class="white--text">The second visualization, a circular bar graph, indicates the nationality of the constructors with the most amount of pit stops. Based on the data from 2010 to 2020 the top four construct nationalities with the highest number of pit stops were British, Italian, French, and Swiss.</v-card-text>

                <v-card-text class="white--text">The final data visualization included in the project is a horizontal bar graph that takes a closer look at the length of time of each construct’s pitstop based on its nationality in milliseconds from 2010 to 2020. Within the data, the top three nationalities with the longest pitstop times were the British, Italian, and French, with the Swiss closely trailing behind.</v-card-text>
            </v-container>
        </v-card>

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
            color: #031E49

        .info
            padding: 16px
            color: white
            margin-bottom: 50px

            p
                color: white
</style>