// Global Variables
//-------------------------------------------------------------------

var words =["monkey", "elephant", "bird", "lion", "tiger"];
var selectedWord = [];
var lettersInWord = [];
var numBlanks = [];
var numBlanksAndSuccess = [];
var wrongGuesses = [];
var wins = [];

//game counters
var winCount = [];
var lossCount = [];
var guessesLeft = 9;




//Functions (blocks of code to call upon later)
//-----------------------------------------------------------------

function startGame() {
// generate random word from array
var selectedWord = words[Math.floor(Math.random() * words.length)];
lettersInWord = selectedWord.split("");
numBlanks = lettersInWord.length;

//reset
guessesLeft = 9;
wrongGuesses = [];
numBlanksAndSuccess =[];

//populate blanks and sucesses
for(var i = 0; i<numBlanks; i++){
    numBlanksAndSuccess.push("_")
}

//debug
console.log("selectedWord",selectedWord)
console.log("letters in word", lettersInWord)
console.log("num blanks", numBlanks)
console.log("blanks and successes", numBlanksAndSuccess)

}

function checkLetters(letter) {
    //check if letter exist in word
    var isLetterInWord = false;
    for(var i = 0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterinWord = true;
        }
    }
}


// //change html to align with game 

// document.getElementById("wordToGuess").innerHTML = numBlanksAndSuccess.join("  ");
// document.getElementById("letterGuessed").innerHTML = letterGuessed;
// document.getElementById("winCount").innerHTML = winCount;
// document.getElementById("lossCount").innerHTML = lossCount

var html =
          "<p>Word to guess " + numBlanksAndSuccess + "</p>" +
          "<p>Wrong guesses: " + wrongGuesses + "</p>" +
          "<p>Wins: " + winCount + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>"
        //   "<p>Guesses so Far: " + guessedLetters + "<p>"

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html
        


//Main Process
//------------------------------------------------------



startGame()
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);


  console.log("letterGuessed", letterGuessed)
}

//register key clicks


// var guessedLetters = [];
// var guessesRemaining = [];
// var userGuess = [];

// //An array of words that may appear on hangman
// var words =["monkey", "elephant", "bird", "lion", "tiger"]

// //Randomly picking a word from words array
// var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word)

// var answerArray = [];
// // creates a looping variable i that starts at 0 and goes up to, but does not include word.lenght.  When the loop finishes, the answer array will be the same lenght of the word
// for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
//  console.log(answerArray)

//  //whenever a user presses a key
//  document.onkeyup = function (event) {
//      var userGuess = event.key;
//      guessedLetters.push(userGuess)
//  }


// //  // to keep track of how manhy letters there are still to be guessed. need to decrese by 1 when correctly guessed
// //  var remainingLetters = word.length;
// //  console.log(remainingLetters)

// //  while (remainingLetters > 0) {
// //     // game code goes here
// //     //show player their progress
// //     alert(answerArray.join(""));
// //     //take input from player

// // //take guess from player and save to guess variable
// // var guess = prompt("Guess a letter or hit cancel to stop playing")
// //     //if condition is null, break the loop
// //     if (guess === null) {
// //         break;
// //     // if 
// //     } else if (guess.length !== 1) {
// //         alert ("please enter a single letter")
// //     } else {
// //         guessedLetters.push(userGuess)

// //     }
// //     //update answer array and remaining letters for every correct guess
// //     // create loop from 0 to the word lenght (each loop compiles a letter)
// //     for (var j = 0; j < word.length; j++) {
// //         //does the current letter match the players guess
// //         if (word [j] === guess) {
// //             answerArray[j] = guess;
// //             remainingLetters--;
// //         }
// //     }

// //  }