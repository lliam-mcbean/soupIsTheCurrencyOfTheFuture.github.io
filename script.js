/*
goals:
    -   display a 52 card deck
    -   randomize the deck
    -   deal 2 cards to user
    -   betting option
    -   hit and hold buttons
    -   make dealer hit on 14 if not already winning

**** extra *****

    -   add splitting option
    -   add option to double down
    -   
*/

// value variables

let playerBank = 1000;
let dealerBank = 1000;
let playerCardValue = 0;
let dealerCardValue = 0;
let cardDeck = [];
let card1 = 0;
let card2 = 0;
let dealerCard1 = 0;
let dealerCard2 = 0;

// element variables

let smile = document.querySelector('.game-start');
let gameDisplay = document.querySelector('.wrapper-2');
let playerDisplay = document.querySelector('.player-cards');
let dealerDisplay = document.querySelector('.dealer-cards');
let stayButton = document.querySelector('.btn-stay');
let hitButton = document.querySelector('.btn-hit');
let bust = document.querySelector('.bust');
let dealButton = document.querySelector('.btn-deal');
let winner = document.querySelector('.winner');

// funcions

function playerCardDisplay(foo) {

    let li = document.createElement("li");
    let ul = document.querySelector('.player-cards');

    cardDealer(foo, li);
    playerCardFunction(foo);
    console.log(playerCardValue);
    
    ul.appendChild(li);
}

function dealerCardDisplay(foo) {

    let li = document.createElement("li");
    let ul = document.querySelector('.dealer-cards');

    cardDealer(foo, li);
    dealerCardFunction(foo);
    console.log(playerCardValue);
    
    ul.appendChild(li);
}


function cardDealer(foo, bar) {

    if (3 >= foo) {
        bar.innerHTML = 'a';
    } else if (7 >= foo) {
        bar.innerHTML = '2';
    } else if (11 >= foo) {
        bar.innerHTML = '3';
    } else if (15 >= foo) {
        bar.innerHTML = '4';
    } else if (19 >= foo) {
        bar.innerHTML = '5';
    } else if (23 >= foo) {
        bar.innerHTML = '6';
    } else if (27 >= foo) {
        bar.innerHTML = '7';
    } else if (31 >= foo) {
        bar.innerHTML = '8';
    } else if (35 >= foo) {
        bar.innerHTML = '9';
    } else if (39 >= foo) {
        bar.innerHTML = '10';
    } else if (43 >= foo) {
        bar.innerHTML = 'j';
    } else if (47 >= foo) {
        bar.innerHTML = 'q';
    } else {
        bar.innerHTML = 'k';
    }
}

function playerCardFunction(foo) {

    let bar = 0;

    if (3 >= foo) {
        bar = 11;
    } else if (7 >= foo) {
        bar = 2;
    } else if (11 >= foo) {
        bar = 3;
    } else if (15 >= foo) {
        bar = 4;
    } else if (19 >= foo) {
        bar = 5;
    } else if (23 >= foo) {
        bar = 6;
    } else if (27 >= foo) {
        bar = 7;
    } else if (31 >= foo) {
        bar = 8;
    } else if (35 >= foo) {
        bar = 9;
    } else if (39 >= foo) {
        bar = 10;
    } else if (43 >= foo) {
        bar = 10;
    } else if (47 >= foo) {
        bar = 10;
    } else {
        bar = 10;
    }

    playerCardValue += bar;
}

function dealerCardFunction(foo) {

    let bar = 0;

    if (3 >= foo) {
        bar = 11;
    } else if (7 >= foo) {
        bar = 2;
    } else if (11 >= foo) {
        bar = 3;
    } else if (15 >= foo) {
        bar = 4;
    } else if (19 >= foo) {
        bar = 5;
    } else if (23 >= foo) {
        bar = 6;
    } else if (27 >= foo) {
        bar = 7;
    } else if (31 >= foo) {
        bar = 8;
    } else if (35 >= foo) {
        bar = 9;
    } else if (39 >= foo) {
        bar = 10;
    } else if (43 >= foo) {
        bar = 10;
    } else if (47 >= foo) {
        bar = 10;
    } else {
        bar = 10;
    }

    dealerCardValue += bar;
}

