define([
    'underscore',
    'view/snake'
], function(_, SnakeView) {
    'use strict';

    var GameView = function(context, gameModel) {
        this.snakeView = new SnakeView(context, gameModel);
    };

    _.extend(GameView.prototype, {
        render: function() {
            this.snakeView.render();
        }
    });

    return GameView;
});