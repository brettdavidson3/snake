define([
    'model/game',
    'view/game',
    'controller/game'
], function(GameModel, GameView, GameController) {
    'use strict';

    var GameScreen = function(mainModel, callback) {
        this.model = new GameModel(mainModel);
        this.view = new GameView(mainModel, this.model);
        this.controller = new GameController(this.model, callback);
    };

    return GameScreen;
});