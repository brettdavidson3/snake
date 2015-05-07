define(function(require) {
    'use strict';

    var Rectangle = function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    return Rectangle;
});