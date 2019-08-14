// author: @br0wnbugz Sonnia Kemmer 2019

// constant variables
// const plusSign;

// variables
var leftBox = document.getElementById('num1');

var rightBox = document.getElementById('num2');



// cached


// listeners
document.getElementById('equal-sign').addEventListener('click', equalButton);

// functions
function addTheNums() { 
    return parseInt(leftBox.value) + parseInt(rightBox.value);
    } 
    

// function 
function equalButton() {
    document.getElementById('answers').textContent = addTheNums();
}

// function leftInput() {
//     if (leftBox )
//     retun 
// }

// function rightInput() {

// }

