const canvas = document.getElementById("jsCanvas");

let paint = false;

function onMouseMove(e){ 
    const x = e.offsetX;
    const y = e.offsetY;

}

function onMouseDown(e){}
function onMouseUp(e){}
function onMouseLeave(e){}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", onMouseLeave)
}
