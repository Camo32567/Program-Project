class Bouncer {
    constructor(x, y, w, h, c, xSpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
    }
    drawBouncer() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    playerMove() {
        if (rightKeyPressed) { // If rightKeyPressed is true from the BrickBreaker.html page it will move to the right
            this.x = this.x + this.xSpeed;
            if (this.x > canvas.width - this.w) { //If the bouncer is at the end it will move it back so it doesnt go past the screen.
                this.x = canvas.width - this.w;
            }
        }
        if (leftKeyPressed) { // If leftKeyPressed is true from the BrickBreaker.html page it will move to the left
            this.x = this.x - this.xSpeed;
            if (this.x < 0) { //If the bouncer is at the end it will move it back so it doesnt go past the screen.
                this.x = 0;
            }
        }
    }
}
