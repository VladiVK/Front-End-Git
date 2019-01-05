
var inputNumbers = 0;
var attempts = 0;
var totalSum = 0;
var average = 0;

for (;attempts < 5;) {
    inputNumbers = Number(prompt('Enter your number!'));
if (isNaN(inputNumbers)) {
    console.log('Please, input only numbers!');
} else {
    attempts++; // calculate input times
    totalSum += inputNumbers; 
    average = totalSum / attempts; // Calculate average
    
}

}
console.log('Average number is: ' + average);
