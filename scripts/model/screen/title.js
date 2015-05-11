define([
    'view/title',
    'controller/title'
], function(TitleView, TitleController) {
    'use strict';

    var TitleScreen = function(mainModel, showGameScreenCallback) {
        this.model = mainModel;
        this.view = new TitleView(mainModel);
        this.controller = new TitleController(mainModel, showGameScreenCallback);
    };

    return TitleScreen;
});