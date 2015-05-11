define([
    'underscore',
    'controller/controller',
    'model/constants/keys'
], function(_, Controller, Keys) {
    'use strict';

    var LoseController = function(loseModel, showTitleScreenCallback) {
        Controller.call(this);
        this.loseModel = loseModel;
        this.showTitleScreenCallback = showTitleScreenCallback;
        this.registerKey(Keys.ENTER, _.bind(this.onEnterPressed, this));
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