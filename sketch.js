var elephantImage, hippoImage, monkeyImage, pandaImage,hunter1,hunter2, hunter3, hunterImage, panda, elephant,hippo,monkey, wallGroup,animalGroup,hunterGroup, edges
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32
var score=0
function preload(){
elephantImage=loadImage("/images/elephants.png")
hippoImage=loadImage("/images/hippo.png")
monkeyImage=loadImage("/images/monkey.png")
pandaImage=loadImage("/images/panda.png")
hunterImage=loadImage("/images/hunter2.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight+300);
   panda=createSprite(900,750);
  panda.addImage(pandaImage)
  panda.scale=0.13

  elephant=createSprite(250,250);
  elephant.addImage(elephantImage)
  elephant.scale=0.13

  hippo=createSprite(720,350);
  hippo.addImage(hippoImage)
  hippo.scale=0.13

  monkey=createSprite(990,450);
  monkey.addImage(monkeyImage)
  monkey.scale=0.14

  elephant2=createSprite(1280,480);
  elephant2.addImage(elephantImage)
  elephant2.scale=0.13

  hunter1=createSprite(400,250);
  hunter1.addImage(hunterImage)
  hunter1.scale=0.12

  hunter2=createSprite(1000,550);
  hunter2.addImage(hunterImage)
  hunter2.scale=0.12

hunter2.velocityY=-3
hunter2.velocityX=-5

  hunter1.velocityY=3;
  hunter1.velocityX=5
  
  hunterGroup=new Group();

  animalGroup=new Group();

edges=createEdgeSprites();
  wallGroup=new Group();



   wall1=createSprite(250,100,5,200)
   wall2=createSprite(330,100,5,200)
   wall3=createSprite(700,150,5,530)
   wall4=createSprite(780,150,5,380)
   wall5=createSprite(153,200,200,5)
   wall6=createSprite(153,280,200,5)
   wall7=createSprite(250,380,5,200)
   wall8=createSprite(330,330,5,100)
   wall9=createSprite(415,200,177,5)
   wall10=createSprite(377,280,100,5)
   wall11=createSprite(430,415,5,270)
   wall12=createSprite(500,330,5,255)
   wall13=createSprite(520,550,180,5)
   wall14=createSprite(598,460,200,5)
   wall15=createSprite(700,510,5,100)
   wall16=createSprite(610,600,5,100)
   wall17=createSprite(840,560,280,5)
   wall18=createSprite(710,650,200,5)
   wall19=createSprite(805,825,5,350)
   wall20=createSprite(980,485,5,150)
   wall21=createSprite(840,415,280,5)
   wall22=createSprite(915,336,280,5)
   wall23=createSprite(1055,435,5,200)
   wall24=createSprite(1155,535,200,5)
   wall25=createSprite(1255,440,5,200)
   wall26=createSprite(1350,340,200,5)
   wall27=createSprite(1265,615,430,5)
   wall28=createSprite(1050,815,5,400)
   wall29=createSprite(360,383,60,5)
   wall30=createSprite(280,475,60,5)
   wall31=createSprite(310,770,5,585)
  wall32=createSprite(390,700,5,650)





}

function draw() {
  background("green");  
  if(keyDown(LEFT_ARROW)){
panda.x=panda.x-2
  }
  if(keyDown(RIGHT_ARROW)){
    panda.x=panda.x+2
  }
  if(keyDown(UP_ARROW)){
    panda.y=panda.y-2
  }
  if(keyDown(DOWN_ARROW)){
    panda.y=panda.y+2
  }
wallGroup.add(wall1);
wallGroup.add(wall2);
wallGroup.add(wall3);
wallGroup.add(wall4);
wallGroup.add(wall5);
wallGroup.add(wall6);
wallGroup.add(wall7);
wallGroup.add(wall8);
wallGroup.add(wall9);
wallGroup.add(wall10);
wallGroup.add(wall11);
wallGroup.add(wall12);
wallGroup.add(wall13);
wallGroup.add(wall14);
wallGroup.add(wall15);
wallGroup.add(wall16);
wallGroup.add(wall17);
wallGroup.add(wall18);
wallGroup.add(wall19);
wallGroup.add(wall20);
wallGroup.add(wall21);
wallGroup.add(wall22);
wallGroup.add(wall23);
wallGroup.add(wall24);
wallGroup.add(wall25);
wallGroup.add(wall26);
wallGroup.add(wall27);
wallGroup.add(wall28);
wallGroup.add(wall29);
wallGroup.add(wall30);
wallGroup.add(wall31);
wallGroup.add(wall32);

hunterGroup.add(hunter1)
hunterGroup.add(hunter2)

animalGroup.add(elephant);
animalGroup.add(elephant2);
animalGroup.add(monkey);
animalGroup.add(hippo);




panda.collide(wallGroup)

hunter1.bounceOff(edges);
hunter1.bounceOff(wallGroup)

hunter2.bounceOff(edges)
hunter2.bounceOff(wallGroup)

if(panda.isTouching(animalGroup)){
score=score+10;
animalGroup.destroyEach();
}

  drawSprites();
  fill("black")
  textSize(20)
text("score "+score,10,20)
}

 