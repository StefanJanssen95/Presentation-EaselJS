"use strict";
class StaticPlayer {
    constructor(x,y,image){
        this.shape = new createjs.Bitmap(image);
        this.shape.x = x;
        this.shape.y = y;
        this.maxY = y;
        this.vspeed = 0;
        this.canJump = true;
    }

    getShape(){
        return this.shape;
    }

    move(dir){
        this.shape.x += dir*5;

        if( this.shape.x > canvas.width ){
            this.shape.x = -43;
        } else if( this.shape.x < -44 ){
            this.shape.x = canvas.width-1;
        }
    }

    update(){
        if( isKeyDown("ArrowRight") ){
            if( this.shape.y <= this.maxY || (this.shape.x>344 && this.shape.x+45<420 )){
                this.move(1);
            }
        } else if ( isKeyDown("ArrowLeft")) {
            if( this.shape.y <= this.maxY || (this.shape.x>344 && this.shape.x+45<420 )){
                this.move(-1);
            }
        } else {
            this.move(0);
        }
        if( ( isKeyDown("ArrowUp") || isKeyDown("Space") ) && this.canJump ){
            this.canJump = false;
            this.vspeed = -12;
        }

        this.shape.y += this.vspeed;
        if( this.shape.y < this.maxY || this.shape.x > 342 && this.shape.x+36 < 420){
            this.vspeed++;
            if( this.shape.y > canvas.height ){
                this.shape.y = this.maxY;
                this.shape.x = 64;
            }
        } else {
            this.shape.y = this.maxY;
            this.canJump = true;
            this.vspeed = 0;
        }
    }
}