define([
    'underscore'
], function(_) {
    'use strict';

    var InputListener = function() {
        this.registeredActions = {};
        var me = this;
        document.addEventListener('keydown', function(event) {
            me.onKeyDown(event.which);
        }, false);
    };

    _.extend(InputListener.prototype, {
        register: function(key, action) {
            this.registeredActions[key] = action;
        },

        onKeyDown: function(key) {
            var action = this.registeredActions[key];
            if (action) {
                action();
            }
        },

    });

    return InputListener;
});