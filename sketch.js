var bullet,wall;
var speed, weight, thichness;
  
function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
 
  weight = random(30,52)

 bullet = createSprite(100, 200, 50, 10);
 bullet.velocityX = 10;
 bullet.shapeColor = ("white")

 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor = (80,80,80)

  
}

function draw() {
  background("black");
  if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed/(thickness*thichness*thichness);
  if(damage>10){
    wall.shapcolor = color(255,0,0);
  }

  if(damage<10){
    wall.shapcolor=color(0,255,0)
  }
}


  drawSprites();
  hasCollided();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallleftEdge=wall.x;
if(bulletRightEdge>=wallleftEdge){
  return true
}
return false;
}