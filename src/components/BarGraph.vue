<template>
    <svg class="bar" width="500" height="500"></svg>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: 'BarGraph',

    }

    const svg = d3.select(".bar");

    const render = (data) => {
        svg.selectAll('rect').data(data).enter().append('rect').attr('width', 300).attr('height', 300);
    };

    d3.csv('pitstop_times.csv').then((data) =>{
        data.forEach(d => {
            console.log(d.Constructor_Name);
        });
        render(data);
    });

</script>