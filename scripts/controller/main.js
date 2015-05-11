define([
'underscore',
'model/main',
'model/screen/title',
'model/screen/game',
'model/screen/lose'
], function(_, MainModel, TitleScreen, GameScreen, LoseScreen) {
    'use strict';

    function MainController(canvas) {
        this.setUpRequestAnimationFrame();
        this.resizeCanvas(canvas);

        this.model = new MainModel(canvas);
        this.registerCanvasClickEvent();
        this.showTitleScreen();
    }

    _.extend(MainController.prototype, {
        registerCanvasClickEvent: function() {
            this.model.canvas.onclick = _.bind(this.onCanvasClick, this);
        },

        onCanvasClick: function() {
            this.screen.controller.destroy();
            this.showTitleScreen();
        },

        showTitleScreen: function() {
            this.screen = new TitleScreen(this.model, _.bind(this.showGameScreen, this));
        },

        showGameScreen: function() {
            this.model.score = 0;
            this.screen = new GameScreen(this.model, _.bind(this.showLoseScreen, this));
        },

        showLoseScreen: function(score) {
            if (score > this.model.highScore) {
                this.model.highScore = score;
            }
            this.screen = new LoseScreen(this.model, _.bind(this.showTitleScreen, this));
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
            window.requestAnimationFrame(_.bind(this.gameLoop, this));
        },

        gameLoop: function(timestamp) {
            this.screen.controller.update(timestamp);
            this.clearCanvas();
            this.screen.view.render();
            this.scheduleNextFrame();
        },

        clearCanvas: function() {
            this.model.context.fillStyle = "#CCCC00";
            this.model.context.fillRect(0, 0, this.model.arenaPixelWidth, this.model.arenaPixelHeight);
        },

    });

    return MainController;
});