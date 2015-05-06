requirejs.config({
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

requirejs(['controller/game_controller']);
