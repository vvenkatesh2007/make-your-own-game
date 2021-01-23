var map1;
var map2;
var map3,photo1,photo2,photo3,photo4,
photo5,photo6,photo7,photo8;
var photo9,photo10,photo11,enemyphoto;
var photo12,photo13,photo14,photo15,photo16;
function preload(){
//map1=loadImage("images/map1.jpg")
//map2=loadImage("images/map2.jpg")
//map3=loadImage("image/map3.jpg")
photo1=loadImage("images/image1.png")
photo2=loadImage("images/image2.png")
photo3=loadImage("images/image3.png")
photo4=loadImage("images/image4.png")
photo5=loadImage("images/image5.png")
photo6=loadImage("images/image6.png")
photo7=loadImage("images/image7.png")
photo8=loadImage("images/image8.png")
photo9=loadImage("images/image9.png")
photo10=loadImage("images/image10.png")
photo11=loadImage("images/image11.png")
photo12=loadImage("images/image12.png")
photo13=loadImage("images/image13.png")
photo14=loadImage("images/image14.png")
photo15=loadImage("images/image15.png")
photo16=loadImage("images/image16.png")
enemyphoto=loadImage("images/enemy.png")
}

function setup(){
 var canvas = createCanvas(1200, 1200); 
var player1 = createSprite(60, 200, 144, 244);
player1.addImage(photo1);
var player2 = createSprite(890, 200, 195, 195);
player2.addImage(photo2);
var player3 = createSprite(790, 200, 124, 209);
player3.addImage(photo3);
var player4 = createSprite(690, 200, 201, 201);
player4.addImage(photo4);
var player5 = createSprite(590, 200, 100, 100);
player5.addImage(photo5);
var enemy1 = createSprite(300, 200, 100, 100);
enemy1.addImage(enemyphoto);
}


function draw(){
background("white");
drawSprites();

}