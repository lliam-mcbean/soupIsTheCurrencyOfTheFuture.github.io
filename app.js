/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying, gameLength;

let diceMemory = 0;

init();

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// let x = document.querySelector('#score-0').textContent;

function nextPlayer() {

    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

};

function init() {

    gamePlaying = true;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

};

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
    // random number
    dice = Math.floor((Math.random()*6) + 1);
    dice2 = Math.floor((Math.random()*6) + 1);
    // display result
    let diceDOM = document.querySelector('.dice')
    let diceDOM2 = document.querySelector('.dice-1')

    diceDOM.style.display = 'block';
    diceDOM2.style.display = 'block';

    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    // update the round score if the rolled number was not a 1

    if (dice === 6 && dice2 === 6) {
        document.getElementById('score-' + activePlayer).textContent = 0;
        nextPlayer();

    } else if (dice !== 1 && dice2 !== 1) {
        // add score
        roundScore += (dice + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    };
        
    } 
});

document.querySelector('.btn-input').addEventListener('click', function() {
    
    gameLength = document.getElementById("user-input").value;
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= gameLength) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
            
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

/*
extra game rules:

    // -   a player loses his entire score when he rolls 2 6s in a row. after tha, its the next players turn
    // -   add an input friend to the html where players can set the winning score
    // -   add another dice to the game. the player looses his current score when one of them is a 1
*/