function dealCards() {

    smile.style.display = 'none';
    gameDisplay.style.display = 'block';
    bust.style.display = 'none';
    playerDisplay.style.display = 'flex';
    dealButton.style.display = 'none';
    stayButton.style.display = 'flex';
    hitButton.style.display = 'flex';
    winner.style.display = 'none';

    playerDisplay.innerHTML = '';
    dealerDisplay.innerHTML = '';
    
        // generates array of 52
            for (i=1; 52 >= i; i++) {
                cardDeck.push(i);
            } 


        // card 1 randomizer
            card1 = ((Math.random()*52)-1);
            card1 = Math.floor(card1);
            card1 = cardDeck.splice(card1, 1);

            dealerCard1 = ((Math.random()*51)-1);
            dealerCard1 = Math.floor(dealerCard1);
            dealerCard1 = cardDeck.splice(dealerCard1, 1);
            
        // card 2 randomizer
            card2 = ((Math.random()*50)-1);
            card2 = Math.floor(card2);
            card2 = cardDeck.splice(card2, 1);

            dealerCard2 = ((Math.random()*49)-1);
            dealerCard2 = Math.floor(dealerCard2);
            dealerCard2 = cardDeck.splice(dealerCard2, 1);



            console.log(cardDeck);

            // assign value to the cards displayed

            playerCardDisplay(card1);
            playerCardDisplay(card2);

            // dealer card display

            dealerCardDisplay(dealerCard1);
            dealerCardDisplay(dealerCard2);

            dealerDisplay.firstChild.style.display = 'none';

};


smile.addEventListener('click', function () {

    dealCards();
        
});


// hit button function
hitButton.addEventListener('click', function () {

    // create a hit card
    let hitCard = ((Math.random()*48)-1);
    hitCard = Math.floor(hitCard);
    hitCard = cardDeck.splice(hitCard, 1);

    let li = document.createElement("li");
    let ul = document.querySelector('.player-cards');

    cardDealer(hitCard, li);
    playerCardFunction(hitCard);
    console.log(playerCardValue);

    // busting

    if (playerCardValue > 21) {

        playerDisplay.style.display = 'none';
        bust.style.display = 'block';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        dealButton.style.display = 'block';
        dealerDisplay.firstChild.style.display = 'flex';
        dealButton.className = 'btn-deal';

        winner.style.display = 'flex';
        winner.innerHTML = 'better luck next time';
        
        card1 = 0;
        card2 = 0;
        dealerCard1 = 0;
        dealerCard2 = 0;
        playerCardValue = 0;
        dealerCardValue = 0;
        cardDeck = [];
    }

    ul.appendChild(li);

});

// redeal function
dealButton.addEventListener('click', function() {
    
    dealCards();

});

// stay button function
stayButton.addEventListener('click', function() {

    dealerDisplay.firstChild.style.display = 'flex';

    if (dealerCardValue < 14) {

        let hitCard = ((Math.random()*48)-1);
        hitCard = Math.floor(hitCard);
        hitCard = cardDeck.splice(hitCard, 1);

        let li = document.createElement("li");

        cardDealer(hitCard, li);
        dealerCardFunction(hitCard);

        dealerDisplay.appendChild(li);

    }

    winner.style.display = 'flex';

    if (playerCardValue > dealerCardValue) {

        winner.innerHTML = 'winner!';
        
    } else {

        winner.innerHTML = 'better luck next time';

    }

    card1 = 0;
    card2 = 0;
    dealerCard1 = 0;
    dealerCard2 = 0;
    playerCardValue = 0;
    dealerCardValue = 0;
    cardDeck = [];

    stayButton.style.display = 'none';
    hitButton.style.display = 'none';
    dealButton.style.display = 'flex';
            
});


