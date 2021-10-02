const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var engine, world
var blower, blowerMouth, ball;
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  blowerMouth = new BlowerMouth(500, 200, 100, 100);
  blower = new Blower(390, 200, 130, 30);
  ball = new Ball(500, 120, 30);
  button = createButton("Click to blow");
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}
function draw() {
  background(0);
  blowerMouth.display();
  blower.display();
  ball.display();
  Engine.update(engine);
}
function blow(){
  Matter.Body.applyForce(ball.body,{x: 0, y: 0}, {x: 0, y: 0.05});
}