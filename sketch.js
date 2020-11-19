var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
    box1=createSprite(400,648,200,20);
	box1.shapeColor="red";
	/* the below lines were missing, you were just creating the box sprite using p5 editor
	and not creatinng physics engine rectangle over those three boxes, i added the code
	for that */
    box1Body=Bodies.rectangle(400,648, 200,20 , {isStatic:false} );
	World.add(world, box1Body);


	box2=createSprite(300,610,20,100);
    box2.shapeColor="red";
    box2Body=Bodies.rectangle(300,610, 20,200 , {isStatic:true} );
	World.add(world, box2Body);
	
	
	box3=createSprite(500,610,20,100);
    box3.shapeColor="red";
    box3Body=Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world, box3Body);

    Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }

  if (keyCode===LEFT_ARROW){
	  helicopterSprite.x=helicopterSprite.x-10;
	 translation={x:-10,y:0}
	 Matter.Body.translate(packageBody,translation)
  }

  if (keyCode===RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+10;
   translation={x:10,y:0}
   Matter.Body.translate(packageBody,translation)
	}
}



