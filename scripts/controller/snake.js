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
            var me = this;

            this.inputListener.register(37, function() {
                if (me.snakeModel.direction !== Direction.RIGHT) {
                    me.snakeModel.direction = Direction.LEFT;
                }
            });
            this.inputListener.register(38, function() {
                if (me.snakeModel.direction !== Direction.DOWN) {
                    me.snakeModel.direction = Direction.UP;
                }            });
            this.inputListener.register(39, function() {
                if (me.snakeModel.direction !== Direction.LEFT) {
                    me.snakeModel.direction = Direction.RIGHT;
                }
            });
            this.inputListener.register(40, function() {
                if (me.snakeModel.direction !== Direction.UP) {
                    me.snakeModel.direction = Direction.DOWN;
                }
            });
        },

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