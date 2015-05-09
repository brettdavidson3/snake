define([
    'model/rectangle',
    'model/snake'
], function(Rectangle, Snake) {
    'use strict';

    var ARENA_NUM_BLOCKS_WIDE = 32;
    var ARENA_NUM_BLOCKS_TALL = 24;

    var GameModel = function(arenaPixelWidth) {
        this.arenaBlockWidth = 32;
        this.arenaBlockHeight = 24;
        this.blockSize = arenaPixelWidth / this.arenaBlockWidth;
        this.snake = new Snake();
        this.score = 0;
    };

    return GameModel;
});