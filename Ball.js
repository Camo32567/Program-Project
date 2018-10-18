var ballXpos = 0; //Variables for the ball that bouncs around the screen
var ballYpos = 0;
const BALL_WIDTH = 10;
const BALL_HEIGHT = 10;
var ballXspeed = 4;
var ballYspeed = 3;

class Ball { //Class for the ball that holds the draw, move and collison Functions
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    drawBall() { //Draw functions 
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
    
    bouncePaddle(){ //The function that allows the ball to bounce off of bircks and the paddle
        if (this.x > bouncer.x && this.x < bouncer.x + bouncer.w &&
            this.y > bouncer.y && this.y <bouncer.y + bouncer.h) {
            this.ySpeed = this.ySpeed * -1;
        }
    }

    ballMove() { //This is what moves the ball when it bounces off walls and keeps it moving
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x < 0) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.x > canvas.width) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.y > canvas.height) {
            this.ySpeed = this.ySpeed * -1;
        }
        if (this.y < 0) {
            this.ySpeed = 0;
            this.xSpeed = 0;
        }
    }
}
