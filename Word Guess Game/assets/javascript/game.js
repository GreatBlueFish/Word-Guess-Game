//---List of letters
var letterList = ['a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z',];

//---Chosen word
var chosenWord = ""; 

//---List of names
var nameList = ['leonardo', 'michelangelo', 'donatello', 'raphael', 'splinter', 'april', 'shredder'];
var nameListArr;
//---Name picked
var namePick = "";
//---Letter picked
var letterPick = [];
//---Blanks in word
var numBlanks = 0;
//---Blanks and correct guesses
var blanksAndCorrect = [];
//---Wrong guesses
var wrongGuess = [];
//---Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuesses = 0;
//---Functions
function reset() {

    namePick = nameList[Math.floor(Math.random() * nameList.length)];
    letterPick = namePick.split('');
    numBlanks = letterPick.length;

    guessedLetter = 0;
    rightGuesses = 0;
    guessesLeft = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    letterList = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z',];
    test = false;
    startUp();
}

function startUp() {
    //---Starts the game
    document.getElementById("start").onclick = startUp;

    //---Random work picked
    namePick = nameList[Math.floor(Math.random() * nameList.length)];
    //---Splits the word into letters
    letterPick = namePick.split('');
    //---Number of blanks
    numBlanks = letterPick.length;

    rightGuesses = 0;
    guessesLeft = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    letterList = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z',];

    //function startUp() {
    //letterList = letterListArr[Math.floor(Math.random() * letterListArr.length)];
    //console.log(letterList);
    //};

    for (var i = 0; i < numBlanks; i++) {
        blanksAndCorrect.push('_');
        document.getElementById('wordGuess').innerHTML = blanksAndCorrect;
    }

    document.getElementById('wordGuess').innerHTML = blanksAndCorrect.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('wins').innerHTML = winCount;
    document.getElementById('losses').innerHTML = loseCount;
    document.getElementById('wrongGuess').innerHTML = wrongGuess;

    console.log(namePick);
    console.log(letterPick);
    console.log(numBlanks);
    console.log(blanksAndCorrect);
}

function compareLetters(pressKey) {
    console.log('Works');
    if (namePick.indexOf(pressKey) > -1) {
        for (var i = 0; i < numBlanks; i++) {
            if (letterPick[i] === pressKey) {
                rightGuesses++;
                blanksAndCorrect[i] = pressKey;
                document.getElementById('wordGuess').innerHTML = blanksAndCorrect.join(' ');
            }
        }
        console.log(blanksAndCorrect);
    }
    //Wrong Guesses
    else {
        wrongGuess.push(pressKey);
        guessesLeft--;

        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuess').innerHTML = wrongGuess;

        console.log('Wrong Guess = ' + wrongGuess);
        console.log('Guesses left ' + guessesLeft);
    }
}
function winLose() {
    if (rightGuesses === numBlanks) {
        winCount++;
        //---Goes to HTML
        document.getElementById('wins').innerHTML = winCount;
        alert('Congrats You Win!');
        reset();
    }
    //---When you run out of guesses you lose
    else if (guessesLeft === 0) {
        //---Counts losses
        loseCount++;
        //---Goes to HTML
        document.getElementById('losses').innerHTML = loseCount;
        alert('Boooooo You Lose!');
        reset();
    }
}

startUp();

document.onkeypress = function (event) {
    test = true;
    var guessedLetter = event.key;
    for (var i = 0; i < letterList.length; i++) {
        if (guessedLetter === letterList[i] && test === true) {
            var spliceDword = letterList.splice(i, 1);
            console.log('Letter list = ' + letterList[i])
            console.log('Spliced word = ' + spliceDword);

            compareLetters(guessedLetter);
            winLose();
        }
    }
}