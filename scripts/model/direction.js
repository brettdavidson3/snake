define([
    'model/block'
], function(Block) {
    'use strict';

    return {
        UP: new Block(0, -1),
        DOWN: new Block(0, 1),
        LEFT: new Block(-1, 0),
        RIGHT: new Block(1, 0)
    };
});