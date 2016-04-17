/* Generated by Babel */
/* Requiring title letters toggling module */
'use strict';

require('./title.es6');
/* Requiring decimals hiding feature */
require('./hide-decimals.es6');

/* DOM caching */
var i = 0;
// Setting the goal
var goalSet = document.getElementById('goalSet');
var goalInput = document.getElementById('goalValue');
var goal = document.getElementById('goal');
var goalValue = [];

// Value of the clicked bulb
var bulb = document.getElementsByClassName('decimals');
var bulbValue = document.getElementsByClassName('ind');

// Clicked bulbs array
var clickedBulbs = [];
var clickedBulbsSum = 0;

/* Event listeners */

// Listener for setting the goal
goalSet.addEventListener('click', setGoal);

// Listener for clicking on the bulbs
for (i; i < bulb.length; i++) {
    bulb[i].addEventListener('click', returnBulbValue);
};

/* Functions */

// Setting the goal and returning the last number in the array
function setGoal() {
    goal.innerHTML = goalInput.value;
    goalValue.push(goalInput.value);

    var goalValueL = goalValue.length;

    return Number(goalValue[goalValueL - 1]);
};

// Returning the clicked value of bulb
function returnBulbValue() {
    var value = this.className.split(' ').slice(0, 1);
    for (i = 0; i < value.length; i++) {
        clickedBulbs.push(Number(value[i]));
        console.log(clickedBulbs);
    };

    var reduced = clickedBulbs.reduce(function (sum, num) {
        return sum + num;
    }, 0);
    console.log(reduced);
};