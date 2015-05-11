define([
    'underscore',
    'model/snake',
    'model/block'
], function(_, Snake, Block) {
    'use strict';

    var GameModel = function(mainModel) {
        this.mainModel = mainModel;
        this.snake = new Snake();
        this.paused = false;
    };

    return GameModel;
});