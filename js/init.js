"use strict";

// Declare variables
var imgPlayer,
    imgGround =[],
    oPlayer,
    oGround =[],
    canvas,
    stage;

//Add event listeners
window.addEventListener("load", init);


// Load images and initialize createjs
function init() {
    canvas = document.getElementById("presentation");
    stage = new createjs.Stage(canvas);

    imgPlayer = loadImage("./img/player.png");
    imgGround[0] = loadImage("./img/grassLeft.png");
    imgGround[1] = loadImage("./img/grassMid.png");
    imgGround[2] = loadImage("./img/grassRight.png");
}