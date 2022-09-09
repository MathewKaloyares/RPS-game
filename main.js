const selections = ['rock', 'paper', 'scissors']
const playerScore = document.querySelector('.playerScoreDisplay')
const computerScore = document.querySelector('.computerScoreDisplay')
let score = 0
let compScore = 0




const selectionButtons = document.querySelectorAll('.choiceButtons').forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const selection = e.target.id 
        const compGuess = getRandomGuess()
        const outcome = getResult(selection, compGuess)
        playerScore.innerHTML = `PlayerScore: ${score}`
        computerScore.innerHTML = `ComputerScore: ${compScore}`
        isWinner(score, compScore)
    })
})
    

function getRandomGuess () {
    let result = ''
    const guess = Math.floor(Math.random() * selections.length)
    switch (guess){
        case 0:
            result = 'rock'
            console.log('rock')
            break
        case 1:
            result = 'paper'
            console.log('paper')
            break
        case 2:
            result = 'scissors'
            console.log('scissors')
            break
    }
    return result;
}

function getResult (selection, compGuess){
    let selectionsDisplay = document.querySelector('.selectionsDisplay')
    if(selection === compGuess){
        selectionsDisplay.innerHTML = `its a draw ${selection} ties ${compGuess}`
        return score += 0, compScore += 0
    }
    if(selection === "rock" && compGuess === "scissors"){
        selectionsDisplay.innerHTML = `you win ${selection} beats ${compGuess}`
        return score += 1
    }
    if(selection === "paper" && compGuess === "rock"){
        selectionsDisplay.innerHTML = `you win ${selection} beats ${compGuess}`
        return score += 1
    }
    if(selection === "scissors" && compGuess === "paper"){
        selectionsDisplay.innerHTML = `you win ${selection} beats ${compGuess}`
        return score += 1
    }
    if(selection === "rock" && compGuess === "paper"){
        selectionsDisplay.innerHTML = `you lose ${compGuess} beats ${selection}`
        return compScore += 1
    }
    if(selection === "scissors" && compGuess === "rock"){
        selectionsDisplay.innerHTML = `you lose ${compGuess} beats ${selection}`
        return compScore += 1
    }
    if(selection === "paper" && compGuess === "scissors"){
        selectionsDisplay.innerHTML = `you lose ${compGuess} beats ${selection}`
        return compScore += 1
    }
}

function isWinner (playerScore, computerScore){
    let win = document.querySelector('.winner')
    if (playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            return win.innerHTML = 'player is the winner'
        } else {
            return win.innerHTML = 'computer is the winner'
        }
    }
}