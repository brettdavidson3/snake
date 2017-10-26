# snake
A throwback snake game using Canvas 2D

## Play Now

The game is available at: [https://brettdavidson3.github.io/snake/](https://brettdavidson3.github.io/snake/)

## Development

#### Dependencies
Development for snake requires [Bower](http://bower.io/).  To get started simply run:
```
bower install
```
The game was written with an object oriented approach and makes extensive use of [RequireJS](http://requirejs.org/) and [Underscore](http://underscorejs.org/).

#### Navigating

The game is bootstrapped in [scripts/main.js](scripts/main.js) and displayed on a Canvas in [index.html](index.html).  The main controller for the game
is [scripts/controller/main.js](scripts/controller/main.js).  This controller sets up one of many Screen objects.  

Each Screen corresponds to a specific mode of the game: Title, Game, or Lose.  Each Screen 
consists of a model, a view, and a controller which divide the logic accordingly.
