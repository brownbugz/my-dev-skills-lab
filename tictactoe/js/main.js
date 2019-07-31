// author @brownbugz - Sonnia Kemmer


/*----- constants -----*/ 
const COLORS = {
    'null': 'black',
    '1': 'red',
    '-1': 'blue'
};

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 
let cells = document.querySelectorAll('td div');

/*----- event listeners -----*/ 
document.querySelector('table')
    .addEventListener('click', handleClick);


/*----- functions -----*/
init();


function handleClick(evt) {
    let idx = parseInt(evt.target.id.replace('cell', '')); // i honestly don't understand this
    if (board[idx]) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {
    
    }
    
    if (board.includes(null)) return null; // why is this used?
    return 'T';
}

function render() {
    board.forEach(function() // i'm lost at this part

}

function init() {
    board = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ];
    turn = 1;
    winner = null;
    render();
}

