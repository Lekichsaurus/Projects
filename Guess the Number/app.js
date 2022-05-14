
let number = (Math.trunc(Math.random() * 20) +1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
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
            document.querySelector('body').style.backgroundColor = "rgb(96, 179, 71)";
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').style.color = 'black';
            document.querySelector('.number').textContent = number;  

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
    document.querySelector('.number').textContent = '?';    
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'

});
