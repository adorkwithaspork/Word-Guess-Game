
var guessedLetters = [];
var guessesRemaining = [];
var userGuess = [];

//An array of words that may appear on hangman
var words =["monkey", "elephant", "bird", "lion", "tiger"]

//Randomly picking a word from words array
var word = words[Math.floor(Math.random() * words.length)];
    console.log(word)

var answerArray = [];
// creates a looping variable i that starts at 0 and goes up to, but does not include word.lenght.  When the loop finishes, the answer array will be the same lenght of the word
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
 console.log(answerArray)

 //whenever a user presses a key
 document.onkeyup = function (event) {
     var userGuess = event.key;
     guessedLetters.push(userGuess)
 }


//  // to keep track of how manhy letters there are still to be guessed. need to decrese by 1 when correctly guessed
//  var remainingLetters = word.length;
//  console.log(remainingLetters)

//  while (remainingLetters > 0) {
//     // game code goes here
//     //show player their progress
//     alert(answerArray.join(""));
//     //take input from player

// //take guess from player and save to guess variable
// var guess = prompt("Guess a letter or hit cancel to stop playing")
//     //if condition is null, break the loop
//     if (guess === null) {
//         break;
//     // if 
//     } else if (guess.length !== 1) {
//         alert ("please enter a single letter")
//     } else {
//         guessedLetters.push(userGuess)

//     }
//     //update answer array and remaining letters for every correct guess
//     // create loop from 0 to the word lenght (each loop compiles a letter)
//     for (var j = 0; j < word.length; j++) {
//         //does the current letter match the players guess
//         if (word [j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//         }
//     }

//  }