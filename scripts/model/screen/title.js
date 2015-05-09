define([
    'model/title',
    'view/title',
    'controller/title'
], function(TitleModel, TitleView, TitleController) {
    'use strict';

    var TitleScreen = function(canvas, context, highScore, showGameScreenCallback) {
        this.model = new TitleModel(highScore, canvas.width, canvas.height)
        this.view = new TitleView(context, this.model);
        this.controller = new TitleController(this.model, showGameScreenCallback);
    };

    return TitleScreen;
});