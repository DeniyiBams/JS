// document.getElementById("count-el").innerText = 6
// let count = 0
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let entry = "Previous entries: "
// function increment() {
//     count = count + 1
//     countEl.textContent = count
// }
// function reset() {
//     count = 0
//     countEl.textContent = count
// }

// function save() {
//     let entry = count + " - "
//     saveEl.textContent += entry
//     countEl.textContent = 0
//     count = 0
// }

// let err = document.getElementById("error")
// let errrorMessage = "Something went wrong, please try again"
// function purchase() {
//     err.textContent = errrorMessage
// }

let firstCard = 10
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackajack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}