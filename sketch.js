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


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(250, 590, 10, 10);
	boy.addImage(boyImage)
	boy.scale = 0.15

	//Create the Bodies Here.
	stone = new Stone(170, 505, 30)
	rope = new Rope(stone.body, { x: 170, y: 505 })
	tree = new Tree(950, 400, 500, 600)
	mango= new Mango(950,350,25)


	ground = new Ground(600, 690, 1200, 20)




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
	rope.display();
	mango.display();

	detectCollision(stone,mango)



}

/*
function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false)
		console.log("touched")
	}
}
*/



function detectCollision(stone,mango){
	
	mPos=mango.body.position;
	sPos=stone.body.position;

	var distance=dist(sPos.x,sPos.y,mPos.x,mPos.y);

	if(distance<=45){
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