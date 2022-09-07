const selections = ['rock', 'paper', 'scissors']
const playerScore = document.querySelector('.playerScoreDisplay')
const computerScore = document.querySelector('.computerScoreDisplay')
let score = 0
let compScore = 0

function game() {
    const selectionButtons = document.querySelectorAll('.choiceButtons').forEach(selectionButton => {
        selectionButton.addEventListener('click', (e) => {
            const selection = e.target.id 
            const compGuess = getRandomGuess()
            const outcome = getResult(selection, compGuess)
            console.log(selection)
            console.log(outcome)
        })
    })

}
const selectionButtons = document.querySelectorAll('.choiceButtons').forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const selection = e.target.id 
        const compGuess = getRandomGuess()
        const outcome = getResult(selection, compGuess)
        playerScore.innerHTML = `PlayerScore: ${score}`
        computerScore.innerHTML = `ComputerScore: ${compScore}`
        console.log(selection)
        console.log(outcome)
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
    if(selection === compGuess){
        return 'Its a Draw'
    }
    if(selection === "rock" && compGuess === "scissors"){
        score += 1
        return `you win ${selection} beats ${compGuess}`
    }
    if(selection === "paper" && compGuess === "rock"){
        score += 1
        return `you win ${selection} beats ${compGuess}`
    }
    if(selection === "scissors" && compGuess === "paper"){
        score += 1
        return `you win ${selection} beats ${compGuess}`
    }
    if(selection === "rock" && compGuess === "paper"){
        compScore += 1
        return `you lose ${compGuess} beats ${selection}`
    }
    if(selection === "scissors" && compGuess === "rock"){
        compScore += 1
        return `you lose ${compGuess} beats ${selection}`
    }
    if(selection === "paper" && compGuess === "scissors"){
        compScore += 1
        return `you lose ${compGuess} beats ${selection}`
    }
}

