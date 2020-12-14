const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
  }
    
}
 
function draw() {
  background("black");

  textSize(18)
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(20)
  text(" 500 ", 20, 550);
  text(" 500 ", 100, 550);
  text(" 500 ", 180, 550);
  text(" 500 ", 260, 550);
  text(" 100 ", 340, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 500, 550);
  text(" 200 ", 580, 550);
  text(" 200 ", 660, 550);
  text(" 200 ", 740, 550);

  Engine.update(engine)

  ground.display();
  
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>700){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(turn>=5)gameState="end"
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>700){
      if(particle.body.position.x>301&&particle.body.position.x<600){
        score=score+100;
        particle=null;
        if(turn>=5)gameState="end"
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>700){
      if(particle.body.position.x>601&&particle.body.position.x<900){
        score=score+200;
        particle=null;
        if(turn>=5)gameState="end"
      }
    }
  }
  if(gameState=="end"){
    textSize(50)
    text("GameOver",300,350)
  }
 

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
    }
  
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   ground.display();
}


function mousePressed(){
  if(gameState!=="end"){
      turn++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}