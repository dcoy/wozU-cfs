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
      } else if (sentences(textToCalc)) {
        totalSent = sentences(textToCalc); // Will not update totalSent to 7
      }
    }
    console.log("Total spaces: " + totalSpaces);
    console.log("Total words: " + totalWords);
    console.log("Total sentences: " + totalSent);
    console.log("Average words/sentence: " + avgWords);
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
    // console.log(text.length);
    return text.length;
  }
}