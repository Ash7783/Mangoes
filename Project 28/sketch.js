const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var rope;
var boy, boyImage;
var tree;
var mango;

function preload() {
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);
	
	boy = createSprite(250, 590, 10, 10);
	boy.addImage(boyImage)
	boy.scale = 0.15

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 690, 1200, 20)
	stone = new Stone(170, 505, 30)
	tree = new Tree(950, 400, 500, 600)
	mango= new Mango(950,350,25)
	mango2= new Mango(850,350,25)
	mango3= new Mango(1050,350,25)
	mango4= new Mango(900,250,25)
	mango5= new Mango(1000,250,25)
	mango6= new Mango(1050,275,25)
	mango7= new Mango(800,280,25)
	mango8= new Mango(1000,150,25)
	mango9= new Mango(900,175,25)
	mango10= new Mango(1125,300,25)
	rope = new Rope(stone.body, { x: 170, y: 505 })





	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);
	text(mouseX + "," + mouseY, mouseX, mouseY)
	drawSprites();

	tree.display();
	ground.display();
	stone.display();
	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	rope.display();

	
	detectCollision(stone,mango)
	detectCollision(stone,mango2)
	detectCollision(stone,mango3)
	detectCollision(stone,mango4)
	detectCollision(stone,mango5)
	detectCollision(stone,mango6)
	detectCollision(stone,mango7)
	detectCollision(stone,mango8)
	detectCollision(stone,mango9)
	detectCollision(stone,mango10)



}

function detectCollision(stone,mango){
	
	mPos=mango.body.position;
	sPos=stone.body.position;

	var distance=dist(sPos.x,sPos.y,mPos.x,mPos.y);

	if(distance<=60	){
		Matter.Body.setStatic(mango.body,false);
	}
}


function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 170, y: 505 })
		rope.attach(stone.body);
	}
}