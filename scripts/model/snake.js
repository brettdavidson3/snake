define([
    'underscore',
    'model/block'
], function(_, Block) {
    'use strict';

    var DIRECTION = {
        UP: new Block(0, -1),
        DOWN: new Block(0, 1),
        LEFT: new Block(-1, 0),
        RIGHT: new Block(1, 0)
    };

    var INITIAL_LENGTH = 5;
    var INITIAL_POSITION = new Block(1, 1);
    var INITIAL_DIRECTION = DIRECTION.RIGHT;
    var INITIAL_SPEED_INTERVAL = 1000;

    var SnakeModel = function() {
        this.body = this.initBody();
        this.direction = INITIAL_DIRECTION;
        this.speedInterval = INITIAL_SPEED_INTERVAL;
    };

    _.extend(SnakeModel.prototype, {
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

    return SnakeModel;
});