var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
var ball_options = {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}


	engine = Engine.create();
	world = engine.world;

ball = Bodies.circle(290,100,30,ball_options)
World.add(world, ball)
ground1 = new Ground(800,670,1600, 20)
ground2 = new Ground(1100,600,20, 120)
ground3 = new Ground(1350,600,20, 120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  fill ("blue")
 ellipse(ball.position.x, ball.position.y, 30, 30)
 ground1.display()
 ground2.display()
 ground3.display()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:185,y:-175})
  }
}

