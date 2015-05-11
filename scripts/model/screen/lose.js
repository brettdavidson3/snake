define([
    'view/lose',
    'controller/lose'
], function(LoseView, LoseController) {
    'use strict';

    var LoseScreen = function(mainModel, showTitleScreenCallback) {
        this.model = mainModel;
        this.view = new LoseView(mainModel);
        this.controller = new LoseController(mainModel, showTitleScreenCallback);
    };

    return LoseScreen;
});