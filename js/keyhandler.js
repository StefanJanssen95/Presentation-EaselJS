"use strict";

var keysDown =[];

function keyDown(ev){
    if( keysDown.indexOf(ev.code) === -1 ){
        keysDown.push(ev.code);
    }
    if(!ev.code.startsWith("F")){
        ev.preventDefault();
    }
    if( ev.code === "Tab" ){
        nextSlide();
    } else if( ev.code === "KeyR" ){
        oSolid = [];
        stage.removeAllChildren();
        stage.update();
        slide = -1;
    }
}

function keyUp(ev) {
    var i = keysDown.indexOf(ev.code);
    if( i > -1 ){
        keysDown = arrayRemoveElement(keysDown,i);
    }
    ev.preventDefault();
}

function isKeyDown(key){
    return keysDown.indexOf(key) > -1;
}