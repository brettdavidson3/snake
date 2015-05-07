'use strict';

require.config({
    baseUrl: 'scripts',
    paths: {
        'underscore': '../bower_components/underscore/underscore'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

function start() {
    require(['controller/game'], function(GameController) {
        var canvas = document.getElementById("canvas");
        var controller = new GameController(canvas);
        controller.startGame();
    });
}

start();