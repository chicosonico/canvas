var canvas;
var ctx;
var FPS = 50;

var blockWith = 50;
var blockHeight = 50;

var door    = '#12110e';
var grass   = '#38a832';
var ground  = '#a87d32';
var doorKey = '#edea1a';


var stage = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,0,0,2,2,0,0],
    [0,0,2,2,2,2,2,0,0,0],
    [0,0,2,0,0,0,2,2,0,0],
    [0,0,2,2,2,0,0,2,0,0],
    [0,2,2,0,0,0,0,2,0,0],
    [0,0,2,0,0,0,2,2,2,0],
    [0,1,2,2,0,0,3,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

function drawStage(){
    for (y=0; y<10; y++){
        for(x=0; x<10; x++){
            if(stage[y][x] == 0)
            color = grass;
            if(stage[y][x] == 1)
            color = doorKey;
            if(stage[y][x] == 2)
            color = ground; 
            if(stage[y][x] == 3)
            color = door; 
            

            ctx.fillStyle = color;
            ctx.fillRect(x*blockWith,y*blockHeight ,blockWith, blockHeight);
        }
    }
}


//class player
var Player = function(){
    this.x = 1;
    this.y = 1;
    this.speed = 1;
    this.color = '#820c01';
    this.doorKey = false;
 
    this.draw = function(){
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x*blockWith,this.y*blockHeight ,blockWith, blockHeight);

    }
    this.margins = function(x, y){
        var colision = false;

        if(stage[y][x] == 0){
           colision = true;
        }
        return(colision);
    }

    this.up = function(){
        if(this.margins(this.x, this.y-1) == false){
            this.y -= this.speed;
            this.logicObject();
        }
        
    }

    this.down = function(){
        if(this.margins(this.x, this.y+1) == false){
            this.y += this.speed;
            this.logicObject();
        }
    }

    this.left = function(){
        if(this.margins(this.x-1, this.y) == false){
            this.x -= this.speed;
            this.logicObject();
        }
    }

    this.right = function(){
        if(this.margins(this.x+1, this.y) == false){
            this.x += this.speed;
            this.logicObject();
        }
    }

    this.goal = function(){
      console.log('You win!');
      this.x = 1;
      this.y = 1;
      this.doorKey = false;
      stage[7][1] = 1;
    }

    this.logicObject = function(){
        var objectSearch = stage[this.y][this.x];
    // getting the door key
        if(objectSearch == 1){
            this.doorKey = true;
            stage[this.y][this.x] = 2;
            console.log('You got the Key!');   
        }
        //open the door
        if(objectSearch == 3){
            if(this.doorKey == true){
            this.goal();
            }else{
                console.log('You need the key');
                
            }
            
        }

    }
       

}

//create player

var player = new Player();


function inicializer(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

// create event listener for the main player
document.addEventListener('keydown', function(key){
    //console.log(key.keyCode); //this is for get the codes for the keys
      
    //UP
    if (key.keyCode == 38){
      player.up();
    }
  
    //DOWN
    if (key.keyCode == 40){
        player.down();
    }
  
    //LEFT
    if (key.keyCode == 37){
       player.left();
    }
  
    //RIGHT
    if (key.keyCode == 39){
        player.right();
    }
  })

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
    drawStage();
    player.draw();
    
}

