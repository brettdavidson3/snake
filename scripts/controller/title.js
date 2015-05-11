define([
    'underscore',
    'controller/controller',
    'model/constants/keys'
], function(_, Controller, Keys) {
    'use strict';

    var TitleController = function(mainModel, showGameScreenCallback) {
        Controller.call(this);
        this.showGameScreenCallback = showGameScreenCallback;
        this.registerKey(Keys.ENTER, _.bind(this.onEnterPressed, this));
    };

    _.extend(TitleController.prototype, Controller.prototype, {
        onEnterPressed: function() {
           this.destroy();
           this.showGameScreenCallback();
        },

        update: function(timestamp) {

        },
    });

    return TitleController;
});