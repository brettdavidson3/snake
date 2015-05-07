define([
'underscore',
'model/world',
'controller/snake',
'view/snake'
], function(_, WorldModel, SnakeController, SnakeView) {
    'use strict';

    function GameController(canvas) {
        this.setUpRequestAnimationFrame();
        this.resizeCanvas(canvas);

        this.context = canvas.getContext("2d")
        this.worldModel = this.initWorldModel(canvas);
        this.snakeController = new SnakeController(this.worldModel.snake);
        this.snakeView = new SnakeView(this.context, this.worldModel);
    }

    _.extend(GameController.prototype, {
        initWorldModel: function(canvas) {
            var width = canvas.width,
                height = canvas.height;
            return new WorldModel(width, height);
        },

        startGame: function() {
            this.scheduleNextFrame();
        },

        setUpRequestAnimationFrame: function() {
            window.requestAnimationFrame =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame;

            if (!window.requestAnimationFrame) {
                throw 'Unsupported browser, please use the latest version of Chrome, Safari, or Firefox.'
            }
        },

        resizeCanvas: function(canvas) {
            // draw at twice the resolution to support different densities
            canvas.width *= 2;
            canvas.height *= 2;
        },

        scheduleNextFrame: function() {
            var scope = this;
            window.requestAnimationFrame(function(timestamp) {
                scope.gameLoop(timestamp);
            });
        },

        gameLoop: function(timestamp) {
            var width = this.worldModel.arena.width,
                height = this.worldModel.arena.height;

            this.updateControllers(timestamp);
            this.clearCanvas();
            this.drawFrame();
            this.scheduleNextFrame();
        },

        clearCanvas: function() {
            var width = this.worldModel.arena.width,
                height = this.worldModel.arena.height;

            this.context.fillStyle = "#CCCC00";
            this.context.fillRect(0, 0, width, height);
        },

        updateControllers: function(timestamp) {
            this.snakeController.update(timestamp);
        },

        drawFrame: function() {
            this.snakeView.render();
        }
    });

    return GameController;
});