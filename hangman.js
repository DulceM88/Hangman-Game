var wordBank = [ 
		"funke", 
		"illusions",
		"parmesan",
		"egg",
		"hermano",
		"shemale",
		"vodka",
		"bluth",
		"blue",
		"annyong"
	]

var numTries= 9;
var lettersPicked=[];
var winCounter =0;
var lossCounter= 0;
var wordChosen;
var blankSpaces;


//start of game
function startGame(){

var numTries= 9;
var lettersPicked=[];
var lettersOfWord=[];
var blankSpaces;
var underScores=[];
// here we are going inside the wordBank array and executing a function that multipies the num of
//words in wordBank 
wordChosen = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(wordChosen);
//function that splits word chosen into an array of letters and stores them in lettersOfWord
lettersOfWord = wordChosen.split("");
//number of letters in the chosen word is now stored in blankSpaces
blankSpaces = lettersOfWord.length;
console.log(blankSpaces);

for (var i=0; i<blankSpaces; i++){
	underScores.push("_");
}

document.getElementById('word-blank').innerHTML = underScores.join(" ");
document.getElementById('guesses-left').innerHTML = numTries;
	

}



startGame();
