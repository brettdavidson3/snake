define(function(require) {
    'use strict';

    var TitleModel = function(highScore, arenaPixelWidth, arenaPixelHeight) {
        this.highScore = highScore;
        this.arenaPixelWidth = arenaPixelWidth;
        this.arenaPixelHeight = arenaPixelHeight;
    };

    return TitleModel;
});