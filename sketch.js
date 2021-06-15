var MAN;
var MAN_img;
var ground;

function preload(){

 MAN_img = loadAnimation("S1.png","S2.png")
 


}


function setup() {
  createCanvas(800,400);
  
  
  MAN = createSprite(150, 350, 50, 50);
  MAN.addAnimation("MAN",MAN_img)
  
  ground = createSprite(400,390,800,20)
  ground.velocityX = -5;


}

function draw() {
  background("yellow");  
  MAN.collide(ground);
  
  if(ground.x<100){
 ground.x = ground.width/2;   
  }



  
  drawSprites();
}
