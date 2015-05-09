define([
'underscore',
'model/screen/title',
'model/screen/game',
'model/screen/lose'
], function(_, TitleScreen, GameScreen, LoseScreen) {
    'use strict';

    function MainController(canvas) {
        this.setUpRequestAnimationFrame();
        this.resizeCanvas(canvas);

        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.highScore = 0;

        this.showTitleScreen();
    }

    _.extend(MainController.prototype, {
        showTitleScreen: function() {
            this.screen = new TitleScreen(this.canvas, this.context, this.highScore, _.bind(this.showGameScreen, this));
        },

        showGameScreen: function() {
            this.screen = new GameScreen(this.canvas, this.context, _.bind(this.showLoseScreen, this));
        },

        showLoseScreen: function(score) {
            if (score > this.highScore) {
                this.highScore = score;
            }
            this.screen = new LoseScreen(this.canvas, this.context, score, this.highScore, _.bind(this.showTitleScreen, this));
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