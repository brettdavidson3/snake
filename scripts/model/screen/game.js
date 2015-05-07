define([
    'model/game',
    'view/game',
    'controller/game'
], function(GameModel, GameView, GameController) {
    'use strict';

    var GameScreen = function(canvas, context) {
        this.model = new GameModel(canvas.width, canvas.height)
        this.view = new GameView(context, this.model);
        this.controller = new GameController(this.model);
    };

    return GameScreen;
});