const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;
var ground,tree;
var lmango,mango1,mango2,mango3,mango4,mango5,mango6;
var lstone,stone;
var boy,boyImg;
var sling;
var gameState = "on sling";

function preload(){
  boyImg = loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
	Engine.run(engine);  

	ground = new Ground(width/2,690,width,10);
	tree = new Tree(600,690);
  mango1 = new Mango(511,425,30);
  World.add(world,mango1);
  mango2 = new Mango(541,342,30);
  World.add(world,mango2);
  mango3 = new Mango(641,327,30);
  World.add(world,mango3);
  mango4 = new Mango(655,407,30);
  World.add(world,mango4);
  mango5 = new Mango(573,383,30);
  World.add(world,mango5);
  mango6 = new Mango(563,268,30);
  World.add(world,mango6);

  stone = new Stone(110,500,70);
  World.add(world,stone);

  sling = new SlingShot(stone.body,{x:105, y:504});
}


function draw() {
  rectMode(CENTER);
  background(225);

  image(boyImg,100,550,100,180);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}


function mouseDragged(){
  if(gameState !== "launched"){
   Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(stone.body);
      Matter.Body.setPosition(stone.body, {x: 110 , y: 500});
      Matter.Body.setAngle(stone.body,0);
      gameState = "on sling";
  }
}

function detectCollision(lstone,lmango){
  mangoPos = lmango.body.position;
  stonePos = lstone.body.position;

  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

  if(distance <= lmango.radius + lstone. radius){
    Matter.Body.setStatic(lmango.body,false);
  }

}
