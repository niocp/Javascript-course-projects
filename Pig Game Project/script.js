'use strict';

// Selecting elements

const score0El = document.querySelector('#score--0');

const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');

const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add('hidden');

let currentScore = 0;

let currentScore1 = 0;

let test = 0;

let test1 = 0;

let playing = true;

const playerScreen = function (variable) {

    variable.classList.contains('player--active') ? variable.classList.remove('player--active') : variable.classList.add('player--active');

};

btnRoll.addEventListener('click', function () {

    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');

        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1 && player0.classList.contains('player--active')) {

            currentScore += dice;

            current0El.value = currentScore;

            current0El.textContent = currentScore;

        } else if (dice !== 1 && player1.classList.contains('player--active')) {

            currentScore1 += dice;

            current1El.value = currentScore1;

            current1El.textContent = currentScore1;

        } else if (dice === 1 && player0.classList.contains('player--active')) {

            playerScreen(player0);

            playerScreen(player1);

            currentScore = 0;

            current0El.value = currentScore;

            current0El.textContent = currentScore;

        } else if (dice === 1 && player1.classList.contains('player--active')) {

            playerScreen(player1);

            playerScreen(player0);

            currentScore1 = 0;

            current1El.value = currentScore1;

            current1El.textContent = currentScore1;
        }
    }
});

btnHold.addEventListener('click', function () {

    if (playing) {

        if (player0.classList.contains('player--active')) {

            playerScreen(player0);

            playerScreen(player1);

            test += currentScore;

            score0El.textContent = test;

            currentScore = 0;

            current0El.value = currentScore;

            current0El.textContent = currentScore;

        } else if (player1.classList.contains('player--active')) {

            playerScreen(player1);

            playerScreen(player0);

            test1 += currentScore1;

            score1El.textContent = test1;

            currentScore1 = 0;

            current1El.value = currentScore1;

            current1El.textContent = currentScore1;
        }

        if (test >= 100) {

            playing = false;

            player0.classList.add('player--winner');

            playerScreen(player0);

            playerScreen(player1);

            diceEl.classList.add('hidden');

        }
        else if (test1 >= 100) {

            playing = false;

            player1.classList.add('player--winner');

            playerScreen(player1);

            playerScreen(player0);

            diceEl.classList.add('hidden');

        }
    }
});

btnNew.addEventListener('click', function () {

    test = 0;

    test1 = 0;

    score0El.textContent = 0;

    score1El.textContent = 0;

    current0El.textContent = 0;

    current1El.textContent = 0;

    currentScore = 0;

    currentScore1 = 0;

    player0.classList.remove('player--winner');

    player1.classList.remove('player--winner');

    playing = true;


    if (player1.classList.contains('player--active')) {

        playerScreen(player1);

        playerScreen(player0);
    }
})