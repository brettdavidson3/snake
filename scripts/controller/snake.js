define([
    'underscore',
    'model/block'
], function(_, Block) {
    'use strict';

    var SnakeController = function(snakeModel) {
        this.snakeModel = snakeModel;
        this.lastAdvanceTimestamp = 0;
    };

    _.extend(SnakeController.prototype, {
        update: function(timestamp) {
            if (timestamp - this.lastAdvanceTimestamp >= this.snakeModel.speedInterval) {
                this.snakeModel.body.pop();
                this.addNewHead();
                this.lastAdvanceTimestamp = timestamp;
            }
        },

        addNewHead: function() {
            var currentHead = this.snakeModel.body[0];
            var currentDirection = this.snakeModel.direction;
            var newX = currentHead.x + currentDirection.x;
            var newY = currentHead.y + currentDirection.y;
            this.snakeModel.body.unshift(new Block(newX, newY));
        }
    });

    return SnakeController;
});