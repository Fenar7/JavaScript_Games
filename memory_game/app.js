const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png',
    },

    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },

    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },

    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },

    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },

    {
        name: "pizza",
        img: 'images/pizza.png',
    },



    {
        name: "fries",
        img: 'images/fries.png',
    },

    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png',
    },

    {
        name: "hotdog",
        img: 'images/hotdog.png',
    },

    {
        name: "ice-cream",
        img: 'images/ice-cream.png',
    },

    {
        name: "milkshake",
        img: 'images/milkshake.png',
    },

    {
        name: "pizza",
        img: 'images/pizza.png',
    },
]


cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const gridDisplay = document.querySelector('#grid')

let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
        console.log(card,i)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    console.log('check for match!')
    console.log(cards)
    if(cardsChoosen[0]==cardsChoosen[1]){
        alert('You found a match')
        cards[cardsChoosenIds[0]].setAttribute('src','images/white.png')
        cards[cardsChoosenIds[1]].setAttribute('src','images/white.png')
        cards[cardsChoosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChoosenIds[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardsChoosen)
    }

    cardsChoosen = []
    cardsChoosenIds = []
}

function flipCard(){
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    console.log(cardsChoosen)
    console.log(cardsChoosenIds)

    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChoosen.length===2){
        setTimeout(checkMatch, 500)
    }
}