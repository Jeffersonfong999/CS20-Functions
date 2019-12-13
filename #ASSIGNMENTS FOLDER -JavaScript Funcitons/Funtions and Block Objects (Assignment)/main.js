// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//Global Vairables Shortened

let block1 = createBlock(100, 200, 100, 10, randomDec(-5,5),'orange')

let block2 = createBlock(300, 300, 75, 10, randomDec(-5, 5),'purple')

let block3 = createBlock(500, 500, 120, 10, randomDec(-5, 5),'green')

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE Blocks
    updateBlock(block1);
    updateBlock(block2);
    updateBlock(block3);


   

    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

     // DRAW Blocks
     drawBlock(block1);
     drawBlock(block2);
     drawBlock(block3);
   
    // Request Another Animation Frame
    requestAnimationFrame(animate);

}
// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

//Create Block
function createBlock(xInit, yInit, wInit, hInit, xSpeedInit, blockColor){
    return{
        x: xInit,
        y : yInit,
        w : wInit,
        h : hInit,
        xspeed : xSpeedInit,
        Color : blockColor,
    }
}

        



//Update Block 
function updateBlock(blockNum) {
    blockNum.x += blockNum.xspeed;
    if (blockNum.x + blockNum.w > cnv.width || blockNum.x < 0) {
        blockNum.xspeed = -blockNum.xspeed;
    }
}

//Drawing Block
function drawBlock(blockNum) {
    ctx.fillStyle = blockNum.Color;
    ctx.fillRect(blockNum.x, blockNum.y, blockNum.w, blockNum.h);
}