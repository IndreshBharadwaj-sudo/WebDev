var giveMeAJoke = require('give-me-a-joke');
var colors = require('colors');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});