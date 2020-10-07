var movingRect, fixedRect;

var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(300,300,50,80);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,300,50,50);
  gameObject2 = createSprite(700,300,50,50);

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
 if(isTouching(movingRect, fixedRect)){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
 }
 else if(isTouching(gameObject1, movingRect)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 }
 else if(isTouching(gameObject2,movingRect)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
 }
 else{
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  
  

  drawSprites();
}

