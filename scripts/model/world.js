define([
    'model/rectangle',
    'model/snake'
], function(Rectangle, Snake) {
    'use strict';

    var ARENA_NUM_BLOCKS_WIDE = 32;

    var WorldModel = function(width, height) {
        this.arena = new Rectangle(0, 0, width, height);
        this.blockSize = this.arena.width / ARENA_NUM_BLOCKS_WIDE;
        this.snake = new Snake();
    };

    return WorldModel;
});