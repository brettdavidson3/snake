define([
    'underscore',
    'controller/snake'
], function(_, SnakeController) {
    'use strict';

    var GameController = function(gameModel, gameOverCallback) {
        this.gameModel = gameModel;
        this.snakeController = new SnakeController(gameModel.snake);
        this.gameOverCallback = gameOverCallback;
    };

    _.extend(GameController.prototype, {
        update: function(timestamp) {
            this.snakeController.update(timestamp);
            if (this.isInLoseState()) {
                this.snakeController.clearInputListener();
                this.gameOverCallback(this.gameModel.score);
            }
        },

        isInLoseState: function() {
            return this.snakeHasHitWall() || this.snakeHasHitSelf();
        },

        snakeHasHitWall: function() {
            var head = this.gameModel.snake.getHead();
            return (head.x < 0 || head.x >= this.gameModel.arenaBlockWidth) ||
                   (head.y < 0 || head.y >= this.gameModel.arenaBlockHeight);
        },

        snakeHasHitSelf: function() {
            var snake = this.gameModel.snake;
            return _.some(snake.getTail(), function(block) {
                return snake.getHead().intersects(block);
            });
        }
    });

    return GameController;
});