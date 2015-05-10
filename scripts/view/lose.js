define([
    'underscore'
], function(_) {
    'use strict';

    var FONT = '"Lucida Console", Monaco, monospace';
    var LOSE_TEXT = "GAME OVER";
    var SCORE_TEXT = "Your score: ";
    var HIGH_SCORE_TEXT = "High score: ";
    var NEW_HIGH_SCORE_TEXT = "NEW HIGH SCORE!";
    var PRESS_ANY_KEY_TEXT = "Press ENTER...";

    var LoseView = function(context, loseModel) {
        this.context = context;
        this.loseModel = loseModel;
    };

    _.extend(LoseView.prototype, {
        render: function() {
            this.context.fillStyle = "#292900";
            this.context.textAlign = "center";
            var x = this.loseModel.arenaPixelWidth / 2;
            var y = this.loseModel.arenaPixelHeight / 2;

            this.setFontSize(100);
            this.context.fillText(LOSE_TEXT, x, y);

            y+= 120;
            this.setFontSize(50);
            this.context.fillText(SCORE_TEXT + this.loseModel.score, x, y);

            y+= 120;
            this.setFontSize(50);
            if (this.loseModel.highScore === this.loseModel.score) {
                this.context.fillText(NEW_HIGH_SCORE_TEXT, x, y);
            } else {
                this.context.fillText(HIGH_SCORE_TEXT + this.loseModel.highScore, x, y);
            }

            y = this.loseModel.arenaPixelHeight - 120;
            this.setFontSize(40);
            this.context.fillText(PRESS_ANY_KEY_TEXT, x, y);
        },

        setFontSize: function(size) {
            this.context.font = size + 'px' + FONT;
        }
    });

    return LoseView;
});