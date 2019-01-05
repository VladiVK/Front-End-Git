
// Find average value of numbers inputed through coma in prompt() method

var inputNumbersByComas = prompt('Input numbers by comas!');
var temporaryArray = inputNumbersByComas.split(',');
var arr = [];
var totalSum = 0;
var numberOfNumbers = 0; // number of numbers in array
var average = 0;


for (var i = 0; i < temporaryArray.length; i++) {
    arr.push(Number(temporaryArray[i]));
}

for (var y = 0; y < arr.length; y++) {
    totalSum += arr[y];
    numberOfNumbers ++;
}

average = totalSum / numberOfNumbers;
console.log(average);

