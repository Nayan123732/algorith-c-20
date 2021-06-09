var fixedRect,movingRect;
function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 200, 80, 30);
 movingRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
 movingRect.velocityX = 5;
 movingRect.velocityY = 0.5;
}

function draw() {
  background(255,255,255); 
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor ="red";
    movingRect.shapeColor ="red";

 }
 if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
   movingRect.velocityX = movingRect.velocityX*(-1) 
   movingRect.velocityY = movingRect.velocityY*(-1) 

}
  drawSprites();
}