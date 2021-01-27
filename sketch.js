const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var boy,boyImg,virusImg,vaccineImg,vaccine,ground,dayBackgroundImg,nightBackgroundImg;
var maxVirus = 100;
var virus = [];
var slingshot;
var engine;
var bodies;
var world;
var score;
var covidCases;
var rect1,rect2,rect3;

function preload(){
   dayBackgroundImg = loadImage("images/1.jpg");
}

function setup(){
   createCanvas(1900,950);
   rectMode(CENTER);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(500,height,3000,20);
   vaccine = new Vaccine(50,10,100,100,PI / 2);
   boy = new Boy(vaccine.body,{x: 200,y: 100});
   if(frameCount % 150 === 0){
      for(var i = 0; i < maxVirus;i++){
        virus.push(new Virus(random(0,1900),random(0,1900),1000,1000));
       }
      }
   score = 0;
   covidCases = 0;
}

function draw(){
   background(dayBackgroundImg);
   Engine.update(engine);
   ground.display();
   vaccine.display();
   boy.display();
   for(var i = 0; i < maxVirus;i++){
      virus[i].display();
      virus[i].update();
    }
    textSize(35);
    fill("blue");
    text("Score:  " + score, width-300, 50);
    text("Covid-19 Cases:  " + covidCases, 30, 50);
}

function mouseDragged(){
       Matter.Body.setPosition(vaccine.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   boy.fly();
}

function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(vaccine.body,{x: 200,y: 50});
      boy.attach(vaccine.body);
   }
}