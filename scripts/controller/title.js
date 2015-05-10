define([
    'underscore',
    'controller/input'
], function(_, InputListener) {
    'use strict';

    var TitleController = function(titleModel, showGameScreenCallback) {
        this.titleModel = titleModel;
        this.showGameScreenCallback = showGameScreenCallback;
        this.initInputListener();
    };

    _.extend(TitleController.prototype, {
        initInputListener: function() {
            this.inputListener = new InputListener();
            this.inputListener.register(13, _.bind(function() { // ENTER key
                this.inputListener.clear();
                this.showGameScreenCallback();
            }, this));
        },

        update: function(timestamp) {

        },
    });

    return TitleController;
});