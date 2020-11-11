const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree;
var mango1,mango2,mango3,mango4,mango5,mango6;
var stone;
var boy,boyImg;

function preload(){
  boyImg = loadImage("Plucking-mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,10);
	tree = new Tree(600,600);
	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	mango6 = new Mango();

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(225);
  text(mouseX+" , "+ mouseY,100,100);

  image(boyImg,100,640,100,180);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  drawSprites(); 
}
