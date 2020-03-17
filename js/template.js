var canvas;
var ctx;
var FPS = 50;


function inicializer(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

//set frames
    setInterval(function(){
        main();
    }, 1000/FPS);
    
}
// init canvas
function cleanCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}

//main function where everything happends

function main(){
    cleanCanvas();
}

