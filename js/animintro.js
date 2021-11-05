// scale
let width = window.innerWidth;
let height = window.innerHeight;

let svg = d3.select("#animcover"),
angles = d3.range(0, 2 * Math.PI, Math.PI / 100);

svg.attr("width", width)
   .attr("height", height)
   .attr("fill", "#00ff00");

const path = svg.append("g")
    .attr("transform", `translate(${width/2},${height/2})`)
    .attr("fill", "none")
    .attr("stroke-width", 30)
    .attr("stroke-linejoin", "round")
  .selectAll("path")
  .data(["#9F9FFF", "#FF6874", "#FFFF9F", "#2BC4A9"])
  .enter().append("path")
    .attr("stroke", d => { return d; })
    .style("mix-blend-mode", "multiply")
    .datum((d, i) => {
      return d3.radialLine()
          .curve(d3.curveLinearClosed)
          .angle(a => { return a; })
          .radius(a => {
            var t = d3.now() / 1000;
            return 150 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 10) * 32;
          });
    });

d3.timer( () => {
  path.attr("d", d => {
    return d(angles);
  });
});
