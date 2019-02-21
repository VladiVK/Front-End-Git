
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
    this.endTime = endTime;
}
Tasks.describes = [
    'It\'s time to Get up!',
    'It\'s time to  have a dinner!',
    'It\'s time to  work!',
    'It\'s time to  code!',
    'It\'s time to  sleep!'
];

var task = new TaskManager();


for (var i = 0; i < 5; i++) {
    task.addTask( new Tasks(
        'id-' + i,
        Tasks.describes[random(0, Tasks.describes.length - 1)],
        Math.floor(new Date() / 1000)+(i+1),
        Math.floor(new Date() / 1000)+(i+2)
))
    
}

console.log(task);

setInterval(function() {
    for (var i = 0; i < task.taskCollection.length; i++) {
        if(Math.floor(new Date() / 1000) === task.taskCollection[i].startTime) {
            
            document.getElementById('demo').innerHTML = task.taskCollection[i].describe;

            document.getElementById('demo2').innerHTML = new Date().getHours() +
             ':' + new Date().getHours() + ':' + new Date().getSeconds();
    }
        
    }
    
}, 1000);



