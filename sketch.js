const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;

var sun;
var engine,world;
var planet1,planet2;
var angle = 0;
var anglespeed = 0.3;

function setup(){
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;


  sun = createSprite(0,0,30,30); 
  sun.shapeColor = "yellow";
  sun.setCollider("circle",0,0,50);
  sun.scale = 0.1;
  planet1 = createSprite(210,60,10,10);
  planet1.shapeColor = "blue";
  planet2= createSprite(70,50,10,10);
  planet2.shapeColor = "red";
  planet1.scale = 0.2;
  planet2.scale = 0.2;
  planet2.setCollider("circle",0,0,50);
}
function draw(){
  background("white");
 angleMode(DEGREES);
 translate(width/2,height/2);
  rotate(angle);
  if(sun.collide(planet2)){
    planet2.destroy();
  }
  angle = angle+anglespeed;
  if(frameCount%10===0){
    sun.scale = sun.scale+0.01;
  }
  drawSprites();  
}
