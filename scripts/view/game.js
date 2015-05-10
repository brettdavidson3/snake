define([
    'underscore'
], function(_) {
    'use strict';

    var GameView = function(context, gameModel) {
        this.context = context;
        this.gameModel = gameModel;
    };

    _.extend(GameView.prototype, {
        render: function() {
            this.drawSnake();
            this.drawApple();
        },

        drawSnake: function() {
            this.context.fillStyle = "#292900";
            _.each(this.gameModel.snake.body, _.bind(this.drawSnakeBlock, this));
        },

        drawSnakeBlock: function(block) {
            var blockSize = this.gameModel.blockSize;
            var x = block.x * blockSize;
            var y = block.y * blockSize;
            this.context.fillRect(x, y, blockSize, blockSize);
        },

        drawApple: function() {
            var apple = this.gameModel.apple;
            var blockSize = this.gameModel.blockSize;
            var halfABlock = blockSize / 2;

            var appleCenterX = (apple.x * blockSize) + halfABlock;
            var appleCenterY = (apple.y * blockSize) + halfABlock;

            this.context.strokeStyle = "#292900";
            this.context.beginPath();
            this.context.arc(appleCenterX, appleCenterY, halfABlock, 0, 2 * Math.PI);
            this.context.stroke();
        }

    });

    return GameView;
});