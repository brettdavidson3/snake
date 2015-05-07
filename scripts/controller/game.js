define([
    'underscore',
    'controller/snake'
], function(_, SnakeController) {
    'use strict';

    var GameController = function(gameModel) {
        this.snakeController = new SnakeController(gameModel.snake);
    };

    _.extend(GameController.prototype, {
        update: function(timestamp) {
            this.snakeController.update(timestamp);
        }
    });

    return GameController;
});