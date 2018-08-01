var words =["monkey", "elephant", "bird", "lion", "tiger"]
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word)

var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
 console.log(answerArray)
 
 var remainingLetters = word.length;
 console.log(remainingLetters)