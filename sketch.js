const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
//var slingShot;
var polygon_img;
//var pol;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1366,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(690,500,480,10);
  //stand2 = new Stand(700,200,250,10);
 
  //level one
  block = new Block(480,475,30,40);
  block17 = new Block(510,475,30,40);
  block18 = new Block(540,475,30,40);
  block19 = new Block(570,475,30,40);
  block20 = new Block(810,475,30,40);
  block21 = new Block(840,475,30,40);
  block22 = new Block(870,475,30,40);
  block23 = new Block(900,475,30,40);
  block24 = new Block(480,435,30,40);
  block25 = new Block(480,395,30,40);
  block26 = new Block(480,355,30,40);
  block27 = new Block(480,315,30,40);
  block28 = new Block(780,435,30,40);
  block29 = new Block(780,395,30,40);
  block30 = new Block(780,355,30,40);
  block31 = new Block(780,315,30,40);
  block32 = new Block(600,435,30,40);
  block33 = new Block(600,395,30,40);
  block34 = new Block(600,355,30,40);
  block35 = new Block(600,315,30,40);
  block36 = new Block(900,435,30,40);
  block37 = new Block(900,395,30,40);
  block38 = new Block(900,355,30,40);
  block39 = new Block(900,315,30,40);
  block1 = new Block(600,475,30,40);
  block75 = new Block(480,275,30,40);
  block76 = new Block(510,275,30,40);
  block77 = new Block(540,275,30,40);
  block78 = new Block(570,275,30,40);
  block79 = new Block(810,275,30,40);
  block80 = new Block(840,275,30,40);
  block81 = new Block(870,275,30,40);
  block82 = new Block(900,275,30,40);
  block83 = new Block(630,275,30,40);
  block84 = new Block(660,275,30,40);
  block85 = new Block(690,275,30,40);
  block86 = new Block(720,275,30,40);
  block87 = new Block(750,275,30,40);
  block88 = new Block(780,275,30,40);
  block89 = new Block(600,275,30,40);
  //level two
  console.log(block1);
  block2 = new Block(630,475,30,40);
  block3 = new Block(660,475,30,40);
  block4 = new Block(690,475,30,40);
  block5 = new Block(720,475,30,40);
  block6 = new Block(750,475,30,40);
  block7 = new Block(780,475,30,40);
  //level two
  block8 = new Block(630,435,30,40);
  block9 = new Block(660,435,30,40);
  block10 = new Block(690,435,30,40);
  block11 = new Block(720,435,30,40);
  block12 = new Block(750,435,30,40);
  block40 = new Block(510,435,30,40);
  block41 = new Block(540,435,30,40);
  block42 = new Block(570,435,30,40);
  block43 = new Block(810,435,30,40);
  block44 = new Block(840,435,30,40);
  block45 = new Block(870,435,30,40);
  block46 = new Block(570,395,30,40);
  block47 = new Block(570,355,30,40);
  block48 = new Block(570,315,30,40);
  block49 = new Block(630,395,30,40);
  block50 = new Block(630,355,30,40);
  block51 = new Block(630,315,30,40);
  block52 = new Block(750,395,30,40);
  block53 = new Block(750,355,30,40);
  block54 = new Block(750,315,30,40);
  block55 = new Block(810,395,30,40);
  block56 = new Block(810,355,30,40);
  block57 = new Block(810,315,30,40);
  block90 = new Block(630,235,30,40);
  block91 = new Block(660,235,30,40);
  block92 = new Block(690,235,30,40);
  block93 = new Block(720,235,30,40);
  block94 = new Block(750,235,30,40);
  block95 = new Block(510,235,30,40);
  block96 = new Block(540,235,30,40);
  block97 = new Block(570,235,30,40);
  block98 = new Block(810,235,30,40);
  block99 = new Block(840,235,30,40);
  block100 = new Block(870,235,30,40);
  block108 = new Block(480,235,30,40);
  block109 = new Block(900,235,30,40);
  block110 = new Block(600,235,30,40);
  block111 = new Block(780,235,30,40);
  //level three
  block13 = new Block(660,395,30,40);
  block14 = new Block(690,395,30,40);
  block15 = new Block(720,395,30,40);
  block58 = new Block(510,395,30,40);
  block59 = new Block(540,395,30,40);
  block60 = new Block(840,395,30,40);
  block61 = new Block(870,395,30,40);
  block62 = new Block(540,355,30,40);
  block63 = new Block(540,315,30,40);
  block64 = new Block(840,355,30,40);
  block65 = new Block(840,315,30,40);
  block66 = new Block(660,355,30,40);
  block67 = new Block(660,315,30,40);
  block68 = new Block(720,355,30,40);
  block69 = new Block(720,315,30,40);
  block101 = new Block(660,195,30,40);
  block102 = new Block(690,195,30,40);
  block103 = new Block(720,195,30,40);
  block104 = new Block(510,195,30,40);
  block105 = new Block(540,195,30,40);
  block106 = new Block(840,195,30,40);
  block107 = new Block(870,195,30,40);
  block112 = new Block(630,195,30,40);
  block113 = new Block(750,195,30,40);
  block114 = new Block(480,195,30,40);
  block115 = new Block(900,195,30,40);
  //last
  block116 = new Block(660,155,30,40);
  block117 = new Block(690,155,30,40);
  block118 = new Block(720,155,30,40);
  block119 = new Block(480,155,30,40);
  block120 = new Block(900,155,30,40);
  block121 = new Block(510,155,30,40);
  block122 = new Block(870,155,30,40);
  //top
  block16 = new Block(690,355,30,40);
  block70 = new Block(510,355,30,40);
  block71 = new Block(510,315,30,40);
  block72 = new Block(870,355,30,40);
  block73 = new Block(870,315,30,40);
  block74 = new Block(690,315,30,40);
  block123 = new Block(690,115,30,40);
  block124 = new Block(480,115,30,40);
  block125 = new Block(900,115,30,40);

  pol = Bodies.circle(50,200,20);
  World.add(world,pol);

  rubber = new RubberBand(this.pol,{x:100,y:250});
  

}
function draw() {
  background(56,44,44); 
   imageMode(CENTER)
   image(polygon_img,pol.position.x,pol.position.y,40,40);
   textSize(30);
   text("Press Space to get a second Chance to Play!!",420 ,50);
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  //stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block75.display();
  block76.display();
  block77.display();
  block78.display();
  block79.display();
  block80.display();
  block81.display();
  block82.display();
  block83.display();
  block84.display();
  block85.display();
  block86.display();
  block87.display();
  block88.display();
  block89.display();
  fill("yellow");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block90.display();
  block91.display();
  block92.display();
  block93.display();
  block94.display();
  block95.display();
  block96.display();
  block97.display();
  block98.display();
  block99.display();
  block100.display();
  block108.display();
  block109.display();
  block110.display();
  block111.display();
  fill("darkblue");
  block13.display();
  block14.display();
  block15.display();
  block58.display();
  block59.display();
  block60.display();
  block61.display();
  block62.display();
  block63.display();
  block64.display();
  block65.display();
  block66.display();
  block67.display();
  block68.display();
  block69.display();
  block101.display();
  block102.display();
  block103.display();
  block104.display();
  block105.display();
  block106.display();
  block107.display();
  block112.display();
  block113.display();
  block114.display();
  block115.display();
  fill("black");
  block16.display();
  block70.display();
  block71.display();
  block72.display();
  block73.display();
  block74.display();
  block123.display();
  block124.display();
  block125.display();
  fill(237,18,18);
  block116.display();
  block117.display();
  block118.display();
  block119.display();
  block120.display();
  block121.display();
  block122.display();
  //pol.display();
  rubber.display();
 
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pol, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rubber.fly();
}
function keyPressed(){
  if(keyCode === 32){
      rubber.attach(this.pol);
  }
}