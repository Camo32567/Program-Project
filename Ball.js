 var ballXpos = 400;
 var ballYpos = 250;
 var ballXspeed = 5;
 var ballYspeed = 5;
 const BALL_RADIUS = 15;


 class Ball {
     constructor(x, y, r, c, xSpeed, ySpeed) {
         this.x = x;
         this.y = y;
         this.r = r;
         this.c = c;
         this.xSpeed = xSpeed;
         this.yspeed = ySpeed;
     }

     drawBall() {
         canvasContext.fillStyle = this.c;
         canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
         canvasContext.fill();
         canvasContext.stroke();
     }
     
     ballMove() {
         this.x = this.x + this.xSpeed;
         this.y = this.y + this.ySpeed;
     }

 }
