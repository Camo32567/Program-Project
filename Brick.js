class Brick {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    drawBrick() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
}

var brickRows = 0;

function makeBricks() {
    var gap = 10;
    var brickCol = brickCount % 13;
    
    if(brickCount % 13 == 0 && brickCount > 0){
       brickRows++;
    }
    
    const BRICK_WIDTH = 50;
    const BRICK_HEIGHT = 25;
    var xPos = brickCol * (BRICK_WIDTH + gap) + gap;
    var yPos = brickRows * (BRICK_HEIGHT + gap) + gap;
    
    console.log(xPos + ':' + yPos);
    
    var color = 'green';

    var b = new Brick(xPos, yPos, BRICK_WIDTH, BRICK_HEIGHT, color);
    Bricks.push(b);
    
    brickCount++;
}
