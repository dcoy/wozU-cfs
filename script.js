window.onload = function() {
  var input = document.getElementById("text-input");
  var btnStats = document.getElementById("btn-statistics");

  var avgWords = 0;
  var totalSpaces = 0;
  var totalWords = 0;
  var totalSent = 0;

  btnStats.addEventListener('click', function () {
    var textToCalc = input.value;
    for(var i=0; i < textToCalc.length; i++) {
      if(isSpace(textToCalc[i])) {
        totalSpaces++;
      } else if (countWords(textToCalc)) {
        totalWords = countWords(textToCalc);
      }
    }
    totalSent = sentences(textToCalc);
    avgWords = wordAverage(textToCalc);
    document.getElementById("avgWords").innerHTML = avgWords;
    document.getElementById("totalSpaces").innerHTML = totalSpaces;
    document.getElementById("totalWords").innerHTML = totalWords;
    document.getElementById("totalSent").innerHTML = totalSent;
  });

  function isSpace(spaces) {
    var spaces = spaces.match(/[\s]+/g);
    return spaces == ' ';
  }

  function isWord(text) {
    var word = text.match(/[^\s]/g);
    console.log(text);
  }

  function countWords(matches){
    var matches = matches.match(/\w\w+/g);
    return matches.length
  }

  function sentences(text) {
    var text = text.match(/[^\.!\?]+[\.!\?]+/gi);
    return text.length;
  }

  function wordAverage(text) {
    var average = countWords(text) / sentences(text);
    return average;
  }
}