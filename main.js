$(document).ready(function() {
  var width = 450,
    height = 450,
    start = 0,
    end = 2.25,
    numSpirals = 3;
  margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  };

  var categories; //categories for this vis
  var valuesList; //data for this vis
  var colorList; //colors per category
  var rawData;

  chooseCategory("genre");
  renderVis();

  //choose from genre, year, season, tempo, popularity
  function chooseCategory(category) {
    if (category == "genre") {
      categories = genreCategories;
      valuesList = genreVisData;
      colorList = genreColorList;
      rawData = genreData;
    } else if (category == "year") {
      categories = yearCategories;
      valuesList = yearVisData;
      colorList = yearColorList;
      rawData = yearData;
    } else if (category == "season") {
      categories = seasonCategories;
      valuesList = seasonVisData;
      colorList = seasonColorList;
      rawData = seasonData;
      numSpirals = 1.8;
    } else if (category == "tempo") {
      categories = tempoCategories;
      valuesList = tempoVisData;
      colorList = tempoColorList;
      rawData = tempoData;
    } else if (category == "popularity") {
      categories = popularityCategories;
      valuesList = popularityVisData;
      colorList = popularityColorList;
      rawData = popularityData;
      numSpirals = 1.6;
    }
  };

  $("#genre").click(function() {
    $("#chart").empty();
    chooseCategory("genre");
    renderVis();
  })
  $("#year").click(function() {
    $("#chart").empty();
    chooseCategory("year");
    renderVis();
  })
  $("#season").click(function() {
    $("#chart").empty();
    chooseCategory("season");
    renderVis();
  })
  $("#tempo").click(function() {
    $("#chart").empty();
    chooseCategory("tempo");
    renderVis();
  })
  $("#popularity").click(function() {
    $("#chart").empty();
    chooseCategory("popularity");
    renderVis();
  })


  function renderVis() {

    var theta = function(r) {
      return numSpirals * Math.PI * r;
    };

    // used to assign nodes color by group
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var r = d3.min([width, height]) / 2 - 40;

    var radius = d3.scaleLinear()
      .domain([start, end])
      .range([40, r]);

    var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var points = d3.range(start, end + 0.001, (end - start) / 1000);

    var spiral = d3.radialLine()
      .curve(d3.curveCardinal)
      .angle(theta)
      .radius(radius);

    var path = svg.append("path")
      .datum(points)
      .attr("id", "spiral")
      .attr("d", spiral)
      .style("fill", "none")
      .style("stroke", "steelblue");



    var spiralLength = path.node().getTotalLength(),
      N = categories.length,
      barWidth = (spiralLength / N) - 1;
    var someData = [];
    for (var i = 0; i < N; i++) {
      someData.push({
        cat: categories[i],
        value: valuesList[i],
        color: colorList[i]
      });
    }


    var ordinalScale = d3.scaleBand()
      .domain(categories)
      .range([0, spiralLength]);

    // yScale for the bar height
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(someData, function(d) {
        return d.value;
      })])
      .range([0, (r / numSpirals) - 20]);

    svg.selectAll("rect")
      .data(someData)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {

        var linePer = ordinalScale(d.cat),
          posOnLine = path.node().getPointAtLength(linePer),
          angleOnLine = path.node().getPointAtLength(linePer - barWidth);

        d.linePer = linePer; // % distance are on the spiral
        d.x = posOnLine.x; // x postion on the spiral
        d.y = posOnLine.y; // y position on the spiral

        d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180 / Math.PI) - 90; //angle at the spiral position

        return d.x;
      })
      .attr("y", function(d) {
        return d.y;
      })
      .attr("width", function(d) {
        return barWidth;
      })
      .attr("height", function(d) {
        return yScale(d.value);
      })
      .style("fill", function(d) {
        return d.color;
      })
      .style("stroke", "none")
      .attr("transform", function(d) {
        return "rotate(" + d.a + "," + d.x + "," + d.y + ")"; // rotate the bar
      });

    // add date labels
    var tF = d3.timeFormat("%b %Y"),
      firstInMonth = {};

    svg.selectAll("text")
      .data(someData)
      .enter()
      .append("text")
      .attr("dy", 10)
      .style("text-anchor", "start")
      .style("font", "10px arial")
      .append("textPath")
      // only add for the first of each month
      .filter(function(d, i) {
        return i % 13 === 0;
      })
      .text(function(d) {
        return d.cat;
      })
      // place text along spiral
      .attr("xlink:href", "#spiral")
      .style("fill", "black")
      .attr("startOffset", function(d) {
        return ((d.linePer / spiralLength) * 100) + "%";
      })


    var tooltip = d3.select("#chart")
      .append('div')
      .attr('class', 'tooltip');

    tooltip.append('div')
      .attr('class', 'date');
    tooltip.append('div')
      .attr('class', 'value');

    svg.selectAll("rect")
      .on('mouseover', function(d) {

        tooltip.select('.date').html("Category: <b>" + d.cat + "</b>");
        tooltip.select('.value').html("Value: <b>" + Math.round(d.value * 100) / 100 + "<b>");

        d3.select(this)
          .style("fill", "#FFFFFF")
          .style("stroke", "#000000")
          .style("stroke-width", "2px");

        tooltip.style('display', 'block');
        tooltip.style('opacity', 2);

      })
      .on('mousemove', function(d) {
        tooltip.style('top', '50px')
          .style('left', '500px');
      })
      .on('mouseout', function(d) {
        d3.selectAll("rect")
          .style("fill", function(d) {
            return d.color;
          })
          .style("stroke", "none")

        tooltip.style('display', 'none');
        tooltip.style('opacity', 0);
      });

  };
});
