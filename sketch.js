var backgroundImg,girlImg,diamondImg,goldcoinsImg,moneyImg,pearlsImg;





function preload(){
backgroundImg =loadImage("background.png")
diamondImg =loadImage("diamond.png")
girlImg =loadAnimation("girl.png","girl2.png","girl3.png")
goldcoinsImg =loadImage("gold coins.png")
moneyImg =loadImage("money.png")
pearlsImg =loadImage("pearls.png")
}


function setup(){
createCanvas(displayWidth,displayHeight)
backgroundsprite=createSprite(500,500,displayWidth,displayHeight)
backgroundsprite.addImage(backgroundImg)
backgroundsprite.velocityX=-6

}

function draw(){
background("black")
if(backgroundsprite.x<0){
   backgroundsprite.x=1000
}

drawSprites();
}