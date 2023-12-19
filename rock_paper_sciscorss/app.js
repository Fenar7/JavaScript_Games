const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
let computerChoice
let userChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genrateComputerChoice()
    getResult()
}))

function genrateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * 3) + 1
    console.log(randomNumber)

    if(randomNumber===1){
        computerChoice = 'rock'
    }
    else if(randomNumber===2){
        computerChoice = 'scissors'
    }
    else{
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if(computerChoice===userChoice){
        result = 'Its a draw!'
    }
    if(computerChoice==='rock' && userChoice==='paper'){
        result = 'you win!'
    }
    if(computerChoice==='rock' && userChoice==='scissors'){
        result = 'you lost!'
    }
    if(computerChoice==='paper' && userChoice==='scissors'){
        result = 'you win!'
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result = 'you lost!'
    }
    if(computerChoice==='scissors' && userChoice==='rock'){
        result = 'you win!'
    }
    if(computerChoice==='scissors' && userChoice==='paper'){
        result = 'you lost!'
    }

    resultDisplay.innerHTML = result
}