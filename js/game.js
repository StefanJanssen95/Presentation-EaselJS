function startGame() {
    var data = {
        "images": [imgPlayer],
        "frames": {"regX": 0, "height": 60, "count": 10, "regY": 0, "width": 44},
        "animations": {"walk": [0, 9, "walk"]}
    };
    var sheet = new createjs.SpriteSheet(data);
    var shape = new createjs.Sprite(sheet,"walk");

    stage.addChild(shape);
    stage.update();
}