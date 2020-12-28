
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	
	var BobDiameter=40

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	roofObject = new roof(width/2,height/2	,width/4,20)
	
	bobDiameter=50

	startBobpositionX=width/2
	startBobpositionY=height/4+500;

	bobObject1=new Bob(startBobpositionX-bobDiameter*2,startBobpositionY,bobDiameter);

	bobObject2=new Bob(startBobpositionX-bobDiameter,startBobpositionY,bobDiameter);

	bobObject3=new Bob(startBobpositionX,startBobpositionY,bobDiameter);

	bobObject4=new Bob(startBobpositionX+BobDiameter*1.3,startBobpositionY,BobDiameter*1.2);

	bobObject5=new Bob(startBobpositionX+BobDiameter*2.6,startBobpositionY,BobDiameter*1.2);



	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0)

	rope3=new rope(bobObject3.body,roofObject.body,0,0)

	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1,0)

	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2,0)


	
	Engine.run(engine);
  
}


function draw() {
  background("gray");
 Engine.update(engine);
 
  roofObject.display();


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

 
  

  drawSprites();
  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
}





