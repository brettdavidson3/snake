define([
    'model/title',
    'view/title',
    'controller/title'
], function(TitleModel, TitleView, TitleController) {
    'use strict';

    var TitleScreen = function(mainModel, showGameScreenCallback) {
        this.model = new TitleModel(mainModel.highScore)
        this.view = new TitleView(mainModel, this.model);
        this.controller = new TitleController(this.model, showGameScreenCallback);
    };

    return TitleScreen;
});