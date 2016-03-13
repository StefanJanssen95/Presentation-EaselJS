"use strict";

function gameLoop(){

    //Update Player
    oPlayer.update();

    // Redraw stage
    stage.update();
}


function nextSlide(){
    slide++;
    switch( slide ){
        case 1:
            stage.removeAllChildren();
            for( var i=0; i<canvas.width; i+=70 ){
                if( i===490 ){ //Bridge+lava
                    oSolid.push(new Solid(i,canvas.height-70,imgLava));
                    oSolid.push(new Solid(i,canvas.height-70,imgBridge));
                } else if( i===420 ){//Rounded edge next to bridge
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[0]));
                } else if( i===560 ){//Rounded edge next to bridge
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[2]));
                } else {//Solid grass block
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[1]));
                }
            }
            for( var j=0; j<oSolid.length; j++){
                stage.addChild(oSolid[j].getShape());
            }
        break;

        case 2:
            oPlayer = new StaticPlayer(64,canvas.height-125,imgStaticPlayer);
            stage.addChild(oPlayer.getShape());

            createjs.Ticker.addEventListener("tick", gameLoop);
        break;
        case 3:
            stage.removeChild(oPlayer.getShape());
            oPlayer = new Player(64,canvas.height-125,imgAnimatedPlayer);
            stage.addChild(oPlayer.getShape());
        break;

    }
    stage.update();

}