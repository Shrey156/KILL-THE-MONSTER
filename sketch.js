const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,herO,fly,monsteR,backgroundImg;

var blocks = [];

function preload() {
//preload the images here
backgroundImg = loadImage("sky.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000, 600);
ground = new Ground(500,550,1000,20);
herO = new Hero(300,350,260,250);
fly = new Fly(herO.body,{x:300,y:100});
monsteR = new Monster(900,300);


for(var i =100;i<500;i=i+20){
  blocks.push(new Block(400,i));
}
}

function draw() {
  imageMode(CENTER); 
  background(backgroundImg);
  
  Engine.update(engine);

  ground.display();
  herO.display();
  fly.display();
  monsteR.display();

  for(var j =0;j < blocks.length;j++){
    blocks[j].display();
  }
}

function mouseDragged(){
Matter.Body.setPosition(herO.body,{x:mouseX,y:mouseY})
}