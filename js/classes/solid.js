"use strict";
class Solid {
    constructor(x,y,image){
        this.shape = new createjs.Bitmap(image);
        this.shape.x = x;
        this.shape.y = y;
    }

    getShape(){
        return this.shape;
    }
}