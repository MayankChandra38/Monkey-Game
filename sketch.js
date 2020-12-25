//for monkey
var monkey , monkey_running;
//for banana and obstacle
var banana ,bananaImage, obstacle, obstacleImage;
//for food and obstacle group
var FoodGroup, obstacleGroup;
//for score
var score;
//for ground
var ground;
//for invisible ground
var invisibleGround;
//for survival time
var Survivaltime;

function preload(){
//for loading monkey image  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
//for loading banana&obstacle image  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
}

function setup() {
    //for creating game area
    createCanvas(400,400);
    //for creating monkey and adding animation to it  
    monkey = createSprite(40,315,10,10);
    monkey.addAnimation("running",monkey_running);
    monkey.scale = 0.09;
    //for creating ground and adding velocity to it  
    ground = createSprite(400,350,900,10);
    ground.velocityX=-4;
    //for creating invisible and adding velocity to it  
    invisibleGround = createSprite(400,355,900,10);
    invisibleGround.velocityX=-4;
    invisibleGround.visible = false;
    //for survival time  
    Survivaltime = 0;
    //for food and obstacle group
    FoodGroup = createGroup();
    obstacleGroup = createGroup();
}

function draw() {
    //for setting background white
    background("white");
    //for reseting ground 
    if(ground.x > 0) {
      ground.x = ground.width/2;
    }
    //for reseting invisible ground  
    if(invisibleGround.x > 0) {
      invisibleGround.x = invisibleGround.width/2;
    }
    //for monkey to jumping
    if(keyDown("space")&&monkey.y>=315) {
      monkey.velocityY=-12;
    }
    //for adding gravity to monkey
    monkey.velocityY = monkey.velocityY+0.8;
    //for monkey to colliding from invisible ground
    monkey.collide(invisibleGround);
    //for displaying score
    stroke("white");
    textSize(20);
    fill("white");
    text("Score:"+ Survivaltime,300,50);
    //for displaying survival time  
    stroke("black");
    textSize(20);
    fill("black");
    Survivaltime=Survivaltime+Math.round(getFrameRate()/60);
    text("Survival time:"+ Survivaltime,130,50);
    //for displaying sprites
    drawSprites();
    //for displaying bananas  
    banana();
    //for displaying obstacles
    obstacles();
}
//for creating bananas
function banana() {
  if(frameCount%80===0) {
        fruit=createSprite(390,10,10,10);
        fruit.y = Math.round(random(200,300));
        fruit.addImage(bananaImage);
        fruit.scale = 0.1;
        fruit.velocityX=-6;
        fruit.lifetime = 100;
        FoodGroup.add(fruit);
  }
}
//for creating obstacles
function obstacles() {
  if(frameCount%300===0) {
        monster = createSprite(385,335,10,10);
        monster.addImage(obstaceImage);
        monster.scale = 0.1;
        monster.velocityX = -6;
        monster.lifetime = 300;
        obstacleGroup.add(monster);
  }
}
