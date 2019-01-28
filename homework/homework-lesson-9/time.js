




setInterval( function () {
    var date = new Date();
       document.getElementById("demo").innerHTML =
       date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds();
   }, 1000);   
