let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // generates a number from 1-13
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
    return randomNumber
    }
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackajack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Sum: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
}

function startGame() {
    renderGame()
}

function newCard() {
    let nextCard = getRandomCard()
    sum += nextCard
    cards.push(nextCard)
    renderGame()
}