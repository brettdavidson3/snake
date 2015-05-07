define([
'underscore',
'model/world'
], function(_, WorldModel) {
    'use strict';

    function GameController(canvas) {
        this.canvas = canvas;
        this.worldModel = this.initWorldModel(canvas);
    }

    _.extend(GameController.prototype, {
        initWorldModel: function(canvas) {
            var width = canvas.width,
                height = canvas.height;
            return new WorldModel(width, height);
        },

        startGame: function() {
            this.setUpRequestAnimationFrame();
            this.resizeCanvas();
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

        resizeCanvas: function() {
            // draw at twice the resolution to support different densities
            this.canvas.width *= 2;
            this.canvas.height *= 2;
        },

        scheduleNextFrame: function() {
            var scope = this;
            window.requestAnimationFrame(function() {
                scope.gameLoop();
            });
        },

        gameLoop: function() {
            var width = this.canvas.width,
                height = this.canvas.height,
                context = canvas.getContext("2d");

            this.clearCanvas(context, width, height);
            this.drawFrame(context, width, height);
            this.scheduleNextFrame();
        },

        clearCanvas: function(context, width, height) {
            context.fillStyle = "#CCCC00";
            context.fillRect(0, 0, width, height);

        },

        drawFrame: function(context, width, height) {

        }
    });

    return GameController;
});