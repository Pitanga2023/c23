
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

Engine.update(engine);
var plane_options={
	isStatic:true

}
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  rotator1 = Bodies.rectangle(250,200,150,20, rotator_options);
  world.add(world,rotator1)
  rotator2 = Bodies.rectangle(250,200,150,20, rotator_options);
  world.add(world,rotator2)
  rotator3 = Bodies.rectangle(250,200,150,20, rotator_options);
  world.add(world,rotator3)
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate (angle1);
  rec(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate (angle2);
  rec(0,0,160,30);
  pop();
  angle2 +=0.1;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate (angle3);
  rec(0,0,170,40);
  pop();
  angle3 +=0.3;
var particle_options = {
	restitution:0.4,
	friction:0.02,
}

particle1 = Bodies.circle(220,10,10, particle_options),
World.add(world,particle1),
  drawSprites();
 
}



