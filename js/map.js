var canvas;
var ctx;
var FPS = 50;

var blockWith = 50;
var blockHeight = 50;

var grass = '#38a832';
var water = '#3281a8';
var ground = '#a87d32';

var stage = [
    [0,1,0,0,2],
    [0,1,1,0,0],
    [0,0,1,1,1],
    [0,2,2,2,2],
    [2,2,2,0,0]
];

function drawStage(){
    for (y=0; y<5; y++){
        for(x=0; x<5; x++){
            if(stage[y][x] == 0)
            color = grass;
            if(stage[y][x] == 1)
            color = water;
            if(stage[y][x] == 2)
            color = ground; 
            

            ctx.fillStyle = color;
            ctx.fillRect(x*blockWith,y*blockHeight ,blockWith, blockHeight);
        }
    }
}



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
    drawStage()
    
}

