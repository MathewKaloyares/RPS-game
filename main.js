let playerScore = 0;
let compScore = 0;

function getScore(playerScore, compScore){
    if (playerScore > compScore){
        console.log(`player1 wins by ${playerScore} to ${compScore}`)
    } else if (playerScore < compScore){
        console.log(`computer wins by ${compScore} to ${playerScore}`)
    } else {
        console.log('its a draw')
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = String(prompt('Pease select rock, paper or scissors').toLowerCase())
        const computerSelection = getCompChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    getScore(playerScore, compScore);
}
function getRandInt(max = 3){
    return Math.floor(Math.random() * max)
}

function getCompChoice(){
    let choice = getRandInt();
    let guess = ['rock', 'paper', 'scissors'];
    if (choice == 0){
        return guess[0];
    } else if (choice == 1){
        return guess[1];
    } else if (choice == 2){
        return guess[2];
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {       
        return `its a tie ${playerSelection} and ${computerSelection} are the same`
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){ 
        compScore += 1;
        return `you lose ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore += 1;
        return `you win ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore += 1;
        return `you win ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore += 1;
        return `you lose ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        return `you win ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection ===  'rock'){
        compScore += 1;
        return `you lose ${computerSelection} beats ${playerSelection}`; 
    }    
}

game();
