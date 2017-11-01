let buttonStats = document.getElementById("btn-statistics");

buttonStats.addEventListener('click', function () {
  console.log(buttonStats.value);
}, false);

function splitInput() {
  let input = "this is a test string";
  let subSplit = input.substring(0);
  let splitArr = [];

  for (let i = 0; i < input.length; i++) {
    splitArr.push(subSplit[i]);
    return splitArr;
  };
}

function calcChars(c) {
  let cCalc = splitInput.splitArr;
  console.log(c)
}

calcChars();