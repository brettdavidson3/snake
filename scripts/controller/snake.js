define([
    'underscore',
    'model/block',
    'model/direction',
    'controller/input'
], function(_, Block, Direction, InputListener) {
    'use strict';

    var SnakeController = function(snakeModel) {
        this.snakeModel = snakeModel;
        this.lastAdvanceTimestamp = 0;
        this.initInputListener();
    };

    _.extend(SnakeController.prototype, {
        initInputListener: function() {
            this.inputListener = new InputListener();
            this.inputListener.register(37, _.bind(this.attemptDirection, this, Direction.LEFT));
            this.inputListener.register(38, _.bind(this.attemptDirection, this, Direction.UP));
            this.inputListener.register(39, _.bind(this.attemptDirection, this, Direction.RIGHT));
            this.inputListener.register(40, _.bind(this.attemptDirection, this, Direction.DOWN));
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
            if (timestamp - this.lastAdvanceTimestamp >= this.snakeModel.speedInterval) {
                this.snakeModel.body.pop();
                this.addNewHead();
                this.lastAdvanceTimestamp = timestamp;
            }
        },

        addNewHead: function() {
            var currentHead = this.snakeModel.getHead();
            var nextDirection = this.snakeModel.nextDirection;
            var newX = currentHead.x + nextDirection.x;
            var newY = currentHead.y + nextDirection.y;
            this.snakeModel.body.unshift(new Block(newX, newY));

            this.snakeModel.direction = this.snakeModel.nextDirection;
        },

        clearInputListener: function() {
            this.inputListener.clear();
        }
    });

    return SnakeController;
});