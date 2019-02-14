
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function Squad() {
    this.warResources = [];
}

Squad.prototype.add = function(elem) {
    if( !(elem instanceof CreateResource) ) {
       return console.error('Error. Not CreateResource!');
    } 
       this.warResources.push(elem);
};

function CreateResource(type, maxLifeUnits, possibleDayDistance) {
    this.type = type;
    this.maxLifeUnits = maxLifeUnits;
    this.possibleDayDistance = possibleDayDistance;
    this.currentPossibleDistance = this.possibleDayDistance;
    this.lifeUnits = this.getLifeUnits();
    
}

CreateResource.prototype.getLifeUnits = function() {
    return random(1, this.maxLifeUnits);
};



CreateResource.prototype.setMoveDistance = function(numb) {
    
    this.currentPossibleDistance -= numb;
    if(this.currentPossibleDistance <= 0) {
        // return 'Error!' + ' ' + this.type + ' Movement limit is reached!';
        this.currentPossibleDistance = 'Error!' + ' ' + this.type + ' Movement limit is reached!'
    } else {
        return this.currentPossibleDistance;
    }
};

CreateResource.prototype.upgradeHealth = function() {
    /* elem = squad.warResources[elem]; 
    var difference = elem.maxLifeUnits - elem.lifeUnits;
    return elem.lifeUnits += difference; */
   return this.lifeUnits += (this.maxLifeUnits - this.lifeUnits);
};

CreateResource.prototype.upgradeDistance = function() {
    return this.currentPossibleDistance += (this.possibleDayDistance - this.currentPossibleDistance);
};
// -------------- ready for fight? true or false
CreateResource.prototype.readyForFight = function(limit) {
    limit = 3;
    if(this.lifeUnits < limit) {
        return false;
    }
    return true;
};

CreateResource.typePosition = ['soldier', 'horse', 'vehicle'];


var squad = new Squad();


for (let i = 0; i < 8; i++) {
      squad.add( new CreateResource(
          CreateResource.typePosition[random(0, CreateResource.typePosition.length - 1)] + ' id-'+(i+1),
          10,
          30 
      )
      )
}
// ------------------------------- функция задающая дистанцию движения
function addMoveDistance(resource, distance) {
    
    squad.warResources[resource].setMoveDistance(distance);
    
} 
//---------------------------------- точечно восстанавливаем здоровье
function addHealth(numb) {
   return squad.warResources[numb].upgradeHealth(); 
}

// -------------------------------------- узнаем готов ли к бою конкретный ресурс  ----
function readyForFight(resourceId) {
    console.log('Resource ' + squad.warResources[resourceId].type +
     ' is ready for fight: ' + squad.warResources[resourceId].readyForFight());
}
//------------------------------------ выявляем способных пройти конкретную дистанцию
function addReadyForDistance(distance) {
    for(var i = 0; i < squad.warResources.length; i++) {
        if(squad.warResources[i].currentPossibleDistance >= distance) {
            readyForDistance.push(squad.warResources[i]);
        }
    }
}
var readyForDistance = [];

//--------- меняем местами элементы массива: либо #1 деструктурирование либо #2 splice()
function rearrange(a,b) {
    [ squad.warResources[a], squad.warResources[b] ] = [ squad.warResources[b], squad.warResources[a] ];
    // squad.warResources.splice(a, 2, squad.warResources[b], squad.warResources[a]);
}

// ------------------------ объединяем массивы ----------
function concatArray(arr) {
   return squad.warResources = squad.warResources.concat(arr);
}
//------------------------ клонируем объект----------------

function cloneObject(index) {
    return Object.assign( {}, squad.warResources[index]);    // теряется наследование
    // return Object.create(squad.warResources[index]);      // сохраняется наследование
}

addMoveDistance(5, 50);         // приказываем конкретному ресурсу пройти конкретную дистанцию 
addHealth(5);                   // точечно полностью обноляем здоровье                       
addReadyForDistance(23);        // выявляем способных пройти дистанцию
rearrange(3,4);                 // меняем местами элементы массива
var clone = cloneObject(5);     // помещаем результаты клонирования в переменную clone 
console.log(clone);             // выводим clone
readyForFight(2);               // готов ли ресурс к бою
console.log(readyForDistance);  // масив с ресурсами готовыми к дистанции
var concatArr =
 concatArray(readyForDistance); // конкатенируем общий массив с ресурсами готовыми к дистанции
console.log(concatArr);         // выводим массив

console.log(squad);
                            








