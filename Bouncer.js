class Bouncer{
    construction(x,y,w,h,c,xSpeed){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
    }
     drawBouncer() {
        canvasContext.fillstyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
        
    }
    
}