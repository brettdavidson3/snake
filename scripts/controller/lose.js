define([
    'underscore',
    'controller/input'
], function(_, InputListener) {
    'use strict';

    var LoseController = function(loseModel, showTitleScreenCallback) {
        this.loseModel = loseModel;
        this.showTitleScreenCallback = showTitleScreenCallback;
        this.initInputListener();
    };

    _.extend(LoseController.prototype, {
        initInputListener: function() {
            this.inputListener = new InputListener();
            this.inputListener.register(13, _.bind(function() { // ENTER key
                this.inputListener.clear();
                this.showTitleScreenCallback(this.loseModel.highScore);
            }, this));
        },

        update: function(timestamp) {

        },
    });

    return LoseController;
});