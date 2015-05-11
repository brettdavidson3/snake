define([
    'underscore',
    'view/view'
], function(_, View) {
    'use strict';

    var TITLE_TEXT = 'SNAKE';
    var HIGH_SCORE_TEXT = 'High Score: ';
    var PLAY_TEXT = 'Press ENTER to play...';

    var TitleView = function(mainModel, titleModel) {
        View.call(this, mainModel);
        this.titleModel = titleModel;
    };

    _.extend(TitleView.prototype, View.prototype, {
        render: function() {
            this.drawTitleText(TITLE_TEXT, 200);

            var scoreText = HIGH_SCORE_TEXT + this.titleModel.highScore;
            this.drawCenteredText(scoreText, this.centerY + 120, 50);

            this.drawBottomText(PLAY_TEXT);
        }
    });

    return TitleView;
});