/* Generated by Babel */
/* Decimals hide */

// DOM cache
'use strict';

var i = 0;
var hideCheckbox = document.getElementById('hide');
var index = document.getElementsByClassName('ind');

//Event listeners
hideCheckbox.addEventListener('change', hideDecimals);

// Checkbox checking
function hideDecimals() {
    for (i = 0; i < index.length; i++) {
        if (hideCheckbox.checked) {
            index[i].style.visibility = 'hidden';
        } else {
            index[i].style.visibility = 'visible';
        }
    }
};