
var greeting = prompt('Do you want to exchange your currency? Yes or No!');
var confirmAnswer = greeting.toLowerCase();
var asckCurrency;
var askSum;

if(confirmAnswer === 'yes' || confirmAnswer == "") {
    asckCurrency = prompt('Choose your currency: USD or UAH');
    asckCurrency.toLowerCase();
}

askSum = Number(prompt('Input your sum for exchanging'));
if(askSum) {
    exchange(asckCurrency, askSum);
}


function exchange(currency, sum) {
    if(currency === 'usd') {
        console.log('Your sum in UAH is: ' + (sum * 27.60).toFixed(2));
    } else {
        console.log('Your sum in USD is: ' + (sum / 27.60).toFixed(2));
    }
}


