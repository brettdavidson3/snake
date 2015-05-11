define([
    'underscore',
    'controller/controller'
], function(_, Controller) {
    'use strict';

    var LoseController = function(loseModel, showTitleScreenCallback) {
        Controller.call(this);
        this.loseModel = loseModel;
        this.showTitleScreenCallback = showTitleScreenCallback;
        this.registerKey(13, _.bind(this.onEnterPressed, this)); // ENTER key
    };

    _.extend(LoseController.prototype, Controller.prototype, {
        onEnterPressed: function() {
            this.destroy();
            this.showTitleScreenCallback(this.loseModel.highScore);
        },

        update: function(timestamp) {

        },
    });

    return LoseController;
});