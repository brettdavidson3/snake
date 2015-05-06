define(function(require) {

    var _ = require('underscore');

    console.log(_);

    function startGame() {
    	setUpRequestAnimationFrame();
    	resizeCanvas();
    	window.requestAnimationFrame(gameLoop);
    }

    startGame();

    function setUpRequestAnimationFrame() {
    	window.requestAnimationFrame =
    		window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame;

        if (!window.requestAnimationFrame) {
    		throw 'Unsupported browser, please use the latest version of Chrome, Safari, or Firefox.'
    	}
    }

    function resizeCanvas() {
    	var canvas = document.getElementById("canvas");

    	// draw at twice the resolution to support different densities
    	canvas.width *= 2;
    	canvas.height *= 2;
    }

    function gameLoop() {
    	var canvas = document.getElementById("canvas"),
    		width = canvas.width,
    		height = canvas.height,
    	    context = canvas.getContext("2d");

    	clearCanvas(context, width, height);
    	drawFrame(context, width, height);

    	window.requestAnimationFrame(gameLoop);
    }

    function clearCanvas(context, width, height) {
    	context.fillStyle = "#CCCC00";
    	context.fillRect(0, 0, width, height);

    	context.strokeStyle = "#292900";
    	context.lineWidth = 2;
    	context.strokeRect(4.5, 5, width - 10, height - 10);
    }

    function drawFrame(context, width, height) {
    	//var blockSize
    	context.fillStyle = "#292900";
    	//context.fillRect(50, 50, , 200);
    }

    function WorldModel(width, height) {
    	this.width = width;
    	this.height = height;
    	this.arenaWidth =
    	this.blockSize = width / 16;
    }

});