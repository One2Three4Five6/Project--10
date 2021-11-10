var seaImg;
var shipImg2;
var sea;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg2 = loadAnimation("ship-1.png","ship-2.png");
}
function setup(){
  createCanvas(1200,800);
  sea = createSprite(600,400);
  ship = createSprite(200,450);
sea.addImage("sea",seaImg);
ship.addAnimation("ship",shipImg2);
ship.scale = 0.5;
}

function draw() {
  background("blue");
  sea.velocityX = -5;
  if(sea.x<0){
    sea.x = sea.width/2
  }
 drawSprites();
 
}