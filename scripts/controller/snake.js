define([
    'underscore',
    'controller/controller',
    'model/block',
    'model/direction',
], function(_, Controller, Block, Direction) {
    'use strict';

    var SnakeController = function(snakeModel) {
        Controller.call(this);
        this.snakeModel = snakeModel;
        this.lastAdvanceTimestamp = 0;
        this.initKeyListeners();
    };

    _.extend(SnakeController.prototype, Controller.prototype, {
        initKeyListeners: function() {
            this.registerKey(37, _.bind(this.attemptDirection, this, Direction.LEFT));
            this.registerKey(38, _.bind(this.attemptDirection, this, Direction.UP));
            this.registerKey(39, _.bind(this.attemptDirection, this, Direction.RIGHT));
            this.registerKey(40, _.bind(this.attemptDirection, this, Direction.DOWN));
        },

        attemptDirection: function(direction) {
            if (!this.areOppositeDirections(this.snakeModel.direction, direction)) {
                this.snakeModel.nextDirection = direction;
            }
        },

        areOppositeDirections: function(directionA, directionB) {
            return (directionA.x === directionB.x && directionA.y === -directionB.y) ||
                   (directionA.y === directionB.y && directionA.x === -directionB.x);
        },

        update: function(timestamp) {
            if (this.lastAdvanceTimestamp === 0) {
                this.lastAdvanceTimestamp = timestamp;
            } else if (timestamp - this.lastAdvanceTimestamp >= this.snakeModel.speedInterval) {
                this.addNewHead();
                this.lastAdvanceTimestamp = timestamp;
                return true;
            }
            return false;
        },

        addNewHead: function() {
            var currentHead = this.snakeModel.getHead();
            var nextDirection = this.snakeModel.nextDirection;
            var newX = currentHead.x + nextDirection.x;
            var newY = currentHead.y + nextDirection.y;
            this.snakeModel.body.unshift(new Block(newX, newY));

            this.snakeModel.direction = this.snakeModel.nextDirection;
        },

        resetLastAdvanceTimestamp: function(currentTimestamp) {
            this.lastAdvanceTimestamp = 0;
        }
    });

    return SnakeController;
});