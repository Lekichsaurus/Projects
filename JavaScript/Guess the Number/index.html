'use strict';

let number = (Math.trunc(Math.random() * 20) +1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}
const numberWidth = function (width) {
    document.querySelector('.number').style.width = width;
}
const numberTextContent = function (text) {
    document.querySelector('.number').textContent = text;
}
const bodyBackground = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click',
 function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
// When there is no input
        if (!guess) {
            // document.querySelector('.message').textContent = '⛔ No Number!'
            displayMessage('⛔ No Number!');
        
            // When player wins
        } else if (guess === number){
            displayMessage( '🎉 Correct Number!')
            bodyBackground("rgb(96, 179, 71)");
            numberWidth('30rem');
            document.querySelector('.number').style.color = 'black';
            numberTextContent(number);  

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }  

        // When guess is not a number (it's either too high or too low)
        } else if (guess !== number) {
            if(score > 1) {
                displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!')
                score--;
                displayScore(score);
            } else {
                displayMessage('❌ You lost the game! ❌')
                displayScore(0);
            }
        }
    });

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = (Math.trunc(Math.random() * 20) +1);

    displayMessage('Start guessing...')
    displayScore(score);
    numberTextContent('?');    
    document.querySelector('.guess').value = '';

    bodyBackground('#222');
    numberWidth('15rem');

});
