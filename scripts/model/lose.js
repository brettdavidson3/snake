define(function(require) {
    'use strict';

    var LoseModel = function(score, highScore, arenaPixelWidth, arenaPixelHeight) {
        this.score = score;
        this.highScore = highScore;
        this.arenaPixelWidth = arenaPixelWidth;
        this.arenaPixelHeight = arenaPixelHeight;
    };

    return LoseModel;
});