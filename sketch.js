var garden,rabbit;
var gardenImg,rabbitImg;
var obstacle ;
var apple, appleGroup, appleImage;
var leaf1, leaf2, leaf3;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");

  leaf1 = loadImage("leaf.png");

  leaf2 = loadImage("orangeleaf.png");

  leaf3 = loadImage("redimage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  //spawn the clouds
  spawnApple();
  spawnleaf();



  drawSprites();
}


function spawnApple() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    apple = createSprite(400,100,40,10);
    apple.addImage(appleImage);
    apple.x = Math.round(random(10,60));
    apple.scale = 0.1;
    apple.velocityY = 3;
    
    
    //assigning lifetime to the variable
    apple.lifetime = 134
    
    //adjust the depth
    apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
  }
}

function spawnleaf(){
  //write code here to spawn the obstacles
    if (frameCount % 60 === 0) {
       leaf = createSprite(200,160,40,10);
       leaf.velocityY = 3;
      
       var rand = Math.round(random(1,6));
       console.log(rand);
  
       switch(rand) {
         
           case 1 : leaf.addImage(leaf1);
                    break;
           case 2 : leaf.addImage(leaf2);
                    break;
           case 3 : leaf.addImage(leaf3);
                    break;
           
       }
       leaf.scale = 0.1;
       leaf.lifetime = 300;
    }
  
  
  
  }

