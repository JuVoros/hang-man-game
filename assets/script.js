// Variables
var wordBlank = document.querySelector('.word-blanks');
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startBtn = document.querySelector(".start-button");

var chosenword = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays of blank letters
var lettersInChosenWord = [];
var blankLetters = [];

// Arrays of words to guess
var words = ["horse", "cat", "monkey", "dog", "manatee", "cow", "zebra","giraffe", "lizard"]


// Page Load
function init () {
    getWins();
    getLosses();
}


