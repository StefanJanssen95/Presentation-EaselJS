function startGame() {
    var data = {
        "images": [imgPlayer],
        "frames": {"regX": 0, "height": 96, "count": 10, "regY": 0, "width": 75},
        "animations": {"walk": [0, 9, "walk"]}
    };
    var sheet = new createjs.SpriteSheet(data);
    var shape = new createjs.Sprite(sheet,"walk");
    shape.x = 200;
    shape.y = 200;

    stage.addChild(shape);
    stage.update();
}