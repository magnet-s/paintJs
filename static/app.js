const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const clearBtn = document.getElementById("jsRemove")

const INITIAL_COLOR = "##2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "";

let paint = false;
let filling = false;

function handleModeClick(){
    if (filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleColorClick(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function stopPainting(){
    paint = false;
}

function startPainting(){
    paint = true;
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0,0, canvas.width, canvas.height);
    }
    
}

function onMouseMove(e){ 
    const x = e.offsetX;
    const y = e.offsetY;
    if(!paint){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }


}

function handleSaveClick(e){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "PaintJS[EXPORT]";
    link.href = image;
    link.click();
}

function handleCM(e){
    e.preventDefault();
    
}

function handelRangeChange(e){
    const size = e.target.value
    ctx.lineWidth = size;
}
// if you try overRidding, you must come object first and then const

function onMouseUp(e){
    stopPainting();
}
function onMouseLeave(e){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}
Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick));

if(range){
    range.addEventListener("input", handelRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}