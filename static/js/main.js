var barChart = d3.select("#bar-chart")
  .append("svg")
  .chart("BarChart")
  .width(200)
  .height(150);

barChart.draw([
  {name: 'a', value: 4},
  {name: 'b', value: 16},
  {name: 'c', value: 19},
  {name: 'd', value: 8},
  {name: 'e', value: 6},
]);

setTimeout(function() {
  barChart.draw([
    {name: 'a', value: 10},
    {name: 'b', value: 8},
    {name: 'c', value: 14},
    {name: 'd', value: 3},
    {name: 'e', value: 14}
  ]);
}, 1000);
