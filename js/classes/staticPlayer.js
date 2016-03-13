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
            this.move(1);
        } else if ( isKeyDown("ArrowLeft")) {
            this.move(-1);
        } else {
            this.move(0);
        }
        if( ( isKeyDown("ArrowUp") || isKeyDown(" ") ) && this.canJump ){
            this.canJump = false;
            this.vspeed = -12;
        }

        this.shape.y += this.vspeed;
        if( this.shape.y < this.maxY ){
            this.vspeed++;
        } else {
            this.shape.y = this.maxY;
            this.canJump = true;
            this.vspeed = 0;
        }
    }
}