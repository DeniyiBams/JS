let firstCard = 10
let secondCard = 6
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

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
    let nextCard = 7
    sum += nextCard
    cards.push(nextCard)
    renderGame()
}