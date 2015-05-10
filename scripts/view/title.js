define([
    'underscore'
], function(_) {
    'use strict';

    var FONT = '"Lucida Console", Monaco, monospace';
    var TITLE_TEXT = 'SNAKE';
    var HIGH_SCORE_TEXT = 'High Score: ';
    var PLAY_TEXT = 'Press ENTER to play...';

    var TitleView = function(context, titleModel) {
        this.context = context;
        this.titleModel = titleModel;
    };

    _.extend(TitleView.prototype, {
        render: function() {
            this.context.fillStyle = '#292900';
            this.context.textAlign = 'center';
            var x = this.titleModel.arenaPixelWidth / 2;
            var y = this.titleModel.arenaPixelHeight / 2;

            this.setFontSize(200);
            this.context.fillText(TITLE_TEXT, x, y);

            y += 120;
            this.setFontSize(50);
            this.context.fillText(HIGH_SCORE_TEXT + this.titleModel.highScore, x, y);

            y = this.titleModel.arenaPixelHeight - 120;
            this.setFontSize(40);
            this.context.fillText(PLAY_TEXT, x, y);
        },

        setFontSize: function(size) {
            this.context.font = size + 'px' + FONT;
        }
    });

    return TitleView;
});