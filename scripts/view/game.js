define([
    'underscore',
    'view/view'
], function(_, View) {
    'use strict';

    var PAUSED_TEXT = "PAUSED";
    var PRESS_SPACEBAR_TEXT = "Press spacebar to resume...";

    var GameView = function(mainModel, gameModel) {
        View.call(this, mainModel);
        this.gameModel = gameModel;
    };

    _.extend(GameView.prototype, View.prototype, {
        render: function() {
            if (this.gameModel.paused) {
                this.drawPausedText();
            } else {
                this.context.fillStyle = "#292900";
                this.drawSnake();
                this.drawApple();
            }
        },

        drawPausedText: function() {
            this.drawTitleText(PAUSED_TEXT, 100);
            this.drawBottomText(PRESS_SPACEBAR_TEXT);
        },

        drawSnake: function() {
            _.each(this.gameModel.snake.body, _.bind(this.drawSnakeBlock, this));
        },

        drawSnakeBlock: function(block) {
            var x = block.x * this.mainModel.blockSize;
            var y = block.y * this.mainModel.blockSize;
            this.context.fillRect(x, y, this.mainModel.blockSize, this.mainModel.blockSize);
        },

        drawApple: function() {
            var apple = this.gameModel.apple;
            var halfABlock = this.mainModel.blockSize / 2;

            var appleCenterX = (apple.x * this.mainModel.blockSize) + halfABlock;
            var appleCenterY = (apple.y * this.mainModel.blockSize) + halfABlock;

            this.context.beginPath();
            this.context.arc(appleCenterX, appleCenterY, halfABlock, 0, 2 * Math.PI);
            this.context.stroke();
        }

    });

    return GameView;
});