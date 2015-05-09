define([
    'model/lose',
    'view/lose',
    'controller/lose'
], function(LoseModel, LoseView, LoseController) {
    'use strict';

    var LoseScreen = function(canvas, context, score, highScore, showTitleScreenCallback) {
        this.model = new LoseModel(score, highScore, canvas.width, canvas.height);
        this.view = new LoseView(context, this.model);
        this.controller = new LoseController(this.model, showTitleScreenCallback);
    };

    return LoseScreen;
});