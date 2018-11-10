var ballXpos = 400; //Variables for the ball that bouncs around the screen
var ballYpos = 250;
const BALL_WIDTH = 10;
const BALL_HEIGHT = 10;
var ballXspeed = -4;
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

    bouncePaddle() { //The function that allows the ball to bounce off of bircks and the paddle
        if (this.x > bouncer.x && this.x < bouncer.x + bouncer.w &&
            this.y + this.h > bouncer.y && this.y < bouncer.y + bouncer.h) {
            this.ySpeed = this.ySpeed * -1;

            if (this.x < bouncer.x + bouncer.w * 0.25) { // left edge paddle makes the ball speed *2
                if (this.xSpeed < 0) {
                    this.xSpeed *= -1;
                    this.xSpeed *= 2;
                } else { //determinds which direction it coming from and to send it which way by using the if and else statment to make - or +
                    this.xSpeed *= 2;
                }
            }
            if (this.x > bouncer.x + bouncer.w * 0.75) { //when hitting right side of paddle it makeks it faster but not as fast as right side and slower than normal
                if (this.xSpeed > 0) {
                    this.xSpeed *= -1;
                    this.xSpeed *= 1.5;
                } else { //determinds which direction it coming from and to send it which way by using the if and else statment to make - or +
                    this.xSpeed *= 1.5;
                }
            } else { // bounce in middle set back to normal speed
                if (this.xSpeed > 0) {
                    this.xSpeed = 3;
                } else { //determinds which direction it coming from and to send it which way by using the if and else statment to make - or +
                    this.xSpeed = -3;
                }
            }
        }
    }

    ballMove() { //This is what moves the ball when it bounces off walls and keeps it moving
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x < 0) { //changes direction if touching left
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.x + this.w > canvas.width) { //changes the ball direction if touching the right
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.y < 0) {
            this.ySpeed = this.ySpeed * -1; //changes the ball direction if touchingtop  wall
        }
        if (this.y > canvas.height - BALL_HEIGHT) { //stops ball if touching bottom
            this.ySpeed = 0;
            this.xSpeed = 0;
        }
    }

    //Brick collsions
    paddleHit(item) { // detects if the brick is hit
        return (this.x <= (item.x + item.w) &&
                (this.x + this.w) >= item.x) &&
            (this.y <= (item.y + item.h) &&
                (this.y + this.h) >= item.y);
    }
    haspaddleHit(paddle) {
        return this.paddleHit(paddle);
    }
    hasCollided() { // fucntion for when ball collides with bricks
        var self = this; //a variable for this. called self
        var collided = false; //collided var

        Bricks.forEach(function (paddle, i) {
            if (self.haspaddleHit(paddle)) {

                if (self.y < paddle.y && self.x + self.w > paddle.x) { // brick top bounce
                    self.ySpeed *= -1;
                    self.xSpeed *= 1;
                    delete Bricks[i];
                    score++
                }
                if (self.y + self.h > paddle.y + paddle.h && self.x < paddle.x + paddle.w) { // bottom brick bounce
                    self.ySpeed *= -1;
                    self.xSpeed *= 1;
                    delete Bricks[i];
                    score++
                }
                if (self.x < paddle.x && self.y < paddle.y + paddle.h) { // left edge bounce off brick horizontal move
                    self.xSpeed *= -1;
                    delete Bricks[i];
                    score++
                }
                if (self.x + self.w > paddle.x + paddle.w && self.y < paddle.y + paddle.h) { // right edge bounce off brick horizontal move
                    self.xSpeed *= -1;
                    delete Bricks[i];
                    score++
                }
                collided = true;
            }
        });
    }
}
