let topleft = document.getElementById('topleft');
let topmiddle = document.getElementById('topmiddle');
let topright = document.getElementById('topright');
let middleleft = document.getElementById('middleleft');
let middlemiddle = document.getElementById('middlemiddle');
let middleright = document.getElementById('middleright');
let bottomleft = document.getElementById('bottomleft');
let bottommiddle = document.getElementById('bottommiddle');
let bottomright = document.getElementById('bottomright');

let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');

let playerOneWins = document.getElementById('player1Wins');
let playerOneTies = document.getElementById('player1Ties');
let playerOneLosses = document.getElementById('player1Losses');
let playerTwoWins = document.getElementById('player2Wins');
let playerTwoTies = document.getElementById('player2Ties');
let playerTwoLosses = document.getElementById('player2Losses');
let playerPCWins = document.getElementById('computerWins');
let playerPCTies = document.getElementById('computerTies');
let playerPCLosses = document.getElementById('computerLosses');

const pcArray =[topleft, topmiddle, topright, middleleft, middlemiddle, middleright, bottomleft, bottommiddle, bottomright];

let winnermessage = document.getElementById('winner');
let turn = document.getElementById('turn');
let wrongComment = document.getElementById('wrong');

let pcOrPlayer2 = 2;
let player = 1; //player 1 = 1, player 2 = 2, computer = 3,
let guess='';
let arrayX = [[false,false,false],[false,false,false],[false,false,false]];
let arrayY = [[false,false,false],[false,false,false],[false,false,false]];
let arrayWinner = [];

function pcGuess(){
    let counter = 0;
    for (let i = 0; i < 9; i++){
        if(pcArray[i].innerHTML){
            counter++;
        };
    };
    if (counter > 8){
        winnermessage.style.visibility = 'visible';
        winnermessage.innerHTML = 'It is a Tie';
    } else {
        guess = pcArray[Math.floor(Math.random() * 9)];
        while (guess.innerHTML === 'X' || guess.innerHTML === 'O'){
            guess = pcArray[Math.floor(Math.random() * 9)];
        };
        return guess;
    };
};

function checkwinner(letter){
    console.log('array is:' + arrayWinner);
    if (arrayWinner[0][0] && arrayWinner[1][0] && arrayWinner[2][0]){
        topleft.style.backgroundColor = 'lightblue';
        middleleft.style.backgroundColor = 'lightblue';
        bottomleft.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[0][1] && arrayWinner[1][1] && arrayWinner[2][1]){
        topmiddle.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottommiddle.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[0][2] && arrayWinner[1][2] && arrayWinner[2][2]){
        topright.style.backgroundColor = 'lightblue';
        middleright.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[0][0] && arrayWinner[0][1] && arrayWinner[0][2]){
        topleft.style.backgroundColor = 'lightblue';
        topmiddle.style.backgroundColor = 'lightblue';
        topright.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[1][0] && arrayWinner[1][1] && arrayWinner[1][2]){
        middleleft.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        middleright.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[2][0] && arrayWinner[2][1] && arrayWinner[2][2]){
        bottomleft.style.backgroundColor = 'lightblue';
        bottommiddle.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[0][0] && arrayWinner[1][1] && arrayWinner[2][2]){
        topleft.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
    if (arrayWinner[0][2] && arrayWinner[1][1] && arrayWinner[2][0]){
        topright.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottomleft.style.backgroundColor = 'lightblue';
        if (letter === 'X'){
            winnermessage.innerHTML = 'Player 1 Wins';
        } else if (pcOrPlayer2 === 2) {
            winnermessage.innerHTML = 'Player 2 Wins';
        } else {
            winnermessage.innerHTML = 'The Computer Wins';
        };
        winnermessage.style.visibility = 'visible';
    };
};

function toggleBoolean(position){
    console.log('position: ' + position);
    switch(position){
        case 'topleft': 
            arrayWinner[0][0] = true;
            break;
        case 'topmiddle':
            arrayWinner[0][1] = true;
            break;
        case 'topright':
            arrayWinner[0][2] = true;
            break;
        case 'middleleft': 
            arrayWinner[1][0] = true;
            break;
        case 'middlemiddle':
            arrayWinner[1][1] = true;
            break;
        case 'middleright':
            arrayWinner[1][2] = true;
            break;
        case 'bottomleft': 
            arrayWinner[2][0] = true;
            break;
        case 'bottommiddle':
            arrayWinner[2][1] = true;
            break;
        case 'bottomright':
            arrayWinner[2][2] = true;
            break;
    };
};


function selected(buttonselected){
    if (buttonselected.innerHTML === 'X' || buttonselected.innerHTML === 'O'){
        wrongComment.style.visibility = 'visible';
    } else {
        wrongComment.style.visibility = 'hidden';
        if (pcOrPlayer2 === 2){
            if(player === 1){
                arrayWinner = arrayX;
                buttonselected.innerHTML = 'X';
                player = pcOrPlayer2;
                toggleBoolean(buttonselected.value);
                checkwinner('X');
                turn.innerHTML = pcOrPlayer2Name;
            } else if (player === 2) {
                arrayWinner = arrayY;
                buttonselected.innerHTML = 'O';
                toggleBoolean(buttonselected.value);
                checkwinner('O');
                player = 1;
                turn.innerHTML = 'Player 1';
            };
        } else {
                arrayWinner = arrayX;
                buttonselected.innerHTML = 'X';
                player = pcOrPlayer2;
                toggleBoolean(buttonselected.value);
                checkwinner('X');
                turn.innerHTML = pcOrPlayer2Name;
                pcGuess();
                arrayWinner = arrayY;
                guess.innerHTML = 'O';
                toggleBoolean(guess.value);
                checkwinner('O');
                player = 1;
                turn.innerHTML = 'Player 1';

        };
    };
};

playerOne.onclick = () =>{
    playerOne.style.backgroundColor = 'lightgreen';
    playerTwo.style.backgroundColor = '';
    pcOrPlayer2 = 3;
    pcOrPlayer2Name = 'Computer';
};

playerTwo.onclick = () =>{
    playerOne.style.backgroundColor = '';
    playerTwo.style.backgroundColor = 'lightgreen';
    pcOrPlayer2 = 2;
    pcOrPlayer2Name = 'Player 2';
};


/*topleft.onclick = () => {
    selected(topleft);
}*/

topleft.onclick = () => {
    selected(topleft);
};

topmiddle.onclick = () => {
    selected(topmiddle);
};

topright.onclick = () => {
    selected(topright);
};

middleleft.onclick = () => {
    selected(middleleft);
};

middlemiddle.onclick = () => {
    selected(middlemiddle);
};

middleright.onclick = () => {
    selected(middleright);
};
bottomleft.onclick = () => {
    selected(bottomleft);
};

bottommiddle.onclick = () => {
    selected(bottommiddle);
};

bottomright.onclick = () => {
    selected(bottomright);
};