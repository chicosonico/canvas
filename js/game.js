var canvas;
var ctx;
var FPS = 50;

var impSaxPlayer; 


var player = function(x,y){
    this.x = x;
    this.y = y;

    this.draw = function(){
      ctx.drawImage(impSaxPlayer, this.x, this.y);
    }
}

//create blocks template - class
var Square = function(x,y){
    this.x = x;
    this.y = y;
    this.rightMargin = true;

    this.draw = function(){
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 50, 50);
    }

    this.move = function(speed){
        if(this.rightMargin == true){
            if(this.x < 400){
             this.x+= speed;
            }else{
            this.rightMargin = false;
          }
        } 
       else{
        if(this.x > 10){
          this.x-=speed;
        }else{
          this.rightMargin = true;
        }
    }
  }

}
//create 3 blocks
var square1 = new Square(10,100);
var square2 = new Square(10,200);
var square3 = new Square(10,300);

//create main player
var player = new player(200,200);


function inicializer(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
//upload image palyer
    impSaxPlayer = new Image();
    impSaxPlayer.src = 'img/saxplayer.png';
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
    square1.draw();
    square2.draw();
    square3.draw();

    square1.move(1);
    square2.move(3);
    square3.move(7);
  
    player.draw();
}

