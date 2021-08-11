const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var base1;
var base2;
var com;
var player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

	


  base1 = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);


  base2 = new ComBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  com = new ComPlayer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

 }

 function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

player.display();
base1.display();
com.display();
base2.display();

}
