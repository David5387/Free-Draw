var mouseEvent = "empty";
var positionof_X, positionof_Y;

canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

color = "lime";
width = 2;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseEvent = "mouseDown";
color = document.getElementById("input1").value;
width = document.getElementById("input2").value;
}


canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_X_position = e.clientX - canvas.offsetLeft;
    current_Y_position = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.rect(current_X_position, current_Y_position, 100, 100);

      ctx.moveTo(positionof_X,positionof_Y);


      ctx.stroke();
    }
positionof_X = current_X_position;
positionof_Y = current_Y_position;
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
mouseEvent = "mouseleave";
}
function clearArea() 
{ ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }