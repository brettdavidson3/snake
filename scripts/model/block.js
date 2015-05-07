define([
'underscore'
], function(_) {
    'use strict';

    var Block = function(x, y) {
        this.x = x;
        this.y = y;
    };

    _.extend(Block.prototype, {
        intersects: function(otherBlock) {
            return this.x === otherBlock.x && this.y === otherBlock.y;
        }
    });

    return Block;
});