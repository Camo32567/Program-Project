class Brick { //Brick class 
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    drawBrick() { //draws brick
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
}

var brickRows = 0;

function makeBricks() { // Function that makes the bricks and pusheds them into an array
    var gap = 10;
    var brickCol = brickCount % 13; //13 bricks per row to fill up screen

    if (brickCount % 13 == 0 && brickCount > 0) {
        brickRows++; // once there are 13 bricks in a row it starts to make bricks under it using mod %
    }

    const BRICK_WIDTH = 50;
    const BRICK_HEIGHT = 25;
    var xPos = brickCol * (BRICK_WIDTH + gap) + gap;
    var yPos = brickRows * (BRICK_HEIGHT + gap) + gap; //varibables for bricks and the postions of each one 

    console.log(xPos + ':' + yPos);

    var color = 'white';

    var b = new Brick(xPos, yPos, BRICK_WIDTH, BRICK_HEIGHT, color);
    Bricks.push(b); //pushed the brick into an array 

    brickCount++; //adds to the brick count so knows when to start new row
}
