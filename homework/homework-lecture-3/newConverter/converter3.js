

// Gryvnia is a basic currency! You can choose 
var greeting = confirm('Do you want to make currency exchange?');

  if (greeting === false) { 
     alert('Hope to see You again next time!');
     throw new Error;
      
  }
  
  var askSumInDollars;
  var askSumInEuros; 
  var defaultAskCurrency = prompt('Choose your currency: Dollar or Euro');
  var askCurrency = defaultAskCurrency.toLowerCase();
  
 
  if (askCurrency === 'dollar' || askCurrency === 'dollars') {
    askSumInDollars = Number(prompt('Input your sum in Dollars!'));
  } else if (askCurrency === 'euro' || askCurrency === 'euros') {
    askSumInEuros = Number(prompt('Input your sum in Euro!'));
  } else {
    alert('Please, choose correct type of currency!');
    throw new Error;
  } 


  if (isNaN(askSumInDollars) && isNaN(askSumInEuros)) {
    alert('Please, input numbers only!');
  } else if (askSumInDollars) {
    alert ( 'For your sum: ' + askSumInDollars + '$' + ' in Gryvnias is: ' + askSumInDollars * 27.62);
  } else if (askSumInEuros) {
    alert ('Your sum in Gryvnias is: ' + askSumInEuros * 31.50);
  }