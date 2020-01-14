
//Set Variables

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessRemain = [];


//Set up win/loss functions and push key

document.onkeyup = function (event) {
  
    userGuess = event.key;
    guessRemain.push(userGuess);

var userGuess = document.onkeyup;

var compGuess = letters[Math.floor(Math.random() * letters.length)];

  if (compGuess == userGuess) {
    wins++;
    guessesLeft = 10;
    guessRemain = [];
  }
  
  if (compGuess != userGuess) {
    guessesLeft--;
    
  }

  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;
    guessRemain = [];
  }

  //HTML
  var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess What Letter Im thinking of</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses left: ' + guessesLeft + '</p>' +
    '<p>Your guesses so far: ' + guessRemain + '</p>';

    //Set getElementId
    document.getElementById("psychic").innerHTML = html;
}