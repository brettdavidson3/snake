define(function(require) {
    'use strict';

    var LoseModel = function(mainModel) {
        this.score = mainModel.score;
        this.highScore = mainModel.highScore;
    };

    return LoseModel;
});