"use strict";

function gameLoop(){

    if( slide>=2 ){
        //Update Player
        oPlayer.update();
    } else if( slide===0 ){
        var point = oButton.globalToLocal(stage.mouseX,stage.mouseY);
        if( oButton.hitTest(point.x,point.y) ){
            oButton.alpha = 0.5;
        } else {
            oButton.alpha = 1;
        }
    }

    // Redraw stage
    stage.update();
}


function nextSlide(){
    slide++;
    switch( slide ){
        case 0:
            oButton = new createjs.Shape();
            oButton.graphics.beginFill("#ff0000").drawRect(0, 0, 128, 64);
            oButton.x = canvas.width/2-64;
            oButton.y = canvas.height/2-32;

            stage.addChild(oButton);
            stage.update();

            createjs.Ticker.addEventListener("tick", gameLoop);
        break;
        case 1:
            stage.removeAllChildren();
            for( var i=0; i<canvas.width; i+=70 ){
                if( i===350 ){ //Lava
                    oSolid.push(new Solid(i,canvas.height-70,imgLava));
                } else if( i===280 ){//Rounded edge next to bridge
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[0]));
                } else if( i===420 ){//Rounded edge next to bridge
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[2]));
                } else {//Solid grass block
                    oSolid.push(new Solid(i,canvas.height-70,imgGround[1]));
                }
            }

            oSolid.push(new Solid(15,20,imgCloud));
            oSolid.push(new Solid(490,canvas.height-285,imgTree));

            for( var j=0; j<oSolid.length; j++){
                stage.addChild(oSolid[j].getShape());
            }

        break;

        case 2:
            oPlayer = new StaticPlayer(64,canvas.height-125,imgStaticPlayer);
            stage.addChild(oPlayer.getShape());
        break;
        case 3:
            oSolid.push(new Solid(350,canvas.height-70,imgBridge));
            stage.addChild(oSolid[oSolid.length-1].getShape());
            stage.removeChild(oPlayer.getShape());
            oPlayer = new Player(64,canvas.height-125,imgAnimatedPlayer);
            stage.addChild(oPlayer.getShape());
        break;
    }
    stage.update();

}