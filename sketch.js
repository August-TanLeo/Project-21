
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var canvas;
var ball;
var ground;
var leftSide;
var rightSide;


function setup() {
	canvas = createCanvas(700, 450);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
	isStatic: false,
	restitution:0.4,
	friction:0,
	density:1.2

 }

	
	//Create the Bodies Here.
    ball = Bodies.circle(30, 50, 22, ball_options);
	World.add(world, ball);

	ground =new Ground(300,400,995,15);
	leftSide =new Ground(350,348,15,85);
	rightSide =new Ground(500,348,15,85);

	Engine.run(engine);
	rectMode(CENTER);
  
}

function draw() {
  background(51);
  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 35);
  
  drawSprites();
 
}
function keyPresses() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x: 30, y: 50},{x: 1, y: 25});
}
}


