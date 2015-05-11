define([
    'model/lose',
    'view/lose',
    'controller/lose'
], function(LoseModel, LoseView, LoseController) {
    'use strict';

    var LoseScreen = function(mainModel, showTitleScreenCallback) {
        this.model = new LoseModel(mainModel);
        this.view = new LoseView(mainModel, this.model);
        this.controller = new LoseController(this.model, showTitleScreenCallback);
    };

    return LoseScreen;
});