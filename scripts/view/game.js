define([
    'underscore'
], function(_) {
    'use strict';

    var PAUSED_TEXT = "PAUSED";
    var PRESS_SPACEBAR_TEXT = "Press spacebar to resume...";
    var FONT = '"Lucida Console", Monaco, monospace';

    var GameView = function(context, gameModel) {
        this.context = context;
        this.gameModel = gameModel;
    };

    _.extend(GameView.prototype, {
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
            this.context.fillStyle = "#292900";
            this.context.textAlign = "center";
            var x = this.gameModel.arenaPixelWidth / 2;
            var y = this.gameModel.arenaPixelHeight / 2;

            this.setFontSize(100);
            this.context.fillText(PAUSED_TEXT, x, y);

            y = this.gameModel.arenaPixelHeight - 120;
            this.setFontSize(40);
            this.context.fillText(PRESS_SPACEBAR_TEXT, x, y);
        },

        setFontSize: function(size) {
            this.context.font = size + 'px' + FONT;
        },

        drawSnake: function() {
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

            this.context.beginPath();
            this.context.arc(appleCenterX, appleCenterY, halfABlock, 0, 2 * Math.PI);
            this.context.stroke();
        }

    });

    return GameView;
});