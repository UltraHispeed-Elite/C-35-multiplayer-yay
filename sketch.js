var ball;
var database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
   ball = createSprite(250,250,20,20);
   ball.shapeColor=("red");

   var ballPosition = database.ref('ball/position');
   ballPosition.on("value", readPosition)
}

function draw(){
    background("white");
  if(keyDown("left_arrow")){
writePosition(-1,0);
  }
  if(keyDown("right_arrow")){
    writePosition(1,0);
      }
      if(keyDown("up_arrow")){
        writePosition(0,-1);
          }
          if(keyDown("down_arrow")){
            writePosition(0,1);
              }
              drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
