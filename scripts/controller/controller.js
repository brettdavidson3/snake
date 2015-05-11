define([
    'underscore'
], function(_) {
    'use strict';

    var Controller = function() {
        this.registeredActions = {};
        this.childControllers = [];
        this.keyDownListener = _.bind(this.onKeyDown, this);
        document.addEventListener('keydown', this.keyDownListener);
    };

    _.extend(Controller.prototype, {
        registerKey: function(key, action) {
            this.registeredActions[key] = action;
        },

        onKeyDown: function(event) {
            var key = event.which;
            var action = this.registeredActions[key];
            if (action) {
                action();
            }
        },

        addChildController: function(childController) {
            this.childControllers.push(childController);
            return childController;
        },

        destroy: function() {
            _.each(this.childControllers, function(childController) {
                childController.destroy();
            });
            this.pauseKeyListeners();
        },

        pauseKeyListeners: function() {
            document.removeEventListener('keydown', this.keyDownListener);
        },

        resumeKeyListeners: function() {
            document.addEventListener('keydown', this.keyDownListener);
        }

    });

    return Controller;
});