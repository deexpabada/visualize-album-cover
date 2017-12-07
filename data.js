var colorTemplate = ["white",'Red','Orange','Yellow','Green','Blue','Purple','Pink','Brown','Black','beige','burlywood','Gray'];   //white = beige for visibility; burlywood = beige

function makeColorList(num) {
  var customColorTemplate = []
  for (i = 0; i < num; i++) {
    customColorTemplate = customColorTemplate.concat(colorTemplate);
  };
  return customColorTemplate;
};


var colorList =  ["",'Red','Orange','Yellow','Green','Blue','Purple','Pink','Brown','Black','White','Beige','Gray'];
function makeCategoryList(inputList) {
  var newCatList = [];
  for (i = 0; i < inputList.length; i++) {
    for (j = 0; j < colorList.length; j++) {
        newCatList.push(inputList[i].concat(colorList[j]));
    };
  };
  return newCatList;
};

function makeVisData(inputList) {
  var visData = []
  for (i = 0; i < inputList.length; i++) {
    if (inputList[i] == -1) {
      visData.push(15);
    } else if (inputList[i] > 40) {
      visData.push(10);
    } else if(inputList[i] == 0) {
      visData.push(1);
    }else {
      visData.push(inputList[i]);
    };
  };
  return visData;
};


//GENRES -----------------------------------------------------

var genreData = [
-1,5,1,0,12,12,1,0,22,33,11,9,96, //Rock
-1,3,0,0,3,4,2,1,9,15,1,3,40, //hiphop
-1,6,4,8,4,4,1,3,3,1,2,1,21, //folk
-1,2,0,0,6,2,0,0,9,3,0,0,44, //country
-1,2,2,2,1,0,2,1,5,5,7,2,32, //classical
-1,1,7,2,3,9,2,3,5,14,1,2,28, //electronic
-1,8,7,7,4,2,9,7,4,3,5,0,12, //jazz
-1,2,0,0,0,2,0,3,0,3,5,0,18, //k-pop
-1,3,0,0,4,13,0,1,9,13,6,2,50,//pop
-1,4,0,0,5,6,1,1,10,10,3,2,35, //rnb
-1,2,0,0,6,0,0,0,4,1,1,2,19, //reggae
-1,0,0,0,5,3,0,0,4,22,1,0,32, //metal
-1,0,0,0,2,7,1,1,8,10,5,3,43] //latin

var genreVisData = makeVisData(genreData);
var genreCategories = makeCategoryList(["Rock", "Hip-Hop", "Folk", "Country", "Classical", "Electronic", "Jazz", "K-pop", "Pop", "R&B", "Reggae", "Metal", "Latin"]);
var genreColorList = makeColorList(14);

//year-------------------------------------------------------
var yearData = [
  -1,0,0,1,2,1,1,0,5,1,1,4,14, //1960
  -1,0,0,0,5,2,0,0,4,14,5,2,31, //1970
  -1,1,0,0,4,1,3,0,9,13,6,1,38, //1980
  -1,4,0,2,10,7,1,1,22,13,3,2,60, //1990
  -1,10,4,1,9,10,1,0,9,23,8,4,77, //2000
  -1,21,17,15,24,44,14,20,40,63,23,11,229 //2010
]

var yearVisData = makeVisData(yearData);
var yearCategories = makeCategoryList(["1960","1970","1980","1990","2000","2010"]);
var yearColorList = makeColorList(7);

//season------------------------------
var seasonData = [
  -1,8,3,10,16,24,3,5,26,33,12,8,93, //spring
  -1,11,9,3,13,17,6,7,25,33,9,8,139, //summer
  -1,13,4,2,16,16,10,7,21,47,15,7,175, //fall
  -1,6,5,4,10,7,2,2,20,21,12,3,64 //winter
]

var seasonVisData = makeVisData(seasonData);
var seasonCategories = makeCategoryList(["Spring","Summer","Fall","Winter"]);
var seasonColorList = makeColorList(5);

//tempo--------------------------------------
var tempoData = [
  -1,0,0,0,0,0,0,0,0,0,0,0,1, //40-60
  -1,3,1,2,8,1,1,1,5,6,9,2,28, //61-80
  -1,11,6,8,11,19,2,4,22,27,10,6,108, //81-100
  -1,8,1,1,10,15,2,4,22,28,10,6,99, //101-120
  -1,8,6,5,11,13,12,8,20,36,7,8,123, //121-140
  -1,4,4,1,4,8,2,1,13,23,8,2,58, //141-160
  -1,2,2,1,7,8,2,3,7,10,3,2,41, //161-180
  -1,2,1,1,3,1,0,0,3,4,1,0,9, //181-200
  -1,0,0,0,1,0,0,0,0,0,0,0,4 //201-210
]

var tempoVisData = makeVisData(tempoData);
var tempoCategories = makeCategoryList(["40","60","80","100","120","140","160","180","200"]);
var tempoColorList = makeColorList(10);

//popularity-----------------------------------------------------------
var popularityData = [
  -1,8,7,8,5,3,4,5,3,15,6,1,31, //0-20
  -1,8,3,6,3,4,5,6,10,7,5,0,37, //21-40
  -1,10,8,3,21,18,7,7,42,42,16,10,164, //41-60
  -1,12,3,2,21,29,5,3,31,62,17,13,215, //61-80
  -1,0,0,0,5,10,0,0,6,8,4,2,24 //81-100
]

var popularityVisData = makeVisData(popularityData);
var popularityCategories = makeCategoryList(["0","20","40","60","80"]);
var popularityColorList = makeColorList(6);
