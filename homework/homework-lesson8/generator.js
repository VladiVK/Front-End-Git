
function random(min, max) {
    return Math.round(Math.random()*(max - min) + min);
 }
 
function generateWords(numberOfStrings, minChars, maxChars, template) {
     minChars = minChars || 1;
     maxChars = maxChars || minChars + 9;
     //maxChars = maxChars ? maxChars : minChars + 9;
     template = template  || 'abcdefghijklmnopqrstuvwxyz';
     var obj = {};
     for(var i = 0; i < numberOfStrings; i++) {
     var currentLengsOfString = random(minChars, maxChars); // use function random()
     
     var tempString = '';
     for(var j = 0; j < currentLengsOfString; j++) {
         tempString += template[random(0, template.length - 1)];
     } //console.log(tempString);
 
     var createdArray = [tempString];         // it is object
     obj[currentLengsOfString] = obj[currentLengsOfString] ?
                  obj[currentLengsOfString].concat(createdArray): createdArray;
     }
     return obj;
 }
 
 var wordsObject = generateWords(10);
 console.log(wordsObject);

 for(var key in wordsObject) {
     console.log('we created ' + wordsObject[key].length +
      ' strings with ' + key + ' characters');
 }


