const Engine = Matter.Engine;
const Body = Matter.Bodies;
const World = Matter.World;

var engine , world ;
 
var gameState = 0;
 var boy ;

function preload(){
    
}

function setup(){
   createCanvas(800,400);
   boy = new Player(50,300);
   engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    Engine.update(engine);
    boy.display();

}
