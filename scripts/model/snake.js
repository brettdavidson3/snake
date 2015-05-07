define([
    'underscore',
    'model/block',
    'model/direction'
], function(_, Block, Direction) {
    'use strict';

    var INITIAL_LENGTH = 5;
    var INITIAL_POSITION = new Block(1, 1);
    var INITIAL_DIRECTION = Direction.RIGHT;
    var INITIAL_SPEED_INTERVAL = 1000;

    var Snake = function() {
        this.body = this.initBody();
        this.direction = INITIAL_DIRECTION;
        this.speedInterval = INITIAL_SPEED_INTERVAL;
    };

    _.extend(Snake.prototype, {
        initBody: function() {
            return _.times(INITIAL_LENGTH, function(i) {
                // The head will be the first item in the array.  For the starting position,
                // the head is the furthest location to the right, which is why we use the
                // xOffset to initialize the location from right to left.
                var xOffset = INITIAL_LENGTH - i;
                return new Block(INITIAL_POSITION.x + xOffset, INITIAL_POSITION.y);
            });
        }
    });

    return Snake;
});