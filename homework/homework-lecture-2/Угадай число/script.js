var yorNumber = Number(prompt('Put your number from 1 to 5!'));
var task = Math.round(Math.random() * 5);
if (yorNumber === task) {
    alert('You are right!!!');
} else {
    alert ('You are wrong!!!');
}