const BACKGROUND_COLOR = "#000000"

const LINE_COLOR = "#ffffff" // // "#32CD32"

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;
var mousedown = 0;

var canvas;
var context;

function prepare_canvas() {
    console.log("preparing canvas");
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = 10;
    context.lineJoin = "round";

    document.addEventListener("mousedown", function (event){
          mousedown = 1;
          //console.log("Moused pressed");
    });


    document.addEventListener("mouseup", function (event){
        mousedown = 0;
        //console.log("Moused released");
  });
    
    document.addEventListener("mousemove", function (event){
        previousX = currentX;
        previousY = currentY;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
 
        /*
        if (currentX < 0 || currentX > canvas.offsetWidth ||
              currentY < 0 || currentY > canvas.offsetHeight){
                  mousedown = 0;
        }
        */
        if (mousedown ){
           context.beginPath();
           context.moveTo(previousX, previousY);
           context.lineTo(currentX, currentY);
           context.closePath();
           context.stroke();
        }
    });


    // Event listener only for the canvas
    canvas.addEventListener("mouseleave", function (event){
        mousedown = 0;
        //console.log("Canvas left");
  });

  // Touch events

    // Event listener only for the canvas
    canvas.addEventListener("touchcancel", function (event){
        mousedown = 0;
        //console.log("Canvas left");
  });

  
  canvas.addEventListener("touchmove", function (event){

    /*
    if (currentX < 0 || currentX > canvas.offsetWidth ||
          currentY < 0 || currentY > canvas.offsetHeight){
              mousedown = 0;
    }
    */
    if (mousedown ){
       context.beginPath();
       context.moveTo(previousX, previousY);
       context.lineTo(currentX, currentY);
       context.closePath();
       context.stroke();
    }
});


canvas.addEventListener("touchstart", function (event){
    mousedown = 1;

    previousX = currentX;
    previousY = currentY;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
    //console.log("Touch pressed");
});


canvas.addEventListener("touchend", function (event){
  mousedown = 0;
  //console.log("Touch released");
});

}

function clearCanvas(){
    
   currentX = 0;
   currentY = 0;
   previousX = 0;
   previousY = 0;
   mousedown = 0;
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

}