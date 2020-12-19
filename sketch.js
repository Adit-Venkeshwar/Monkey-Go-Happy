

var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;


function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  fruitGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {

  background(255);


  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time - " + survivalTime, 100, 50);

  
 ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  if (keyDown("space") && monkey.y > 314) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.5;

  monkey.collide(ground);
    
  
  
  if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
    monkey.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    
    obstaclesGroup.setLifetimeEach(-1);
    fruitGroup.setLifetimeEach(-1);
    
  }
  
  obstacles();
  fruits();
  drawSprites();
  console.log(monkey.y);
}

function fruits() {

  if (World.frameCount % 80 === 0) {
    bananna = createSprite(200, 200, 10, 10);
    bananna.addImage(bananaImage);
    bananna.y = Math.round(random(180, 180));
    bananna.velocityX = -3;
    bananna.lifetime = 134;
    bananna.scale = 0.1;

    fruitGroup.add(bananna);

  }
}

function obstacles() {
  if (World.frameCount % 80 === 0) {
    rock = createSprite(150, 150, 10, 10)
    rock.addImage(obstacleImage);
    rock.y = Math.round(random(330, 330));
    rock.velocityX = -3;
    rock.lifetime = 134;
    rock.scale = 0.1;

    obstaclesGroup.add(rock);

  }
}