var canvas;
var ctx;
var FPS = 50;

var Player = function(x,y){
    this.x = x;
    this.y = y;

    this.draw = function(){
        ctx.fillstyle = '#FF000';
        ctx.fillRect(this.x, this.y, 50, 50);
    }

    this.moveRight = function(){
        this.x++;
    }
}

var player1 = new Player(10,100);
var player2 = new Player(10,200);
var player3 = new Player(10,300);


function inicializer(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(function(){
        main();
    }, 1000/FPS);
    
}

function cleanCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}

function main(){
    cleanCanvas();
    player1.draw();
    player2.draw();
    player3.draw();

    player1.moveRight();
    //console.log('function');
    
}

