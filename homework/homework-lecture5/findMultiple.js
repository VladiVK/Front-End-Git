

// loop task: find multiples of number!

// 1. input number from 1 to 10
// 2. input how many multiples you want to see (up to 100)
// 2. output noted list of multiples!!!


// version with for loop


var yourNumber = Number(prompt('Enter any number from 1 to 10!'));

var numberOfMultiples = Number(prompt('How many multiples must be outputed?'));
var y = 0;

for (var i = 1; i < 100; i++) {
    
    if (yourNumber === 0 || isNaN(yourNumber) || yourNumber > 10) {
        console.log('Sorry, incorrect value!');
    } else if (i % yourNumber === 0 && y < numberOfMultiples) {
        console.log(i);
        y++;
          
    } 
}

// version with loop while

/* var yourNumber = Number(prompt('Enter any number from 1 to 10!'));
var numberOfMultiples = Number(prompt('How many multiples must be outputed?'));
var y = 0;
var i = 1

while (i < 100) {
    i++;
    if (yourNumber === 0 || isNaN(yourNumber) || yourNumber > 10) {
        console.log('Sorry, incorrect value!');
    } else if (i % yourNumber === 0 && y < numberOfMultiples) {
        console.log(i);
        y++;
          
    } 
} */



