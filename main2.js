const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTIONS = [
    {
        name: 'rock',
        image: '@',
        beats: 'scissors'
    },
    {
        name: 'paper',
        image: '#',
        beats: 'rock'
    },
    {
        name: 'scissors',
        image: '%',
        beats: 'paper'
    }
]

const selectionButtons = document.querySelectorAll('[data-selection]').forEach((selectionButton) => {
    selectionButton.addEventListener('click', (e) => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
            
    })        
})

function makeSelection(selection) {
    const compChoice = compSelection();
    const yourWinner = isWinner(selection, compChoice)
    const compWinner = isWinner(compChoice, selection)
    addSelectionResult(compChoice, compWinner)
    addSelectionResult(selection, yourWinner)
    if (yourWinner) {incrementScore(yourScoreSpan)}
    if (compWinner) {incrementScore(computerScoreSpan)}
}

function incrementScore (scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1

}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.image
    div.classList.add('result-selection')
    if(winner) {
        div.classList.add('winner')
    }
    finalColumn.after(div)
}

function compSelection() {
    let number = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[number];
}




