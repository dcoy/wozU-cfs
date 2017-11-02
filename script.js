
// var textValue = textArea.value;

// var avgWords = document.getElementById("avgWords");
// var totalSpaces = document.getElementById("totalSpaces");
// var totalWords = document.getElementById("totalWords");
// var totalSent = document.getElementById("totalSent");

// function splitInput(str, delim) {
//   if (typeof delim === "undefined" | "null") {
//     return [str];
//   }

//   var result = [];
//   if (delim === '') {
//     // split the whole string into an array of letters
//     for (var i = 0, l = str.length; i < l; i++) {
//       result.push(str[i]);
//     }
//     return result;
//   }

//   var pos = 0;
//   var strClone = str; // never update the passed argument, create a "clone"

//   pos = strClone.indexOf(delim);
//   while (pos > -1) {
//     // get word
//     var word = strClone.substr(0, pos);

//     // include word on our results array
//     result.push(word);

//     // change string (not the original one, just a clone) to remove the word that we found before (+ delimiter length)
//     strClone = strClone.substr(word.length + delim.length);

//     // update pos so while won't be infinite
//     pos = strClone.indexOf(delim);
//   }

//   // push the last result (while finish before the last result, so we have to do this manually)
//   result.push(strClone);
//   return result;
// }

window.onload = function() {
  var input = document.getElementById("text-input");
  console.log(input);
}