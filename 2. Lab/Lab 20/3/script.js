'use strict'

const maxNumber = 20
const minNumber = 1
const avgNumber = Math.trunc((maxNumber + minNumber) / 2)
let secretNumber = Math.trunc(Math.random() * maxNumber) + 1
let score = avgNumber
let highscore = 0

document.querySelector('.score').textContent = score
document.querySelector('.highscore').textContent = highscore
document.querySelector('.between').textContent = `(Between ${minNumber} and ${maxNumber})`

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
        //check input number
    if (!guess) {
        displayMessage('⛔️ No number!')
    } else if (guess < minNumber || guess > maxNumber) {
        displayMessage(`⛔️ Input number between ${minNumber} and ${maxNumber}!`)
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
            // update highscore
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess !== secretNumber) {
        score--
        if (score > 0) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = avgNumber
    secretNumber = Math.trunc(Math.random() * 20) + 1

    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})