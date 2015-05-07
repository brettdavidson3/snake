define([
    'model/rectangle',
    'model/snake'
], function(Rectangle, Snake) {
    'use strict';

    var ARENA_NUM_BLOCKS_WIDE = 32;

    var GameModel = function(width) {
        this.blockSize = width / ARENA_NUM_BLOCKS_WIDE;
        this.snake = new Snake();
    };

    return GameModel;
});