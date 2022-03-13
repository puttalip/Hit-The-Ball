
var canvas = new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image__height = 5;

function load_img(){
  fabric.Image.fromURL("golf-h.png", function (Img){
    hole_object = Img;
    hole_object.scaleToWidth(50);
    hole_object.scaleToHeight(50);
    hole_object.set({
      top:hole_y,
      left:hole_x
    });
    canvas.add(hole_object);
  });
  new_image();
}

function new_image(){
  fabric.Image.fromURL("ball.png", function (Img){
    ball_object = Img;
    ball_object.scaleToWidth(50);
    ball_object.scaleToHeight(50);
    ball_object.set({
      top:ball_y,
      left:ball_x
    });
    canvas.add(ball_object);
  });
  
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
 keyPressed = e.keyCode;
console.log(keyPressed);
if((ball_x == hole_x)&&(ball_y == hole_y)){
  canvas.remove(ball_object);
  document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!😆";
  document.getElementById("myCanvas").style.borderColor="Red";
}
  if(keyPressed == '38')
    {
      up();
    }
if(keyPressed == '40')
  {
    down();
  }
if(keyPressed == '37')
  {
    left();
  }
if(keyPressed == '39')
  {
    right();
  }
}
function up()
{
  if(ball_y >=0){
    ball_y = ball_y - 20;
    canvas.remove(ball_object);
    new_image();
  }
}

function down()
{
  if(ball_y <=500){
    ball_y = ball_y + 20;
    canvas.remove(ball_object);
    new_image();
  }
}

function left()
{
  if(ball_x >=0){
    ball_x = ball_x - 20;
    canvas.remove(ball_object);
    new_image();
  }
}

function right()
{
  if(ball_x <=1050){
    ball_x = ball_x + 20;
    canvas.remove(ball_object);
    new_image();
  }
}