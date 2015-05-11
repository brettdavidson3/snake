define([
    'underscore',
    'controller/controller'
], function(_, Controller) {
    'use strict';

    var TitleController = function(titleModel, showGameScreenCallback) {
        Controller.call(this);
        this.titleModel = titleModel;
        this.showGameScreenCallback = showGameScreenCallback;
        this.registerKey(13, _.bind(this.onEnterPressed, this)); // ENTER key
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