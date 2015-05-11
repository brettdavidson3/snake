define([
    'underscore',
    'view/view'
], function(_, View) {
    'use strict';

    var LOSE_TEXT = "GAME OVER";
    var SCORE_TEXT = "Your score: ";
    var HIGH_SCORE_TEXT = "High score: ";
    var NEW_HIGH_SCORE_TEXT = "NEW HIGH SCORE!";
    var PRESS_ENTER_TEXT = "Press ENTER...";

    var LoseView = function(mainModel, loseModel) {
        View.call(this, mainModel);
        this.loseModel = loseModel;
    };

    _.extend(LoseView.prototype, View.prototype, {
        render: function() {
            this.drawTitleText(LOSE_TEXT, 100);

            var y = this.mainModel.centerY + 120;
            this.drawCenteredText(SCORE_TEXT + this.loseModel.score, y, 50);

            y+= 120;
            if (this.loseModel.highScore === this.loseModel.score) {
                this.drawCenteredText(NEW_HIGH_SCORE_TEXT, y, 50);
            } else {
                this.drawCenteredText(HIGH_SCORE_TEXT + this.loseModel.highScore, y, 50);
            }

            this.drawBottomText(PRESS_ENTER_TEXT);
        }

    });

    return LoseView;
});