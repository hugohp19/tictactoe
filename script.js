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
let closeGif = document.getElementById('closeGif');
let resetButton = document.getElementById('reset');

const pcArray =[topleft, topmiddle, topright, middleleft, middlemiddle, middleright, bottomleft, bottommiddle, bottomright];

let winnermessage = document.getElementById('winner');
let turn = document.getElementById('turn');
let wrongComment = document.getElementById('wrong');
let winnerGif = document.getElementById("overlaygif");
let pcOrPlayer2 = 0;
let player = 1; //player 1 = 1, player 2 = 2, computer = 3,
let guess='';
let arrayX = [[false,false,false],[false,false,false],[false,false,false]];
let arrayY = [[false,false,false],[false,false,false],[false,false,false]];
let arrayWinner = [];
let pcCount = {wins: 0, ties: 0, losses: 0};
let player1Count = {wins: 0, ties: 0, losses: 0};
let player2Count = {wins: 0, ties: 0, losses: 0};

//////////////////////////////////////////////////////////
////////////////////// FUNCTIONS /////////////////////////
//////////////////////////////////////////////////////////


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

function iHaveaWinnerSettings(letter){
    if (letter === 'X'){
        winnermessage.innerHTML = 'Player 1 Wins';
        player1Count.wins++;
        playerOneWins.innerHTML = player1Count.wins;
        if (pcOrPlayer2 === 2){
            player2Count.losses++;
            playerTwoLosses.innerHTML = player2Count.losses;
        } else if (pcOrPlayer2 === 3){
            pcCount.losses++;
            playerPCLosses.innerHTML = pcCount.losses;
        };
    } else if (pcOrPlayer2 === 2) {
        winnermessage.innerHTML = 'Player 2 Wins';
        player2Count.wins++;
        playerTwoWins.innerHTML = player2Count.wins;
        player1Count.losses++;
        playerOneLosses.innerHTML = player1Count.losses;
    } else {
        winnermessage.innerHTML = 'The Computer Wins';
        pcCount.wins++;
        playerPCWins.innerHTML = pcCount.wins;
        player1Count.losses++;
        playerOneLosses.innerHTML = player1Count.losses;
    };
    winnermessage.style.visibility = 'visible';
    winnerGif.style.visibility = 'visible';
    closeGif.style.visibility = 'visible';
    turn.style.visibility = 'hidden';
    for (let i = 0; i < 9; i++){
        pcArray[i].disabled = true;
    };
};

function itsaTie(){
    let counter = 0;
    for (let i = 0; i < 9; i++){
        if(pcArray[i].innerHTML){
            counter++;
        };
    };
        if (counter > 8){
            winnermessage.style.visibility = 'visible';
            winnermessage.innerHTML = 'It is a Tie';
            player1Count.ties++;
            playerOneTies.innerHTML = player1Count.ties;
            if (pcOrPlayer2 === 2){
                player2Count.ties++;
                playerTwoTies.innerHTML = player2Count.ties;
            } else {
                pcCount.ties++;
                playerPCTies.innerHTML = pcCount.ties;
            };
            for (let i = 0; i < 9; i++){
                pcArray[i].disabled = true;
            };
            turn.style.visibility = 'hidden';
        }; 
}

function checkwinner(letter){
    console.log('array is:' + arrayWinner);
    if (arrayWinner[0][0] && arrayWinner[1][0] && arrayWinner[2][0]){
        topleft.style.backgroundColor = 'lightblue';
        middleleft.style.backgroundColor = 'lightblue';
        bottomleft.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);

    };
    if (arrayWinner[0][1] && arrayWinner[1][1] && arrayWinner[2][1]){
        topmiddle.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottommiddle.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[0][2] && arrayWinner[1][2] && arrayWinner[2][2]){
        topright.style.backgroundColor = 'lightblue';
        middleright.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[0][0] && arrayWinner[0][1] && arrayWinner[0][2]){
        topleft.style.backgroundColor = 'lightblue';
        topmiddle.style.backgroundColor = 'lightblue';
        topright.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[1][0] && arrayWinner[1][1] && arrayWinner[1][2]){
        middleleft.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        middleright.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[2][0] && arrayWinner[2][1] && arrayWinner[2][2]){
        bottomleft.style.backgroundColor = 'lightblue';
        bottommiddle.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[0][0] && arrayWinner[1][1] && arrayWinner[2][2]){
        topleft.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottomright.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
    };
    if (arrayWinner[0][2] && arrayWinner[1][1] && arrayWinner[2][0]){
        topright.style.backgroundColor = 'lightblue';
        middlemiddle.style.backgroundColor = 'lightblue';
        bottomleft.style.backgroundColor = 'lightblue';
        iHaveaWinnerSettings(letter);
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
                itsaTie();
            } else if (player === 2) {
                arrayWinner = arrayY;
                buttonselected.innerHTML = 'O';
                toggleBoolean(buttonselected.value);
                checkwinner('O');
                player = 1;
                turn.innerHTML = 'Player 1';
                itsaTie();
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
                itsaTie();

        };
    };
};

function resetGame(){
    for (let i = 0; i < 9; i++){
        pcArray[i].disabled = false;
        pcArray[i].innerHTML = '';
        pcArray[i].style.backgroundColor = '';
    };
    arrayX = [[false,false,false],[false,false,false],[false,false,false]];
    arrayY = [[false,false,false],[false,false,false],[false,false,false]];
    player = 1;
    pcOrPlayer2 = 0;
    guess='';
    arrayWinner = [];
    winnermessage.style.visibility = 'hidden';
    winnerGif.style.visibility = 'hidden';
    closeGif.style.visibility = 'hidden';
    turn.style.visibility = 'hidden';
};


//////////////////////////////////////////////////////////
/////////////////////// EVENTS ///////////////////////////
//////////////////////////////////////////////////////////


closeGif.onclick = () =>{
    document.getElementById('overlaygif').style.visibility = 'hidden';
    document.getElementById('closeGif').style.visibility = 'hidden';
}

playerOne.onclick = () =>{
    resetGame();
    playerOne.style.backgroundColor = 'lightgreen';
    playerTwo.style.backgroundColor = '';
    pcOrPlayer2 = 3;
    pcOrPlayer2Name = 'Computer';
    turn.style.visibility = 'visible';
};

playerTwo.onclick = () =>{
    resetGame();
    playerOne.style.backgroundColor = '';
    playerTwo.style.backgroundColor = 'lightgreen';
    pcOrPlayer2 = 2;
    pcOrPlayer2Name = 'Player 2';
    turn.style.visibility = 'visible';
};


topleft.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(topleft);
    };
};

topmiddle.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(topmiddle);
    };
};

topright.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(topright);
    };
};

middleleft.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(middleleft);
    };
};

middlemiddle.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(middlemiddle);
    };
};

middleright.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(middleright);
    };
};
bottomleft.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(bottomleft);
    };
};

bottommiddle.onclick = () => {
    if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(bottommiddle);
    };
};

bottomright.onclick = () => {
        if (pcOrPlayer2 === 0){
        alert("You need to click on the 1 Player or 2 Player button");
    } else {
    selected(bottomright);
    };
};

resetButton.onclick = () => {
    resetGame();
};

