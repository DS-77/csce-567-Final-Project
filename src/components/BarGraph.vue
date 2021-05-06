<template>
    <svg id="bar"></svg>
</template>

<script>
    import * as d3 from "d3";

    const width = 500
    const height = 400
    const margin = {top: 80, left: 70, bottom: 70, right: 70}

    let Swiss = {name:"Swiss",children: [],total: 0, colour: "#173354"},
    Spanish = {name:"Spanish",children: [],total: 0, colour: "#1e4470"},
    Russian = {name:"Russian",children: [],total: 0, colour: "#26558d"},
    Malaysian = {name:"Malaysian",children: [],total: 0, colour: "#2e66a9"},
    Japanese = {name:"Japanese",children: [],total: 0, colour: "#3577c5"},
    Italian = {name:"Italian",children: [],total: 0, colour: "#3d88e1"},
    Irish = {name:"Irish",children: [],total: 0, colour: "#4599fe"},
    Indian = {name:"Indian",children: [],total: 0, colour: "#59a4fe"},
    German = {name:"German",children: [],total: 0, colour: "#6eaffe"},
    French = {name:"French",children: [],total: 0, colour: "#83bbfe"},
    Dutch = {name:"Dutch",children: [],total: 0, colour: "#97c6fe"},
    British = {name:"British",children: [],total: 0, colour: "#acd1fe"},
    Austrian = {name:"Austrian",children: [],total: 0, colour: "#c1ddfe"},
    American = {name:"American",children: [],total: 0, colour: "#d5e8fe"}

    const gData = [Swiss, Spanish, Russian, Malaysian, Japanese, Italian, Irish, Indian, German,Dutch, French, British, Austrian, American]

    export default {
        name: 'BarGraph',
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
                d3.csv("./pitstop_times.csv")
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
            dataLoaded(){
                if(this.dataLoaded){
                    this.renderData();
                }
            }
        }, 
        mounted(){
            this.renderData();
        },
        methods: {
            renderData() {
                // y -> Nationality
                // x -> Total time spent at Pitstops

                // Calculating total for each Nationality.
                gData.forEach(i => {
                    i.total = this.calculateTotal(i.children)
                });

                // Creating SVG for graph
                const svg = d3.select('#bar').attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

                // Title
                svg.append("text").attr("x", width/2).attr("y", 60-margin.top).attr("text-anchor", "middle").text("Global Pitstop Times").style("font-size", "32px").style("fill", "#031E49");

                this.xScale = d3.scaleLinear().domain([0, 400000000]).range([0, width]);

                this.yScale = d3.scaleBand().range([0, height]).domain(gData.map((s) => { return s.name;})).padding(.1);

                // Adding Bars
                svg.selectAll(".rect").data(gData).enter().append("rect").attr("class", "rect").attr("width", d => {return this.xScale(d.total); } ).attr("y", d => { return this.yScale(d.name); }).attr("height", this.yScale.bandwidth()).attr('fill', (d) => {return d.colour});

                // Adding Axis
                svg.append("g").attr("class", "xAxis").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(this.xScale)).selectAll("text").attr("transform", "translate(0,0)rotate(-45)").style("text-anchor", "end");

                svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(this.yScale));

            },
            calculateTotal(arry) {
                let sum = 0;
                arry.forEach(i => {
                    sum += parseInt(i.Millisecond);
                })

                return sum;
            }
        }
    }
</script>

<style lang="sass">
    #bar
        background-color: #B8CAD1
        width: 100%
        height: 100%

    .yAxis, .xAxis
        line
            stroke: #2D4046
        path
            stroke: #2D4046
        text
            fill: #2D4046
</style>