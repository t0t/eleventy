// scale

const svg = d3.select("#animcover"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

const path = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("fill", "none")
    .attr("stroke-width", 4)
    .attr("stroke-linejoin", "round")
  .selectAll("path")
  .data(["#9F9FFF", "#FF6874", "#FFFF9F", "#2BC4A9"])
  .enter().append("path")
    .attr("stroke", d => { return d; })
    .style("mix-blend-mode", "darken")
    .datum(function(d, i) {
      return d3.radialLine()
          .curve(d3.curveLinearClosed)
          .angle(function(a) { return a; })
          .radius(function(a) {
            var t = d3.now() / 1000;
            return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
          });
    });

d3.timer( () => {
  path.attr("d", (d) => {
    return d(angles);
  });
});
