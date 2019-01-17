/* Подготовить строку из всех возможных букв английского алфавита.
Зачада:
1. Спросить у пользователя какое количество рандомных значений нужно
создать и какое минимальное и максимальное количество символов в
них должно быть.

2. Заполнить массив рандомными строками в количестве, указанном
пользователем, состоящими из значений соответствующей длины

3. Сообщить пользователю какое количество слов какой длины было
добавлено. 
К примеру: 5 words with 10 characters, 7 words with 3 characters etc.

4. Сгруппировать слова в объект по количеству значений в
строке: {  1: [‘a’, ‘b’, ‘c’, ‘d’], 2: [‘ab’, ‘cd’, ‘ef’, ‘gh’] } 

Полезные предложения
http://qaru.site/questions/49329/counting-the-occurrences-frequency-of-array-elements
*/


var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var numberOfRandomStrings =
        Number(prompt('How many strings do you need?'));
var min = Number(prompt('Note min number of characters in each string!'));
        
var max = Number(prompt('Note max number of characters in each string!'));



var arr = [];
for (var i = 0; i < numberOfRandomStrings; i++) {
    var stringLength = Math.floor(Math.random() * ((max+1) - min)) + min;
    var randomStart = Math.floor(Math.random() * ((alphabet.length - 1) - max));
    var temporaryString = alphabet.substr(randomStart, stringLength);
    arr.push(temporaryString);
}
console.log(arr);

var arrByLength = [];
for (var y = 0; y < arr.length; y++) {
    arrByLength.push(arr[y].length);
}
console.log(arrByLength);

// we need output: 

//////////////////////////////////////////////////////////
/* var arrOne = [];
arrOne = arrByLength.filter(findDuplicates);

function findDuplicates (value) {
        return value === arrByLength[i];

}
console.log(arrOne);
console.log('We create ' + arrOne.length
         + ' strings with ' + arrByLength[0] + ' characters'); */
///////////////////////////////////////////////////////////////////

//console.log(arrByLength.filter(function(x){return x=== arrByLength[0]}).length)




// find unique values in a new array

/* var a = [4,5,6,7,8,8,8,];
var uniqueArray=[];
uniqueArray = a.filter(function(item, index) {
        return a.indexOf(item) == index;
    }) */

// находим сколько уникальных строк и с каким числом знаков
    /* function findNumbersOfstrings(arr) {
        var a = [], b = [], prev;
    
        arr.sort(function(a,b) {return a-b});
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]); // one type of value in array
                b.push(1); // number of this value string in array
            } else {
                b[b.length-1]++;
            }
            prev = arr[i];
        }
        
        dataArray = [a, b];
        return dataArray;
    }
    
    findNumbersOfstrings(arrByLength);
    console.log(dataArray);
    */

   // недоделка
   /*  for (var i = 0; i < dataArray[1].length; i++) {
        console.log('We create ' + dataArray[i+1][i]
        + ' strings with ' + dataArray[i][i] + ' characters');
    }  */
    
    // создаем объект с числом строк и знаков в них
    
    var resultObject = { };
    for(var i = 0; i < arrByLength.length; ++i) {
        if(!resultObject[arrByLength[i]])
            resultObject[arrByLength[i]] = 0;
        ++resultObject[arrByLength[i]];
    }

    console.log(resultObject);

    // Очень крутой методот Object.getOwnPropertyNames
    // Я специально поменял местами вывод: сначало значение resultObject[val],
    // а потом ключ val
    // А так он выдаст ключ:значение объекта
    Object.getOwnPropertyNames(resultObject).forEach(function(val, idx, array) {
        console.log('We create ' + resultObject[val]
         + ' string(s) ' + 'with ' + val + ' characters in each');
      });
/////////////////////////////////////////////////////////////////////////

// Этот код разбивает строки в массиве на указанное число символов
//var a = ['ggggfgfgfgfh', 'fghjr', 'ghgjfj', 'ghdk'];
var arrSplited = [];
for (var i = 0; i < arr.length; i++) {
        arrSplited.push(arr[i].match(new RegExp('.{1,' + (i+1) + '}', 'g')));
}
console.log(arrSplited);
//////////////////////////////////////////////////////////////////////////
//var a = ['ggggfgfgfgfh', 'fghjr', 'ghgjfj', 'ghdk'];
var objSplited = {};

for (var i = 0; i < arrSplited.length; i++) {
	objSplited[i+1]=arrSplited[i];
};

console.log(objSplited);
///////////////////////////////////////////////////////////////////////
















      /* var arr = ['fgfhfj', 'ghydk', 'fjvjd', 'fhhfk'];
      var arr2 = [];
      for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i].match(/.{(i+1)}/g));
      };
      
      arr2; */






/* var arr2 = [];
for (var s = 0; s < arrByLength.length; s++) {
    if (arrByLength[s] === arrByLength[s + 1]) {
        arr2.push(arrByLength[s] );
    }
}

console.log(arr2); */

/* var obj = {};
for (var y = 0; y < arr.length; y++) {
    obj[y] = arr[y];
}
console.log(obj); */






