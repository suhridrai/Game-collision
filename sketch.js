var fixedRect , movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200,200,30,50);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(300, 400, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(500, 200, 80, 30);
  obj3.shapeColor = "green";
  obj3.debug = true;
  obj4 = createSprite(200,1000,30,50);
  obj4.shapeColor = "green";
  obj4.debug = true;
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(isTouching(obj1,movingRect)){
    movingRect.shapeColor = "red";
    obj1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green"
    obj1.shapeColor = "green"
  }

  drawSprites();
}

function isTouching(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
    }
  else{
    return false;
  }
}