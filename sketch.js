
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const MouseConstraint = Matter.MouseConstraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	canvas = createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Pendulam(250,400,50);
	bobObject2 = new Pendulam(300,400,50);
	bobObject3 = new Pendulam(350,400,50);
	bobObject4 = new Pendulam(400,400,50);
	bobObject5 = new Pendulam(450,400,50);

	rope1 = new Rope(bobObject1.body, {x:250, y:150});
	rope2 = new Rope(bobObject2.body, {x:300, y:150});
	rope3 = new Rope(bobObject3.body, {x:350, y:150});
	rope4 = new Rope(bobObject4.body, {x:400, y:150});
	rope5 = new Rope(bobObject5.body, {x:450, y:150});
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(250);

  bobObject1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function mouseDragged() {
	Matter.Body.setPosition(bobObject1.body, {x:mouseX, y:mouseY});
  }
