"use strict";

var numberOfImages = 0;

function loadImage(src){
    var el = new Image();
    el.onload = handleImageLoaded;
    el.onerror = handleImageError;
    el.src = src;
    numberOfImages++;
    return el;
}

function handleImageLoaded(){
    numberOfImages--;
    if( numberOfImages === 0 ){
        startGame();
    }
}

function handleImageError(ev){
    console.error("ERROR LOADING: "+ev.target.src);
}
