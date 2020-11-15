const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;
var ground,tree;
var mango1,mango2,mango3,mango4,mango5,mango6;
var stone;
var boy,boyImg;
var sling;

function preload(){
  boyImg = loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,10);
	tree = new Tree(600,690);
  mango1 = new Mango(511,425,20);
  World.add(world,mango1);
  mango2 = new Mango(541,342,20);
  World.add(world,mango2);
  mango3 = new Mango(641,327,20);
  World.add(world,mango3);
  mango4 = new Mango(655,407,20);
  World.add(world,mango4);
  mango5 = new Mango(573,383,20);
  World.add(world,mango5);
  mango6 = new Mango(563,268,20);
  World.add(world,mango6);

  var options = {
    bodyA: sling,
    pointB: {x: 5,y: 5},
    stiffness: 0.04,
    length: 10
  }
  sling = Constraint.create(options);
  World.add(world,sling);

  stone = new Stone(40,40,40);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(225);
  text(mouseX+" , "+ mouseY,100,100);

  image(boyImg,100,550,100,180);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  this.sling.bodyA = null;
}