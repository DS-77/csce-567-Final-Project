<template>
    <div>
        <svg id="bubble"></svg>
    </div>
</template>

<script>
import * as d3 from "d3";

const height = 500
const width = 1000
const margin = {top: 70, left: 70, bottom: 70, right: 70}

let Swiss = {name:"Swiss",children: [],total: 0, colour:"#9e0203"},
    Spanish = {name:"Spanish",children: [],total: 0, colour:"#b90303"},
    Russian = {name:"Russian",children: [],total: 0, colour:"#d30304"},
    Malaysian = {name:"Malaysian",children: [],total: 0, colour:"#ee0405"},
    Japanese = {name:"Japanese",children: [],total: 0, colour:"#ef1f20"},
    Italian = {name:"Italian",children: [],total: 0, colour:"#f13b3c"},
    Irish = {name:"Irish",children: [],total: 0, colour:"#f35758"},
    Indian = {name:"Indian",children: [],total: 0, colour:"#f57374"},
    German = {name:"German",children: [],total: 0, colour:"#f78f8f"},
    French = {name:"French",children: [],total: 0, colour:"#f9abab"},
    Dutch = {name:"Dutch",children: [],total: 0, colour:"#fbc7c7"},
    British = {name:"British",children: [],total: 0, colour:"#fde3e3"},
    Austrian = {name:"Austrian",children: [],total: 0, colour:"#ffffff"},
    American = {name:"American",children: [],total: 0, colour:"#f00607"}

    const gData = [Swiss, Spanish, Russian, Malaysian, Japanese, Italian, Irish, Indian, German,Dutch, French, British, Austrian, American];

export default {
    name: 'BubbleChart',
    data() {
        return {
            dataLoaded : false
        }
    },
    created(){
        // Fetch data
            Promise.all([
                d3.csv("./wins.csv")
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
                            console.log(`${d}: Does not have a category.`)
                    }
                })

                this.dataLoaded = true
                
            }).catch(err => {
                console.log(err)
            })
    },
    watch: {
        dataLoaded() {
            if (this.dataLoaded) {
                this.renderData()
            }
        }
    },
    mounted(){
        this.renderData()
    },
    methods:{
        renderData(){

            // Prepare data
            gData.forEach(i => {
                i.total = this.calculateTotal(i.children);
            });

            // Create graph
            let svg = d3.select('#bubble').attr("height", height).attr("width", width).append("g").attr("transform", "translate(0, 0)")

            // Calculates radius and force
            let radiusScale = d3.scaleSqrt().domain([1, 2000]).range([1, 100])

            let simulation = d3.forceSimulation().force("x", d3.forceX(width - margin.left).strength(0.01)).force("y", d3.forceY(height).strength(0.01)).force("collide", d3.forceCollide((d) => { return radiusScale(d.total) + 1 }))

            // Add circles
            let circles = svg.selectAll("circle").data(gData).enter().append("circle").attr("r", (d) => { return Math.abs(radiusScale(d.total))}).attr("fill", (d) => {return d.colour})
        
            // TODO: Figure out how to add labels to circles.
            let labels = circles.append("text").text(d => { return d.name; }).attr("dx", -10).attr("dy", ".35em").text((d) => {return d.name }).attr("fill", "white").attr("font-size", "15px")

            simulation.nodes(gData).on('tick', ticker)

            function ticker() {
                labels.attr("cx", (d) => { return d.x }).attr("cy", (d) => { return d.y})
                circles.attr("cx", (d) => { return d.x }).attr("cy", (d) => { return d.y})
            } 

            let realSvg = document.getElementById('bubble');

            // Add title
            svg.append('text').attr('x', realSvg.clientWidth/2).attr('y', margin.top).attr("text-anchor", "middle").attr("font-size","1.8em").text("Global Wins").style('fill', '#FFFDFE');

        },
        calculateTotal(arry){
            let sum = 0;
            arry.forEach(i => {
                sum += parseInt(i.Wins)
            })

            return sum
        }
    }
    }
</script>

<style lang="sass">

    #bubble
        background-color: rgb(3, 30, 73, 0.5)
        width: 100%
        height: auto

</style>