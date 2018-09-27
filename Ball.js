var ballXpos = 0;
var ballYpos = 0;
const BALL_WIDTH = 10;
const BALL_HEIGHT = 10;
var ballXspeed = 4;
var ballYspeed = 2;

class Ball {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    drawBall() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    ballMove() {
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
