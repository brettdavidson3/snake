define([
    'underscore',
    'controller/snake',
    'controller/input',
    'model/block'
], function(_, SnakeController, InputListener, Block) {
    'use strict';

    var GameController = function(gameModel, gameOverCallback) {
        this.gameModel = gameModel;
        this.gameOverCallback = gameOverCallback;
        this.inputListener = this.initInputListener();
        this.snakeController = new SnakeController(gameModel.snake);
        this.spawnApple();
    };

    _.extend(GameController.prototype, {
        initInputListener: function() {
            this.inputListener = new InputListener();
            this.inputListener.register(32, _.bind(this.pause, this));  // Spacebar
        },

        pause: function() {
            if (this.gameModel.paused) {
                this.snakeController.resetLastAdvanceTimestamp();
                this.snakeController.initInputListener();
            } else {
                // don't let the user cheat by pausing and then changing directions
                this.snakeController.clearInputListener();
            }
            this.gameModel.paused = !this.gameModel.paused;
        },

        update: function(timestamp) {
            if (this.gameModel.paused) {
                return;
            }
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