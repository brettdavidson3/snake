define([
    'underscore'
], function(_) {
    'use strict';

    var SnakeView = function(context, gameModel) {
        this.context = context;
        this.snakeModel = gameModel.snake;
        this.blockSize = gameModel.blockSize;
    };

    _.extend(SnakeView.prototype, {
        render: function() {
            var me = this;
            _.each(this.snakeModel.body, function(block) {
                me.context.fillStyle = "#292900";

                var x = block.x * me.blockSize;
                var y = block.y * me.blockSize;
                me.context.fillRect(x, y, me.blockSize, me.blockSize);
            });
        }
    });

    return SnakeView;
});