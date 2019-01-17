
// создаем строку с алфавитом

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// запрашиваем: 1) сколько строк вывести 
//              2) сколько min & max символов в строках
var numberOfRandomStrings =
        Number(prompt('How many strings do you need?'));
var min = Number(prompt('Note min number of characters in each string!'));
        
var max = Number(prompt('Note max number of characters in each string!'));


// создаем рандомное значение длины случайной строки,  
//  выбираем откуда случайно начнем резать алфавит
var arr = [];
for (var i = 0; i < numberOfRandomStrings; i++) {
    var stringLength = Math.floor(Math.random() * ((max+1) - min)) + min;
    var randomStart = Math.floor(Math.random() * ((alphabet.length - 1) - max));
    var temporaryString = alphabet.substr(randomStart, stringLength);
    arr.push(temporaryString);
}

document.getElementById('randomArray').innerHTML =
 'Our random array: ' + ' ' + arr;

console.log('Our array with random strings!');
console.log(arr); // выводим массив с случайной длины строками

// создаем массив с длинами каждой строки массива
// некоторые длины повторяются !!!
var arrByLength = [];
for (var y = 0; y < arr.length; y++) {
    arrByLength.push(arr[y].length);
}
// console.log(arrByLength); его выводить необязательно

// создаем объект и в нем определяем сколько у строк и символов в них

    
 var resultObject = { };
 for(var i = 0; i < arrByLength.length; ++i) {
     if(!resultObject[arrByLength[i]])
         resultObject[arrByLength[i]] = 0;
     ++resultObject[arrByLength[i]];
 }

 //console.log(resultObject); его выводить необязательно
 
 // выводим:
 // то есть 2 строки по 7 символов, 3 по 5 символов ....
 Object.getOwnPropertyNames(resultObject).forEach(function(val, idx, array) {
        console.log('We create ' + resultObject[val]
         + ' string(s) ' + 'with ' + val + ' characters in each');
      });


//Этот код разбивает строки в массиве на указанное число символов

var arrSplited = [];
for (var i = 0; i < arr.length; i++) {
        arrSplited.push(arr[i].match(new RegExp('.{1,' + (i+1) + '}', 'g')));
}
// console.log(arrSplited); не обязательно выводить

// теперь все это перезаливаем в новый объект с ключами, начинающимся с 1, а не с 0

var objSplited = {};

for (var i = 0; i < arrSplited.length; i++) {
	objSplited[i+1]=arrSplited[i];
}
console.log(objSplited);

