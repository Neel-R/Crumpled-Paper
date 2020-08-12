
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, dustbin1, dustbin2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("Black");


	engine = Engine.create();
	world = engine.world;

	var paper = new Paper (200,600,10);
	var dustbin = new Dustbin (700,600,50,10);
	var dustbin1 = new Dustbin (750,550,10,50);
	var dustbin2 = new Dustbin (650,550,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

