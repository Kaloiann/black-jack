let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = true
let messege = ""
let sumEL = document.getElementById("sum-el")
let messageEL = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
 name:"Kaloyan",
 chips: 145

}


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
       return randomNumber
    }
    
}

function renderGame(){
    cardsEl.textContent = "Cards: "  
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20){
        messege = "Do you want to draw a new card?"
    } else if (sum === 21){
        messege = "You've got BlackJack!"
        hasBlackJack = true
    } else{
        messege = "You're out of the game!"
        isAlive = false
    }
   
   messageEL.textContent = messege
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
        console.log("Drawing new card from the deck!")
    } 
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}