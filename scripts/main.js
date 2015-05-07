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
    require(['controller/main'], function(MainController) {
        var canvas = document.getElementById("canvas");
        var controller = new MainController(canvas);
        controller.startGame();
    });
}

start();