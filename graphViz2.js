// init data
var year = 1;
var data1 = [];
var data2 = [];
for (var i=0; i<year; i++){
    data1.push([i, 1000*Math.pow(1.15, i)]);
    data2.push([i, 1000*(1+(0.2*i))]);
}

$("#numInput").change(function(){
    d3.selectAll(".dot").remove();
    d3.selectAll(".line").remove();
    var uplimit = d3.select("#numInput").node().value;
    data1 = [];
    data2 = [];
    console.log(uplimit);
    for (var j=0; j<=uplimit; j++){
        data1.push([j, 1000*Math.pow(1.15, j)])
        data2.push([j, 1000*(1+(0.2*j))]);
    }
    update(data1, "rgb(249,133,36)");
    update(data2, "rgb(32,138,167)");
})

var svg = d3.select("#fbaq-2")
        .append("svg")
        .attr("width", 600)
        .attr("height",400)
var margin = 100,
width = svg.attr("width") - margin, 
height = svg.attr("height") - margin

var xScale = d3.scaleLinear().domain([0, 10]).range([0, width]),
yScale = d3.scaleLinear().domain([1000, 4500]).range([height, 0]);
        
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

// Define the div for the tooltip
var div = d3.select("#fbaq-2").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

var circlex = 450;
var circley = 260;
svg.append("circle").attr("cx",circlex).attr("cy",circley).attr("r", 6).style("fill", "rgb(249,133,36)")
svg.append("circle").attr("cx",circlex).attr("cy",circley+30).attr("r", 6).style("fill", "rgb(32,138,167)")
svg.append("text").attr("x", circlex+20).attr("y", circley).text("Compound Interest").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", circlex+20).attr("y", circley+30).text("Simple Interest").style("font-size", "15px").attr("alignment-baseline","middle")


update(data1, "rgb(249,133,36)");
update(data2, "rgb(32,138,167)");

function update(dataset,color){
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
    .style("stroke", color)
    .style("opacity", .7)
    .style("stroke-width", "2");

    svg.append('g')
    .selectAll("dot") 
    .data(dataset)
    .enter()
    .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 5)
        .attr("transform", "translate(" + 90 + "," + 30 + ")")
        .style("fill", color)
        .attr("class", "dot")
    .on("mouseover", function(d) {	
        console.log(d.path[0].__data__);	
        div.transition()		
            .duration(200)
            .style("opacity", .9);	
        div.html("Year: "+ d.path[0].__data__[0] + "<br/>Money: $"  + parseInt(d.path[0].__data__[1]))	
            .style("left", (d.pageX+10) + "px")	
            .style("top", (d.pageY) + "px");
        })					
    .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });
}

function showGraph(){
    $("#fbaq-1").show();
    $("#fbaq-2").show();
    $("#fbaq-3").show();
}