define([
'underscore',
'model/screen/game'
], function(_, GameScreen) {
    'use strict';

    function MainController(canvas) {
        this.setUpRequestAnimationFrame();
        this.resizeCanvas(canvas);

        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.showGameScreen();
    }

    _.extend(MainController.prototype, {
        showGameScreen: function() {
            this.screen = new GameScreen(this.canvas, this.context);
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
            var me = this;
            window.requestAnimationFrame(function(timestamp) {
                me.gameLoop(timestamp);
            });
        },

        gameLoop: function(timestamp) {
            this.screen.controller.update(timestamp);
            this.clearCanvas();
            this.screen.view.render();
            this.scheduleNextFrame();
        },

        clearCanvas: function() {
            this.context.fillStyle = "#CCCC00";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },

    });

    return MainController;
});