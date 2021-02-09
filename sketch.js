
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var dground,tree,treeimg;
var boy,boyimg;
var stones,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;
	
	dground = new Ground();
	stones = new Stone(100,460,15);
	mango1=new Mango(630,209,25);
	mango2=new Mango(790,180,25);
	mango3=new Mango(890,240,25);
	mango4=new Mango(590,300,25);
	mango5=new Mango(690,320,25);
	mango6=new Mango(790,299,25);
	mango7=new Mango(740,240,25);
  mango8=new Mango(880,310,25);

	attach = new Throw(stones.body,{x:50,y:465});

	tree = createSprite(720,368);
	tree.addImage(treeimg);
	tree.scale = 0.42;
		
	boy = createSprite(120,550);
	boy.addImage(boyimg);
	boy.scale = 0.125;
	
	Engine.run(engine);

}

function draw() {
  
  background(255);

  fill(0);
  textSize(18);
  
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);

  drawSprites();

  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stones.display();

}


function mouseDragged(){
    Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   attach.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
    Matter.Body.setStatic(lmango.body , false);
 } 
}

function keyPressed(){
   if(keyCode===32){
   Matter.Body.setPosition(stones.body,{x:230,y:420})
   attach.launch(stones.body);

   }
}