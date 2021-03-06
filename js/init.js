"use strict";

// Declare variables
var imgStaticPlayer,
    imgAnimatedPlayer,
    imgGround =[],
    imgBridge,
    imgLava,
    imgCloud,
    imgTree,
    oPlayer,
    oSolid =[],
    oButton,
    canvas,
    stage,
    slide=-1;

//Add event listeners
window.addEventListener("load", init);
window.addEventListener("keydown",keyDown);
window.addEventListener("keyup",keyUp);


// Load images and initialize createjs
function init() {
    canvas = document.getElementById("presentation");
    stage = new createjs.Stage(canvas);

    imgStaticPlayer = loadImage("./img/staticPlayer.png");
    imgAnimatedPlayer = loadImage("./img/animatedPlayer.png");
    imgGround[0] = loadImage("./img/grassRight.png");
    imgGround[1] = loadImage("./img/grassMid.png");
    imgGround[2] = loadImage("./img/grassLeft.png");
    imgBridge = loadImage("./img/bridge.png");
    imgLava = loadImage("./img/lava.png");
    imgCloud = loadImage("./img/cloud.png");
    imgTree = loadImage("./img/tree.png");
}