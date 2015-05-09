define([
    'underscore',
    'model/block',
    'model/direction'
], function(_, Block, Direction) {
    'use strict';

    var INITIAL_LENGTH = 5;
    var INITIAL_POSITION = new Block(6, 1);
    var INITIAL_DIRECTION = Direction.RIGHT;
    var INITIAL_SPEED_INTERVAL = 100;

    var Snake = function() {
        this.body = this.initBody();
        this.direction = INITIAL_DIRECTION;
        this.nextDirection = INITIAL_DIRECTION;
        this.speedInterval = INITIAL_SPEED_INTERVAL;
    };

    _.extend(Snake.prototype, {
        initBody: function() {
            return _.times(INITIAL_LENGTH, function(i) {
                return new Block(INITIAL_POSITION.x - i, INITIAL_POSITION.y);
            });
        },

        getHead: function() {
            return this.body[0];
        },

        getTail: function() {
            return _.rest(this.body);
        }
    });

    return Snake;
});