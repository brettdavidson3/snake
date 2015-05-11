define([
    'underscore'
], function(_) {
    'use strict';

    var FONT = '"Lucida Console", Monaco, monospace';

    var View = function(mainModel) {
        this.mainModel = mainModel;
        this.canvas = mainModel.canvas;
        this.context = mainModel.context;
    };

    _.extend(View.prototype, {
        drawCenteredText: function(text, y, fontSize) {
            this.context.fillStyle = "#292900";
            this.context.textAlign = "center";
            this.context.font = fontSize + 'px' + FONT;

            var x = this.mainModel.arenaPixelWidth / 2;
            this.context.fillText(text, x, y);
        },

        drawTitleText: function(text, fontSize) {
            var y = this.mainModel.arenaPixelHeight / 2;
            this.drawCenteredText(text, y, fontSize);
        },

        drawBottomText: function(text) {
            var y = this.mainModel.arenaPixelHeight - 120;
            this.drawCenteredText(text, y, 40);
        }
    });

    return View;
});