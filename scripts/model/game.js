define([
    'model/snake',
    'model/block'
], function(Snake, Block) {
    'use strict';

    var ARENA_NUM_BLOCKS_WIDE = 32;
    var ARENA_NUM_BLOCKS_TALL = 24;

    var GameModel = function(arenaPixelWidth) {
        this.arenaBlockWidth = ARENA_NUM_BLOCKS_WIDE;
        this.arenaBlockHeight = ARENA_NUM_BLOCKS_TALL;
        this.blockSize = arenaPixelWidth / this.arenaBlockWidth;
        this.snake = new Snake();
        this.score = 0;
    };

    return GameModel;
});