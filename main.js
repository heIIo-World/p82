var mouseEvent="empty";

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var color= "";
var radius="";
var lineWidth="";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
 color = document.getElementById("color").value;
    width_of_line=document.getElementById("lineWidth").value; 
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    
    curPosX = e.clientX - canvas.offsetLeft;
    curPosY = e.clientY - canvas.offsetLeft;
    
    if (mouseEvent == "mouseDown") {
        
        console.log("Current position of x and y coordinates is: ");
        console.log("x = " + curPosX + ", and y = " + curPosY);
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.arc(curPosX, curPosY, radius, 0, 2*Math.PI);
        ctx.stroke();
    
    }
}

function clearArea() {
    
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}