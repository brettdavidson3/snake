define([
    'underscore',
    'controller/controller',
    'model/constants/keys'
], function(_, Controller, Keys) {
    'use strict';

    var TitleController = function(titleModel, showGameScreenCallback) {
        Controller.call(this);
        this.titleModel = titleModel;
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