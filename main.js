$(document).ready(function() {
  var width = 400,
    height = 400,
    start = 0,
    end = 2.25,
    numSpirals = 3;
  margin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };


  var categories; //categories for this vis
  var cat2; //used in hover interactions
  var valuesList; //data for this vis
  var colorList; //colors per category
  var rawData;

  chooseCategory("genre");
  renderVis();

  //choose from genre, year, season, tempo, popularity
  function chooseCategory(category) {
    if (category == "genre") {
      colorCategories = genreColorCategories;
      categories = genreCategories;
      valuesList = genreVisData;
      colorList = genreColorList;
      cat2 = genreCategories2;
      rawData = genreData;
      $(".catButton").css('background-color', 'rgb(72,135,191)');
      $("#genre").css('background-color', 'rgba(43, 161, 97, 50)');
    } else if (category == "year") {
      colorCategories = yearColorCategories;
      categories = yearCategories;
      valuesList = yearVisData;
      cat2 = yearCategories2;
      colorList = yearColorList;
      rawData = yearData;
      $(".catButton").css('background-color', 'rgb(72,135,191)');
      $("#year").css('background-color', 'rgba(43, 161, 97, 50)');
    } else if (category == "season") {
      colorCategories = seasonColorCategories;
      categories = seasonCategories;
      cat2 = seasonCategories2;
      valuesList = seasonVisData;
      colorList = seasonColorList;
      rawData = seasonData;
      numSpirals = 2;
      $(".catButton").css('background-color', 'rgb(72,135,191)');
      $("#season").css('background-color', 'rgba(43, 161, 97, 50)');
    } else if (category == "tempo") {
      colorCategories = tempoColorCategories;
      categories = tempoCategories;
      cat2 = tempoCategories2;
      valuesList = tempoVisData;
      colorList = tempoColorList;
      rawData = tempoData;
      $(".catButton").css('background-color', 'rgb(72,135,191)');
      $("#tempo").css('background-color', 'rgba(43, 161, 97, 50)');
    } else if (category == "popularity") {
      colorCategories = popularityColorCategories;
      categories = popularityCategories
      cat2 = popularityCategories2;
      valuesList = popularityVisData;
      colorList = popularityColorList;
      rawData = popularityData;
      numSpirals = 1.6;
      $(".catButton").css('background-color', 'rgb(72,135,191)');
      $("#popularity").css('background-color', 'rgba(43, 161, 97, 50)');
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

    //make svg chart
    var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var points = d3.range(start, end + 0.001, (end - start) / 1000);

    //create spiral
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

    //------------------------------------------------

    //put data in sprial
    var spiralLength = path.node().getTotalLength(),
      N = colorCategories.length,
      barWidth = (spiralLength / N) - 1;
    var someData = [];
    for (var i = 0; i < N; i++) {
      someData.push({
        cat: colorCategories[i],
        cat2: cat2[i],
        category: categories[i],
        value: valuesList[i],
        color: colorList[i],
        raw: rawData[i],
        clicked: false
      });
    }


    var ordinalScale = d3.scaleBand()
      .domain(colorCategories)
      .range([0, spiralLength]);

    // yScale for the bar height
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(someData, function(d) {
        return d.value;
      })])
      .range([0, (r / numSpirals) - 20]);

    //draw data in spiral
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
      .style("font", "12px arial")
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


    //-----------------------------------------------------------

    //hover interactions
    var tooltip = d3.select(".zoomIn")
      .append('div')
      .attr('class', 'tooltip');

    tooltip.append('div')
      .attr('class', 'category');
    tooltip.append('div')
      .attr('class', 'color');
    tooltip.append('div')
      .attr('class', 'value');
    tooltip.append('div')
      .attr('class', 'artists');
    tooltip.append('div')
      .attr('class', 'covers');



      svg.selectAll("rect")
      .on('click', function(d) {
        if (!d.clicked) {
          d.clicked=true;
        } else {
          d.clicked=false;
        }
      })
      .on('mouseover', function(d) {
          if (d.color != "white") {

            tooltip.select('.category').html("Category: <b>" + d.category + "</b>");
            if (d.color == "burlywood") {
              tooltip.select('.color').html("Color: <b> Beige</b>");
            } else if (d.color == "antiqueWhite") {
              tooltip.select('.color').html("Color: <b> White </b>");
            } else {
              tooltip.select('.color').html("Color: <b>" + d.color + "</b>");
            }
            tooltip.select('.value').html("Number of Albums: <b>" + d.raw + "</b>");

            if (d.raw != 0) {
              var colorTemp;
              if (d.color == "burlywood") {
                colorTemp = "Beige";
              } else if (d.color == "antiqueWhite") {
                colorTemp = "White";
              } else {
                colorTemp = d.color;
              }

              var artistInput = d.cat2.concat(colorTemp).concat("Artists");
              var coverInput = d.cat2.concat(colorTemp).concat("Covers");
              //raw values of artists and album covers
              tooltip.select('.artists').html("Artists: <b>" + window[artistInput] + "</b>");
              tooltip.select('.covers').html("Covers: ");
              var albumCovers = "";

              //add album covers for each category/color combo
              for (i = 0; i < window[coverInput].length; i++) {
                albumCovers += "<img src=" + window[coverInput][i] + ">";
              }
              tooltip.select('.covers').html(albumCovers);
          }

            d3.select(this)
              .style("fill", d.color)
              .style("stroke", "#000000")
              .style("stroke-width", "3px");

            tooltip.style('display', 'block');
            tooltip.style('opacity', 2);
          }

      })
      .on('mousemove', function() {
      })
      .on('mouseout', function(d) {
        if(!d.clicked) {
        d3.selectAll("rect")
          .style("fill", function(d) {
            return d.color;
          })
          .style("stroke", "none")

        tooltip.style('display', 'none');
        tooltip.style('opacity', 0);
      }
      });


//Hover interaction for color bar to filter ----------------------------------------------
    $("#redKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Red") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {
            return "rgba(167, 167, 167, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#orangeKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Orange") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {
            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#yellowKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Yellow") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#greenKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Green") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#blueKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Blue") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#purpleKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Purple") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#pinkKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Pink") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#brownKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Brown") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#blackKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Black") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#whiteKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "antiqueWhite") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {

            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#beigeKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "burlywood") { //beige = burlywood for vis purposes
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {
            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });
    $("#grayKey").hover(
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          if (d.color == "Gray") {
            return d.color;
          } else if (d.color == "white") {
            return "white";
          } else {
            return "rgba(218, 218, 218, 0.87)";
          }
        });
      },
      function() {
        svg.selectAll("rect").style("fill", function(d) {
          return d.color;
        });
      });



  };
});
