//Create variables here
var dog;
var happydog;
var database;
var foodS
var foodStock
function preload()
{
  //load images here
  dog.loadImage("DOG(1).png");
}

function setup() {
	createCanvas(500, 500);
  dog=new dog(200,200,70,70);
}


function draw() {
  background(46, 139, 87)  
  dog.display();
  drawSprites();
  //add styles here
foodStock=database.ref('Food');
foodStock.on("value",readStock);

if(keyWentDown){
  writeStock(foodS);
  dog.addImage(happydog(1).png);
}
textSize("20");
Fill ("red")
text("Press UP_ArrowKey for feeding milk ")
function readStock(data){
  foodS=data.val();

  function writeStock(X){
    database.ref('/').update({
      Food:x
    })
  }
}

}



