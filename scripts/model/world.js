define([
    'model/rectangle'
], function(Rectangle) {
    'use strict';

    var WorldModel = function(canvas) {
        this.arena = new Rectangle(0, 0, canvas.width, canvas.height);
        this.blockSize = this.arena.width / 16;
    };

    return WorldModel;
});