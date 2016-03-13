"use strict";
class Player {
    constructor(x,y,image){
        var data = {
            "images": [image],
            "frames": {"regX": 0, "height": 60, "count": 20, "regY": 0, "width": 44},
            "animations": { walkRight: [0, 9],
                            walkLeft: [10, 19]}
        };
        this.sheet = new createjs.SpriteSheet(data);

        this.shape = new createjs.Sprite(this.sheet,0);
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
        if( dir > 0 ){
            if( this.shape.currentAnimation != "walkRight"){
                this.shape.gotoAndPlay("walkRight");
            }

        } else if ( dir < 0 ){
            if( this.shape.currentAnimation != "walkLeft"){
                this.shape.gotoAndPlay("walkLeft");
            }
        } else {
            this.shape.gotoAndStop(this.shape.currentAnimation);
        }
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