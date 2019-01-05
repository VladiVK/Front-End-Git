
var askAge = prompt("What is your age?", "");

/* if (isNaN(askAge)) {
    console.log('Put numbers only!');
} else if (askAge > 18) {
    console.log('You can use our service!');
} else if (askAge < 12) {
    console.log('Try another servcice!');
} else {
    console.log('You can not use our service!')
}  */

switch (true) {
    default:
        alert('Sorry! You can not use our service!');
        break;
    case (isNaN(askAge)):
        alert('Put numbers only!');
        break;
    case (askAge >= 18):
        alert('It is ok! You can use our service!');
        break;
    case (askAge < 12):
        alert('Try another servcice!');
}





