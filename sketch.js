
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope3,rope3,rope4,rope5;
var support;
var engine,world;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	support=new Roof(400,80,800,10)

	bob1=new Bob(200,500,20)
	rope1=new Rope(bob1.body,support.body,-80,0)

	bob2=new Bob(250,500,20)
	rope2=new Rope(bob2.body,support.body,-40,2)

	bob3=new Bob(300,500,20)
	rope3=new Rope(bob3.body,support.body,0,4)

	bob4=new Bob(350,500,20)
	rope4=new Rope(bob4.body,support.body,40,6)

	bob5=new Bob(400,500,20)
	rope5=new Rope(bob5.body,support.body,80,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("red");
  rope1.display()
  bob1.display()
  rope2.display()
  bob2.display()
  rope3.display()
  bob3.display()
  rope4.display()
  bob4.display()
  rope5.display()
  bob5.display()
  support.display()
  drawSprites();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){
		console.log("arrow pressed")
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-5})
		
	   
	 }

	}

