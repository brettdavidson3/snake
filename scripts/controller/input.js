define([
    'underscore'
], function(_) {
    'use strict';

    var InputListener = function() {
        this.registeredActions = {};
        this.anyActions = [];
        this.keyDownListener = _.bind(this.onKeyDown, this);
        document.addEventListener('keydown', this.keyDownListener);
    };

    _.extend(InputListener.prototype, {
        register: function(key, action) {
            this.registeredActions[key] = action;
        },

        onKeyDown: function(event) {
            var key = event.which;
            var action = this.registeredActions[key];
            if (action) {
                action();
            }
            _.each(this.anyActions, function(action) {
                action();
            });
        },

        clear: function() {
            document.removeEventListener('keydown', this.keyDownListener);
        }

    });

    return InputListener;
});