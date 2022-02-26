// init data
var year = 11;
var data = []
for (var i=0; i<year; i++){
    data.push([i, 1000*Math.pow(1.2, i)])
}

$("#numInput").change(function(){
    d3.selectAll(".dot").remove();
    d3.selectAll(".line").remove();
    var uplimit = d3.select("#numInput").node().value;
    data = [];
    console.log(uplimit);
    for (var j=0; j<uplimit; j++){
        data.push([j, 1000*Math.pow(1.2, j)])
    }
    update(data);
})

var svg = d3.select("svg")
        .attr("width", 600)
        .attr("height",400)
var margin = 100,
width = svg.attr("width") - margin, 
height = svg.attr("height") - margin

var xScale = d3.scaleLinear().domain([0, 10]).range([0, width]),
yScale = d3.scaleLinear().domain([1000, 7000]).range([height, 0]);
        
var g = svg.append("g")
    .attr("transform", "translate(" + 90 + "," + 30 + ")");

svg.append('text')
.attr('x', width/2 + 90)
.attr('y', 30)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvetica')
.style('font-size', 20)
.text('Compound Interest');

// X label
svg.append('text')
.attr('x', width/2 + 90)
.attr('y', height - 15 + 80)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvetica')
.style('font-size', 12)
.text('Year');
    
// Y label
svg.append('text')
.attr('text-anchor', 'middle')
.attr('transform', 'translate(40,' + (height-100) + ')rotate(-90)')
.style('font-family', 'Helvetica')
.style('font-size', 12)
.text('Money');

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

g.append("g")
    .call(d3.axisLeft(yScale));

update(data);

function update(dataset){
    svg.append('g')
    .selectAll("dot") 
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d[0]); } )
    .attr("cy", function (d) { return yScale(d[1]); } )
    .attr("r", 3)
    .attr("transform", "translate(" + 90 + "," + 30 + ")")
    .style("fill", "rgb(249,133,36)")
    .attr("class", "dot");
        
    var line = d3.line()
    .x(function(d) { return xScale(d[0]); }) 
    .y(function(d) { return yScale(d[1]); }) 
    .curve(d3.curveMonotoneX)

    svg.append("path")
    .datum(dataset) 
    .attr("class", "line") 
    .attr("transform", "translate(" + 90 + "," + 30 + ")")
    .attr("d", line)
    .style("fill", "none")
    .style("stroke", "rgb(249,133,36)")
    .style("stroke-width", "2");
}