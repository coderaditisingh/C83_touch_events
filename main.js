var color ="black";
var width_l = 5;
var current_Y_axis="",last_P_Y="";
var current_X_axis="",last_P_X="";
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

MouseEvent="";

var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e){
color=document.getElementById("color").value;
width_l=document.getElementById("width_l").value;
MouseEvent="touchstart";
last_P_X=e.touches[0].clientX-canvas.offsetLeft;
last_P_Y=e.touches[0].clientY-canvas.offsetTop;
}

    canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e){
    current_X_axis=e.touches[0].clientX-canvas.offsetLeft;
    current_Y_axis=e.touches[0].clientY-canvas.offsetTop;
        MouseEvent="mouse move";
    
            ctx.beginPath();
            ctx.strokeStyle= color;
            ctx.lineWidth = width_l;
            console.log("last Pos Y="+ last_P_Y+ "last Pos X="+last_P_X);
            ctx.moveTo(last_P_X,last_P_Y);
            console.log(" cur pos Y="+ current_Y_axis+ "cur pos X="+current_X_axis);
            ctx.lineTo(current_X_axis,current_Y_axis);
            ctx.stroke();
       
        last_P_Y=current_Y_axis;
        last_P_X=current_X_axis;
            
    }

    function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}


