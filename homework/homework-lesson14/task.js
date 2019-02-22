
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function TaskManager() {
    this.taskCollection = [];
}

TaskManager.prototype.addTask = function(elem) {
    this.taskCollection.push(elem);
};

function Tasks(title, describe, startTime, endTime) {
    this.title = title;
    this.describe = describe;
    this.startTime = startTime;
    this.endTime = this.startTime + 1; // задали секунду 
}
Tasks.describes = [
    'It\'s time to Get up!',
    'It\'s time to  have a dinner!',
    'It\'s time to  work!',
    'It\'s time to  code!',
    'It\'s time to  sleep!'
];


function getStartTime() {
    var defaultTime =  Math.floor(new Date()/1000) + counter;
    counter +=3; // задаем время(в секундах) между началом task
    return defaultTime;
}



var task = new TaskManager();

var counter = 1; // счетчик нужен, чтобы таски создавались не каждую секунду
                 // а в заданом в функции getStartTime() интервале: counter +=2

for (var i = 0; i < 10; i++) {
    
    task.addTask( new Tasks(
        'id-' + i,
        Tasks.describes[random(0, Tasks.describes.length - 1)],
        // Math.floor(new Date() / 1000)+(i+1),
        getStartTime()
        // Math.floor(new Date() / 1000)+(i+2)
))
    
}

console.log(task);

setInterval(function() {
    for (var i = 0; i < task.taskCollection.length; i++) {
        if(Math.floor(new Date() / 1000) === task.taskCollection[i].startTime) {
            
            var output = document.getElementById('demo');
            output.innerHTML = task.taskCollection[i].describe;
            
    }
        
    }
    
}, 1000);

 setInterval( function() {
        var time = new Date();
        document.getElementById('time').innerHTML = 
        time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

    }, 1000);








   
       
        


