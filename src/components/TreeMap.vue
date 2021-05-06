<template>
    <svg id="tree"></svg>
</template>

<script>

import * as d3 from "d3";

const width = 500
const height = 400
const margin = {top: 80, left: 70, bottom: 70, right: 70}
const innerRadius = 90,
outerRadius = Math.min(width, height) / 2;

let Swiss = {name:"Swiss",children: [],total: 0, colour: '#120027'},
    Spanish = {name:"Spanish",children: [],total: 0, colour: '#0C0030'},
    Russian = {name:"Russian",children: [],total: 0, colour: '#030039'},
    Malaysian = {name:"Malaysian",children: [],total: 0, colour: '#031E49'},
    Japanese = {name:"Japanese",children: [],total: 0, colour: '#244762'},
    Italian = {name:"Italian",children: [],total: 0, colour: '#456E7B'},
    Irish = {name:"Irish",children: [],total: 0, colour: '#669194'},
    Indian = {name:"Indian",children: [],total: 0, colour: '#88ACA7'},
    German = {name:"German",children: [],total: 0, colour: '#AAC4BC'},
    French = {name:"French",children: [],total: 0, colour: '#DFDFDF'},
    Dutch = {name:"Dutch",children: [],total: 0, colour: '#CCDCD4'},
    British = {name:"British",children: [],total: 0, colour: '#BFBFBF'},
    Austrian = {name:"Austrian",children: [],total: 0, colour: '#9F9F9F'},
    American = {name:"American",children: [],total: 0, colour: '#808080'}

    const gData = [Swiss, Spanish, Russian, Malaysian, Japanese, Italian, Irish, Indian, German,Dutch, French, British, Austrian, American]

export default {
    name: 'TreeMap',
    data() {
        return {
            dataLoaded: false,
            height,
            width
        }
    },
    created() {
        // Fetch data
            Promise.all([
                d3.csv("pitstop_amounts.csv")
            ]).then((data) => {
                data[0].forEach(d => {
                    switch(d.Constructor_Nation){
                        case "Swiss":
                            Swiss.children.push(d);
                            break;
                        case "Spanish":
                            Spanish.children.push(d);
                            break;
                        case "Russian":
                            Russian.children.push(d);
                            break;
                        case "Malaysian":
                            Malaysian.children.push(d);
                            break;
                        case "Japanese":
                            Japanese.children.push(d);
                            break;
                        case "Italian":
                            Italian.children.push(d);
                            break;
                        case "Irish":
                            Irish.children.push(d);
                            break;
                        case "Indian":
                            Indian.children.push(d);
                            break;
                        case "German":
                            German.children.push(d);
                            break;
                        case "French":
                            French.children.push(d);
                            break;
                        case "Dutch":
                            Dutch.children.push(d);
                            break;
                        case "British":
                            British.children.push(d);
                            break;
                        case "Austrian":
                            Austrian.children.push(d);
                            break;
                        case "American":
                            American.children.push(d);
                            break;
                        default:
                            console.log("Does not have a category.")
                    }
                })

                this.dataLoaded = true
                
            }).catch(err => {
                console.log(err)
            })
    },
    watch: {
        dataLoaded() {
            if(this.dataLoaded){
                    this.renderData();
            }
        }
    },
    mounted() {
        this.renderData()
    },
    methods: {
        renderData() {

            // Calculating total for each Nationality.
            gData.forEach(i => {
                i.total = this.calculateTotal(i.children)
            });

            const svg = d3.select('#tree').attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + ((width + margin.right + margin.left)/2 + 35) + "," + ((height + margin.top + margin.bottom)/2) + ")");

             this.xScale = d3.scaleBand().range([0, 2 * Math.PI]).align(0).domain(gData.map((d) => { return d.name; }));

             this.yScale = d3.scaleRadial().range([innerRadius, outerRadius]).domain([0, 3000]);

            svg.append("g").selectAll("path").data(gData).enter().append("path").attr("fill", (d) => {return d.colour;}).attr("d", d3.arc().innerRadius(innerRadius).outerRadius((d) => { return this.yScale(d.total); }).startAngle((d) => { return this.xScale(d.name); }).endAngle((d) => { return this.xScale(d.name) + this.xScale.bandwidth(); }).padAngle(0.01).padRadius(innerRadius))

            svg.append("g").selectAll("g").data(gData).enter().append("g").attr("text-anchor", (d) => { return (this.xScale(d.name) + this.xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; }).attr("transform", (d) => { return "rotate(" + ((this.xScale(d.name) + this.xScale.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (this.yScale(d.total)+10) + ",0)"; }).append("text").text((d) => { return(d.name)}).attr("transform", (d) => { return (this.xScale(d.name) + this.xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; }).style("font-size", "16px").attr("alignment-baseline", "middle").style('fill', '#FFFDFE');

            // Add title
            svg.append('text').attr('x', ((width + margin.right + margin.left)/2 - 350)).attr('y', (width/2)).attr("text-anchor", "middle").attr("font-size","1.8em").text("Global Pitstop Amounts").style('fill', 'White');

        },
        calculateTotal(arry) {
                let sum = 0;
                arry.forEach(i => {
                    sum += parseInt(i.Count_of_Stop);
                })

                return sum;
            }
    },
}
</script>

<style lang="sass">
    #tree
        background-color: #BE0304
        width: 100%
        height: 100%
</style>