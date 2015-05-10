define([
    'underscore',
    'controller/snake',
    'model/block'
], function(_, SnakeController, Block) {
    'use strict';

    var GameController = function(gameModel, gameOverCallback) {
        this.gameModel = gameModel;
        this.snakeController = new SnakeController(gameModel.snake);
        this.gameOverCallback = gameOverCallback;
        this.spawnApple();
    };

    _.extend(GameController.prototype, {
        update: function(timestamp) {
            var snakeAdvanced = this.snakeController.update(timestamp);
            if (snakeAdvanced) {
                this.onSnakeAdvance();
            }
        },

        onSnakeAdvance: function() {
            if (this.isInLoseState()) {
                this.snakeController.clearInputListener();
                this.gameOverCallback(this.gameModel.score);
            } else if (this.isEatingApple()) {
                this.gameModel.incrementScore();
                this.gameModel.snake.incrementSpeed();
                this.spawnApple();
            } else {
                this.gameModel.snake.popTail();
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
            return this.blockListContainsBlock(snake.getTail(), snake.getHead());
        },

        blockListContainsBlock: function(blockArray, block) {
            return _.some(blockArray, function(currentBlock) {
                return currentBlock.intersects(block);
            });
        },

        spawnApple: function() {
            var newApple = this.getRandomBlock();
            while (this.blockListContainsBlock(this.gameModel.snake.body, newApple)) {
                newApple = this.getRandomBlock();
            }
            this.gameModel.apple = newApple;
        },

        getRandomBlock: function() {
            var x = _.random(this.gameModel.arenaBlockWidth - 1);
            var y = _.random(this.gameModel.arenaBlockHeight - 1);
            return new Block(x, y);
        },

        isEatingApple: function() {
            return this.gameModel.snake.getHead().intersects(this.gameModel.apple);
        }
    });

    return GameController;
});