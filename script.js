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

function smileClick() {
    let smile = document.querySelector('.game-start');
    let gameDisplay = document.querySelector('.wrapper-2');
    let playerCard1 = document.querySelector('.playercard-1');
    let playerCard2 = document.querySelector('.playercard-2');
    let dealer1 = document.querySelector('.dealercard-1');
    let dealer2 = document.querySelector('.dealercard-2');

    smile.addEventListener('click', function () {
        smile.style.display = 'none';
        gameDisplay.style.display = 'block';

        // generates array of 52
            let cardDeck = [];

            for (i=1; 52 >= i; i++) {
                cardDeck.push(i);
            } 


        // card 1 randomizer
            let card1 = ((Math.random()*52)-1);
            card1 = Math.floor(card1);
            card1 = cardDeck.splice(card1, 1);

            let dealerCard1 = ((Math.random()*51)-1);
            dealerCard1 = Math.floor(dealerCard1);
            dealerCard1 = cardDeck.splice(dealerCard1, 1);
            
        // card 2 randomizer
            let card2 = ((Math.random()*50)-1);
            card2 = Math.floor(card2);
            card2 = cardDeck.splice(card2, 1);

            let dealerCard2 = ((Math.random()*49)-1);
            dealerCard2 = Math.floor(dealerCard2);
            dealerCard2 = cardDeck.splice(dealerCard2, 1);



            console.log(cardDeck);

        // assign value to the cards displayed
            if (3 >= card1) {
                playerCard1.innerHTML = 'a';
            } else if (7 >= card1) {
                playerCard1.innerHTML = '2';
            } else if (11 >= card1) {
                playerCard1.innerHTML = '3';
            } else if (15 >= card1) {
                playerCard1.innerHTML = '4';
            } else if (19 >= card1) {
                playerCard1.innerHTML = '5';
            } else if (23 >= card1) {
                playerCard1.innerHTML = '6';
            } else if (27 >= card1) {
                playerCard1.innerHTML = '7';
            } else if (31 >= card1) {
                playerCard1.innerHTML = '8';
            } else if (35 >= card1) {
                playerCard1.innerHTML = '9';
            } else if (39 >= card1) {
                playerCard1.innerHTML = '10';
            } else if (43 >= card1) {
                playerCard1.innerHTML = 'j';
            } else if (47 >= card1) {
                playerCard1.innerHTML = 'q';
            } else {
                playerCard1.innerHTML = 'k';
            }

            if (3 >= card2) {
                playerCard2.innerHTML = 'a';
            } else if (7 >= card2) {
                playerCard2.innerHTML = '2';
            } else if (11 >= card2) {
                playerCard2.innerHTML = '3';
            } else if (15 >= card2) {
                playerCard2.innerHTML = '4';
            } else if (19 >= card2) {
                playerCard2.innerHTML = '5';
            } else if (23 >= card2) {
                playerCard2.innerHTML = '6';
            } else if (27 >= card2) {
                playerCard2.innerHTML = '7';
            } else if (31 >= card2) {
                playerCard2.innerHTML = '8';
            } else if (35 >= card2) {
                playerCard2.innerHTML = '9';
            } else if (39 >= card2) {
                playerCard2.innerHTML = '10';
            } else if (43 >= card2) {
                playerCard2.innerHTML = 'j';
            } else if (47 >= card2) {
                playerCard2.innerHTML = 'q';
            } else {
                playerCard2.innerHTML = 'k';
            }

            // dealer card display

            if (3 >= dealerCard1) {
                dealer1.innerHTML = 'a';
            } else if (7 >= dealerCard1) {
                dealer1.innerHTML = '2';
            } else if (11 >= dealerCard1) {
                dealer1.innerHTML = '3';
            } else if (15 >= dealerCard1) {
                dealer1.innerHTML = '4';
            } else if (19 >= dealerCard1) {
                dealer1.innerHTML = '5';
            } else if (23 >= dealerCard1) {
                dealer1.innerHTML = '6';
            } else if (27 >= dealerCard1) {
                dealer1.innerHTML = '7';
            } else if (31 >= dealerCard1) {
                dealer1.innerHTML = '8';
            } else if (35 >= dealerCard1) {
                dealer1.innerHTML = '9';
            } else if (39 >= dealerCard1) {
                dealer1.innerHTML = '10';
            } else if (43 >= dealerCard1) {
                dealer1.innerHTML = 'j';
            } else if (47 >= dealerCard1) {
                dealer1.innerHTML = 'q';
            } else {
                dealer1.innerHTML = 'k';
            }

            if (3 >= dealerCard2) {
                dealer2.innerHTML = 'a';
            } else if (7 >= dealerCard2) {
                dealer2.innerHTML = '2';
            } else if (11 >= dealerCard2) {
                dealer2.innerHTML = '3';
            } else if (15 >= dealerCard2) {
                dealer2.innerHTML = '4';
            } else if (19 >= dealerCard2) {
                dealer2.innerHTML = '5';
            } else if (23 >= dealerCard2) {
                dealer2.innerHTML = '6';
            } else if (27 >= dealerCard2) {
                dealer2.innerHTML = '7';
            } else if (31 >= dealerCard2) {
                dealer2.innerHTML = '8';
            } else if (35 >= dealerCard2) {
                dealer2.innerHTML = '9';
            } else if (39 >= dealerCard2) {
                dealer2.innerHTML = '10';
            } else if (43 >= dealerCard2) {
                dealer2.innerHTML = 'j';
            } else if (47 >= dealerCard2) {
                dealer2.innerHTML = 'q';
            } else {
                dealer2.innerHTML = 'k';
            }


    });
};

smileClick();

