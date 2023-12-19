const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const result = document.getElementById('result')
let computerChoice
let userChoice

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genrateComputerChoice()
}))

function genrateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * 3) + 1
    console.log(randomNumber)

    if(randomNumber==1){
        computerChoice = 'rock'
    }
    else if(randomNumber==2){
        computerChoice = 'scissors'
    }
    else{
        computerChoice = 'paper'
    }
}