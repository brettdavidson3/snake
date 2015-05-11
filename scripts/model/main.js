define(function(require) {
    'use strict';

    var ARENA_NUM_BLOCKS_WIDE = 32;
    var ARENA_NUM_BLOCKS_TALL = 24;

    var MainModel = function(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.arenaPixelWidth = canvas.width;
        this.arenaPixelHeight = canvas.height;
        this.arenaBlockWidth = ARENA_NUM_BLOCKS_WIDE;
        this.arenaBlockHeight = ARENA_NUM_BLOCKS_TALL;
        this.blockSize = this.arenaPixelWidth / this.arenaBlockWidth;
        this.centerX = this.arenaPixelWidth / 2;
        this.centerY = this.arenaPixelHeight / 2;
        this.score = 0;
        this.highScore = 0;
    };

    return MainModel;
});