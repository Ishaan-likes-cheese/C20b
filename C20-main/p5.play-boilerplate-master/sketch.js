var bg
var eat, eatanim;
var drink, drinkanim;
var gym, gymanim;
var sleep, sleepanim;
var bath, bathanim;
var brush, brushanim;
var move, moveanim;
var astronaut

function preload() {
bg = loadImage("Astro Img /iss.png" );
gym = loadAnimation("Astro Img /gym1.png","Astro Img /gym2.png","Astro Img /gym11.png"," Astro Img /gym12.png" );
sleep = loadImage ("Astro Img /sleep.png" );
bath = loadAnimation ("Astro Img/bath1.png","Astro Img /bath2.png" );
brush = loadImage ("Astro Img /brush.png" );
move = loadAnimation ( "Astro Img /move.png","Astro Img/move1.png" );
}

function setup() {  
  createCanvas(600,500);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background = bg 
  drawSprites(); 
 if (Keydown("UP_ARROW")){
astronaut.addAnimation ("brushing",brush);
astronaut.changeAnimation ("brushing");
astronaut.y = 350;
astronaut.velocityX= 0;
astronaut.velocityY= 0;
 }
 if (Keydown("DOWN_ARROW")){
  astronaut.addAnimation ("running",gym);
  astronaut.changeAnimation ("running");
  astronaut.y = 350;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}
if (Keydown("LEFT_ARROW")){
  astronaut.addAnimation ("eating",eat);
  astronaut.changeAnimation ("eating");
  astronaut.x = 150;
  astronaut.y = 350;
  astronaut.velocityX= 0.5;
  astronaut.velocityY= 0.5;
}
if (Keydown("RIGHT_ARROW")){
  astronaut.addAnimation ("bathing",bath);
  astronaut.changeAnimation ("bathing");
  astronaut.x = 300;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}
if (Keydown("m")){
  astronaut.addAnimation ("moving",move);
  astronaut.changeAnimation ("moving");
  astronaut.y = 350;
  astronaut.velocityX= 1;
  astronaut.velocityY= 1;
   }   
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
}