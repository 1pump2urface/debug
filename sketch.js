var movingBlock, fixedBlock
function setup() {
  createCanvas(800,400);
  movingBlock = createSprite(400, 200, 50, 50);
  movingBlock.velocityX = 3;
  fixedBlock = createSprite(600,200,50,90);
  fixedBlock.velocityX = -3;
  movingBlock.shapeColor = "red";
  fixedBlock.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  //object1.x = World.mouseX;
  //object1.y = World.mouseY;
  
bounceOff(movingBlock , fixedBlock);
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2)  {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX *(-1);
  } 
  if ( object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2  ){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY *(-1);
    }

}